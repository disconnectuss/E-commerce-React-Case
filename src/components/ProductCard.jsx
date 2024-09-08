import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigateToDetail = () => {
    navigate(`/product/${product.id}`); // Navigates to ProductDetail page with the product ID
  };

  return (
    <div
      className="bg-white p-4 m-5 rounded-lg shadow-md w-[220px] cursor-pointer"
      onClick={handleNavigateToDetail} // Navigate to ProductDetail on click
    >
      <div className="h-48 bg-gray-300 mb-4">
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

      <div className="text-primary mb-4">{product.price}₺</div>
      <div className="text-black mb-2">{product.name}</div>
    </div>
  );
};

export default ProductCard;
