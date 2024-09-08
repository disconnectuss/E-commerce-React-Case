import React from "react";

const Cart = () => {
  return (
    <div className="bg-white p-4 ">
      <h2 className="text-md text-boxTitle mb-4 min-w-30 ">Cart</h2>
      <div className="cart flex flex-col justify-between items-center py-2 shadow-md gap-2">
        <div className="flex flex-row gap-3">
          <div className="model-price flex flex-col text-sm">
            <p>Samsung s22</p>
            <p className="text-primary">12.000 ₺</p>
          </div>
          <div className="quantity-box flex flex-row bg-gray-200 items-center space-x-2">
            <button className="decrement w-8 h-8 flex items-center justify-center text-lg">
              -
            </button>
            <p className="quantity bg-primary  w-8 h-8 flex items-center justify-center text-lg">
              3
            </p>
            <button className="increment  w-8 h-8 flex items-center justify-center text-lg">
              +
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="model-price flex flex-col text-sm">
            <p>Samsung s22</p>
            <p className="text-primary">12.000 ₺</p>
          </div>
          <div className="quantity-box flex flex-row bg-gray-200 items-center space-x-2">
            <button className="decrement w-8 h-8 flex items-center justify-center text-lg">
              -
            </button>
            <p className="quantity bg-primary  w-8 h-8 flex items-center justify-center text-lg">
              3
            </p>
            <button className="increment  w-8 h-8 flex items-center justify-center text-lg">
              +
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="model-price flex flex-col text-sm">
            <p>Samsung s22</p>
            <p className="text-primary">12.000 ₺</p>
          </div>
          <div className="quantity-box flex flex-row bg-gray-200 items-center space-x-2">
            <button className="decrement w-8 h-8 flex items-center justify-center text-lg">
              -
            </button>
            <p className="quantity bg-primary  w-8 h-8 flex items-center justify-center text-lg">
              3
            </p>
            <button className="increment  w-8 h-8 flex items-center justify-center text-lg">
              +
            </button>
          </div>
        </div>
      </div>
      <h2 className="checkout text-boxTitle mt-5 mb-2">Checkout</h2>
      <div className="shadow-md">
        <h2 className="total text-bold text-secondary mb-3">
          Total Price:{" "}
          <span className="text-primary text-semibold">11700 ₺</span>
        </h2>
        <button className="bg-primary text-white text-smflex items-center rounded-lg px-5 py-2 mb-5">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
