import React from "react";
import AddForm from "../components/AddForm";

const page = () => {
  return (
    <div>
      <div className="px-4 md:px-12 bg-[#F8F9FA] pb-8">
        <h2 className="text-center font-semibold pt-8 text-xl md:text-2xl w-full mx-autp">
          Add a new product
        </h2>

        {/* Add Form Component */}
        <AddForm />
      </div>
    </div>
  );
};

export default page;
