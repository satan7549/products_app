import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "../components/ProductList";
import NewProduct from "../components/NewProduct";
import ProductDetail from "../components/ProductDetail";
import EditProduct from "../components/EditProduct";

const AllRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/products/new" element={<NewProduct />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/products/:id/edit" element={<EditProduct />} />
    </Routes>
  );
};

export default AllRouts;
