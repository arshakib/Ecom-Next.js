import React from "react";

const ProductList = () => {
  const product = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
    },
    {
      id: 3,
      name: "Product 3",
      price: 39.99,
    },
    {
      id: 4,
      name: "Product 4",
      price: 49.99,
    },
    {
      id: 5,
      name: "Product 5",
      price: 59.99,
    },
  ];
  return (
    <div
      id="product"
      className="px-4 md:px-12 py-5 md:py-10 flex justify-center items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {product.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
