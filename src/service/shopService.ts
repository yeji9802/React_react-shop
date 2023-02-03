import axios from "axios";

const remote = axios.create();

// Get all products
export const getProductByAll = async () => {
  const url = "https://fakestoreapi.com/products";
  const response = await remote.get(url);

  return response.data;
};

// Get all categories, Limit results
export const getProductByCategory = async (category: string, limit: number) => {
  const url = `https://fakestoreapi.com/products/category/${category}?limit=${limit}`;
  const response = await remote.get(url);

  return response.data;
};

// Get a single product
export const getProductById = async (id: number) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  const response = await remote.get(url);

  return response.data;
};

// Get a single cart
export const getProductByCart = async () => {
  const url = "https://fakestoreapi.com/carts";
  const response = await remote.get(url);

  return response.data;
};
