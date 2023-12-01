import { useEffect, useState } from "react";
import Product from "./components/Product";
import { products } from "./data/products.ts";
import axios, { AxiosError } from "axios";
import { Iproduct } from "./models.ts";

function App() {
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<Iproduct[]>(
        "https://fakestoreapi.com/products?limit=5"
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

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-800"> {error}</p>}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default App;
