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
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} alt={product.title} className=" w-24" />
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
