import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    console.log("added");
  };
  return (
    <div className="bg-white p-4 m-5 rounded-lg shadow-md w-[220px]">
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

      <button
        className="text-white px-4 py-2 rounded-lg bg-primary hover:scale-95"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
