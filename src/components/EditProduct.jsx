import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../redux/actions";
// import "./EditProduct.css";

const EditProduct = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.items.find((p) => p.id === parseInt(id))
  );

  const [editedProduct, setEditedProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    if (product) {
      setEditedProduct({
        name: product.name,
        price: product.price,
        description: product.description,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ ...editedProduct, id: product.id }));
    // Additional logic for redirecting or notifying user
  };

  if (!product) return <p>Product not found</p>;

  return (
    <div className="edit-product">
      <form onSubmit={handleSubmit}>
        <h1>Edit Product</h1>
        <input
          type="text"
          name="name"
          value={editedProduct.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="price"
          value={editedProduct.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <textarea
          name="description"
          value={editedProduct.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
