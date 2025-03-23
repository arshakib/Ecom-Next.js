import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductList from "./ProductList";

const ProductData = ({ product }) => {
  console.log(product);
  return (
    <div>
      <div className="px-4 md:px-12 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:space-x-10">
          <Image
            src={product.image || ""}
            alt={product.name || "Product Image"}
            width={1000}
            height={1000}
            className="max-w-full md:max-w-xl md:min-w-[30rem] min-h-[28rem] max-h-[28rem] object-cover object-center basis-1/2"
          />

          <div className="basis-1/2 py-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl">{product?.name}</h2>
            </div>

            <h3 className="text-3xl font-semibold mt-3">${product?.price}</h3>

            {product.link ? (
              <Link href={product.link} target="_blank">
                <button className="mt-8 bg-[#212529] hover:bg-[#343A40] text-white px-3 py-2 w-full font-semibold">
                  Contact Seller
                </button>
              </Link>
            ) : (
              <p>Seller contact link not available</p>
            )}

            <p className="font-semibold mt-10 text-lg">Description</p>
            <p className="mt-1">{product?.description}</p>
          </div>
        </div>

        <h2 className="w-full text-2xl font-semibold pt-20">
          You might also like
        </h2>
        <ProductList />
      </div>
    </div>
  );
};

export default ProductData;
