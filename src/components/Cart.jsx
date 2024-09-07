import React from "react";

const Cart = () => {
  return (
    <div className="bg-white p-4">
      <h2 className="text-md text-boxTitle mb-4">Cart</h2>
      <div className="cart">
        <div className="flex flex-row">
          <div className="model-price flex flex-col">
            <p>Samsung s22</p>
            <p>12.000 ₺</p>
          </div>
          <div className="amount-box flex flex-row bg-boxTitle">
            <button className="decrement">-</button>
            <p className="amount bg-primary">amount</p>
            <button className="increment">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
