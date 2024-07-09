import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions";
import "./NewProduct.css";

const NewProduct = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product)); // Dispatch action to add product
    setProduct({ name: "", price: "", description: "" }); // Reset form fields
  };

  return (
    <div className="new-product">
      <form onSubmit={handleSubmit}>
        <h1>Add New Product</h1>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default NewProduct;
