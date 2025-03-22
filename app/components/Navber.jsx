"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Navber = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  return (
    <nav className="px-4 md:px-12 py-4 md:py-6 ">
      <div className="flex items-center justify-between">
        <Link href="/" className="hidden md:inline-block font-semibold text-lg">
          Zwatches
        </Link>
        <div className="flex items-center gap-1.5">
          <div className="relative">
            <FaSearch />
          </div>
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)} // ✅ Updates state on typing
            onKeyDown={(e) => {
              console.log("key", e.key);
              if (e.key === "Enter") {
                e.preventDefault(); // ✅ Prevents form submission
                router.push(`/search?query=${search}`); // ✅ Navigates when Enter is pressed
              }
            }}
            className="h-[36px] relative pl-10 border-[1px] border-black/[0.7] text-sm rounded-[8px] w-full py-2 px-3 focus:outline-none bg-transparent"
            placeholder="Search"
          />
        </div>
        <Link href="/add-product">
          <button className="hidden md:inline-block bg-black text-white px-4 py-2 rounded-[8px]">
            Add Product
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navber;
