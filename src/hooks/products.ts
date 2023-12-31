import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Iproduct } from "../models";

const useProducts = () => {
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function addProduct(product: Iproduct) {
    setProducts((prev) => [...prev, product]);
  }

  const fetchProducts = async () => {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<Iproduct[]>(
        "https://fakestoreapi.com/products?limit=6"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, addProduct };
};

export default useProducts;
