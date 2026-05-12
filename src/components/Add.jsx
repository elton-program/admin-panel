import React, { useState } from "react";
import axios from "axios";
import "../App.css";
const Add = ({setAdd}) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3000/products`, formData).then(() => {
      setAdd(false);
    });
  };

  return (
    <div className="modal add-modal">
      <form className="form add-form" onSubmit={handleSubmit}>
        <input
          className="input"
          required
          onChange={handleChange}
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
        />

        <input
          className="input"
          required
          onChange={handleChange}
          type="number"
          placeholder="Price"
          name="price"
          value={formData.price}
        />

        <input
          className="input"
          required
          onChange={handleChange}
          type="text"
          placeholder="Category"
          name="category"
          value={formData.category}
        />
        <input
          className="input"
          required
          onChange={handleChange}
          type="text"
          placeholder="Description"
          name="description"
          value={formData.description}
        />
        <input
          className="input"
          required
          onChange={handleChange}
          type="url"
          placeholder="Image URL"
          name="image"
          value={formData.image}
        />

        <div className="btn-group">
          <button className="btn btn-save">Save</button>

          <button
            type="button"
            className="btn btn-close"
            onClick={() => {
              setAdd(false);
            }}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;