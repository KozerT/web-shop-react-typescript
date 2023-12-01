import React from "react";

const CreateProduct = () => {
  return (
    <form>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title.."
      />
      <button
        className="py-2 px-4 border bg-yellow-200 hover:bg-yellow-400"
        type="submit"
      >
        Create
      </button>
    </form>
  );
};

export default CreateProduct;
