import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity, selectCart } from "../redux/slices/cartSlice"

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectCart); // Access the cart items from Redux

  const handleIncrement = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id, quantity) => {
    dispatch(decrementQuantity({ id }));
  };

  // Calculate total price
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-white p-4">
      <h2 className="text-md text-boxTitle mb-4 min-w-30">Cart</h2>
      <div className="cart flex flex-col justify-between items-center py-2 shadow-md gap-2">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="flex flex-row gap-3">
              <div className="model-price flex flex-col text-sm">
                <p>{item.name}</p>
                <p className="text-primary">{item.price}₺</p>
              </div>
              <div className="quantity-box flex flex-row bg-gray-200 items-center space-x-2">
                <button
                  className="decrement w-8 h-8 flex items-center justify-center text-lg"
                  onClick={() => handleDecrement(item.id, item.quantity)}
                >
                  -
                </button>
                <p className="quantity bg-primary w-8 h-8 flex items-center justify-center text-lg">
                  {item.quantity}
                </p>
                <button
                  className="increment w-8 h-8 flex items-center justify-center text-lg"
                  onClick={() => handleIncrement(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <h2 className="checkout text-boxTitle mt-5 mb-2">Checkout</h2>
      <div className="shadow-md">
        <h2 className="total text-bold text-secondary mb-3">
          Total Price:{" "}
          <span className="text-primary text-semibold">{totalPrice}₺</span>
        </h2>
        <button className="bg-primary text-white text-sm flex items-center rounded-lg px-5 py-2 mb-5">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
