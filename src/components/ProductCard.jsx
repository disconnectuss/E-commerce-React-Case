import React from 'react'

const ProductCard = () => {
  return (
    <div className="bg-white p-4 m-5 rounded-lg shadow-md w-[220px] ">
    <div className="h-48 bg-gray-300 mb-4">
        <img src="" alt="" /></div> {/* Placeholder for product image */}
    <div className="text-gray-800 font-semibold mb-2">Product Name</div>
    <div className="text-primary font-bold mb-4">$15.00</div>
    <button className=" text-white px-4 py-2 rounded-lg bg-primary">
      Add to Cart
    </button>
  </div>
  )
}

export default ProductCard
 