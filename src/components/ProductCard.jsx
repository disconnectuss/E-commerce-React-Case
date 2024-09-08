import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 m-5 rounded-lg shadow-md w-[220px]">
      <div className="h-48 bg-gray-300 mb-4">
        {/* If the product has an image, display it */}
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="text-gray-500 text-center">No Image Available</div>
        )}
      </div>

      {/* Display product price */}
      <div className="text-primary mb-4">{product.price}₺</div>

      {/* Display product name */}
      <div className="text-black mb-2">{product.name}</div>

      {/* Add to Cart button */}
      <button className="text-white px-4 py-2 rounded-lg bg-primary">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
