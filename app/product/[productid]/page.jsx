"use client";

import ProductData from "@/app/components/ProductData";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const params = useParams();
  const [productData, setProductData] = useState({});
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`/api/products?id=${params.productid}`, {
        headers: { "Cache-Control": "no-cache" },
      })
      .then((res) => setProductData(res.data.product))
      .catch((error) => console.error("Error fetching product data:", error));
  }, [params.productid]);
  if (!productData) {
    return <p>Loading...</p>;
  }
  console.log(productData);
  return (
    <div>
      <div className="px-4 md:px-12 bg-[#F8F9FA]">
        <p className="cursor-pointer py-3" onClick={() => router.back()}>
          &larr; Back
        </p>
      </div>
      <ProductData product={productData} />{" "}
    </div>
  );
};

export default page;
