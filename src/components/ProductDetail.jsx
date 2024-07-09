import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((p) => p.id === parseInt(id))
  );

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
