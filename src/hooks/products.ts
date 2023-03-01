import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {Product} from "../models";

export default function useProducts(productsFetchCount: number = 5) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchProducts() {
    setError("");
    setLoading(true);

    try {
      const response = await axios.get<Product[]>(`https://fakestoreapi.com/products`, {
        /*params: {
          limit: products.length + productsFetchCount,
        }*/
      });
      setProducts(response.data);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setError(error.message);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return {products, loading, error, fetchProducts};
}