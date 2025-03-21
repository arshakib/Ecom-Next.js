"use client";

import React, { useState } from "react";

const AddForm = () => {
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const image = form.image.files[0];

    const formData = new FormData();
    formData.append("image", image);

    // Upload image to imgbb
    const res = await fetch(
      "https://api.imgbb.com/1/upload?key=90e8400173b8e420a6134c2a5baa3d33",
      {
        method: "POST",
        body: formData,
      }
    );

    const resJson = await res.json();

    if (!resJson.success) {
      console.error("Image upload failed:", resJson);
      return;
    }

    const productData = {
      name: form.name.value,
      price: form.price.value,
      description: form.description.value,
      link: form.link.value,
      image: resJson.data.url, // Store uploaded image URL
    };

    setImageURL(resJson.data.url);

    console.log("Submitting product:", productData);

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Product added:", data);
        alert("Product added successfully!");
        form.reset();
        setImageURL("");
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl mx-auto flex flex-col justify-center items-center space-y-4 mt-3 md:mt-5"
      >
        {imageURL && <img className="w-full" src={imageURL} alt="" srcset="" />}
        <div className="flex flex-col w-full">
          <label>Product Image: </label>
          <input
            type="file"
            accept="image/*"
            name="image"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>

        <div className="flex flex-col w-full">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Enter the product name"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>

        <div className="flex flex-col w-full">
          <label>Price: </label>
          <input
            type="number"
            name="price"
            placeholder="Enter the product price"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>

        <div className="flex flex-col w-full">
          <label>Seller's Link: </label>
          <input
            type="text"
            name="link"
            placeholder="Link to where buyers can find you"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>

        <div className="flex flex-col w-full">
          <label>Description: </label>
          <textarea
            name="description"
            placeholder="Enter the product description"
            rows={4}
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full px-3 py-2 rounded-md cursor-pointer ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-[#212529] text-white"
          }`}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddForm;
