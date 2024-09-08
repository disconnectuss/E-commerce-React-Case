import React from "react";
import Cart from "../components/Cart";

const ProductDetail = () => {
  return (
    <div className="flex sm:flex-col flex-row w-3/4 gap-3 mx-auto">
      {/* Product Detail Section */}
      <div className="flex flex-col sm:flex-col md:flex-row max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md w-full">
        {/* Left: Product Image */}
        <div className="w-full md:w-1/2 bg-gray-300 h-64 mb-6 md:mb-0">
          {/* Placeholder for the product image */}
        </div>

        {/* Right: Product Information */}
        <div className="w-full md:w-1/2 flex flex-col justify-between pl-6">
          {/* Product Title and Price */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              iPhone 11 Pro Max
            </h2>
            <p className="text-blue-600 text-xl font-semibold mb-4">10.000₺</p>

            {/* Add to Cart Button */}
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full mb-4 hover:bg-blue-600 transition duration-300">
              Add to Cart
            </button>

            {/* Product Description */}
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              augue magna, laoreet ac consectetur et, luctus sit amet erat.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla facilisi. Suspendisse
              egestas maximus eleifend.
            </p>
          </div>
        </div>
      </div>

      {/* Right: Cart Section */}
      <div className="right w-full md:w-auto">
        <Cart />
      </div>
    </div>
  );
};

export default ProductDetail;
