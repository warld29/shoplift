import React from "react";
import { productItems } from "../utils/contain";
import Top from "../component/Top";
import Navbar from "../component/Navbar";

const Product = () => {
  return (
    <div>
      <Top />
      <Navbar />
      <h1>Products</h1>
      {productItems.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <img src={product.image} alt={product.title} />
        </div>
      ))}
    </div>
  );
};

export default Product;
