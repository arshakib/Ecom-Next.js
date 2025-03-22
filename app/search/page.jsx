"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const searchParams = useSearchParams();
  console.log(searchParams.get("query"));
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const searchUp = searchParams.get("query");
      try {
        const response = await fetch(`/api/search?query=${searchUp}`);
        const data = await response.json();
        setProducts(data.products);
        console.log(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [searchParams]);
  return (
    <div>
      <div
        id="product"
        className="px-4 md:px-12 py-5 md:py-10 flex justify-center items-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product, index) => (
            <Link href={`/product/${product._id}`} key={index}>
              <Image
                src={product.image}
                alt="img"
                width={1000}
                height={1000}
                className="max-w-[17rem] h-72 object-cover object-center rounded-lg"
              />

              <div className="mt-4">
                <h2 className="font-semibold text-lg">{product.name}</h2>
                <p className="font-medium text-sm mt-1">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
