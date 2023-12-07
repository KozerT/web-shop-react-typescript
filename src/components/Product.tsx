import React, { useState } from "react";
import { Iproduct } from "../models";

interface ProductProps {
  product: Iproduct;
}

const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);
  const btnBgCLassName = details ? "bg-blue-300" : "bg-yellow-300";

  const btnClasses = ["py-2 px-4 border", btnBgCLassName];

  return (
    <div className="flex flex-col items-center max-w-sm px-4 py-2 mb-2 border rounded shadow">
      <div className="w-1/2 h-48 m-auto">
        <img src={product.image} alt={product.title} className="w-24 h-36" />
      </div>
      <p>{product.title}</p>
      <p className="font-bold">{product.price}$</p>
      <button
        className={btnClasses.join(" ")}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "Hide Details" : "Show Details"}
      </button>

      {details && (
        <div>
          <p>{product.description} </p>
          <p>
            Rate:
            <span style={{ fontWeight: "bold" }}>
              {product?.rating?.rate}
            </span>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Product;
