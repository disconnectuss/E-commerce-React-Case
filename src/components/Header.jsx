import React from "react";
import CartIcon from "../assets/icons/cartIcon";
import UserIcon from "../assets/icons/UserIcon";
import SearchIcon from "../assets/icons/SearchIcon";

const Header = () => {
  return (
    <div className="header-container flex justify-between items-center h-[50px] px-6 text-white bg-primary">
  {/* Left section with logo and search */}
  <div className="flex items-center gap-8">
    <h1 className="text-xl font-semibold">Eteration</h1>

    {/* Search input with icon */}
    <div className="relative">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-500" />
      </span>
      <input
        type="text"
        className="search-box pl-10 pr-3 py-1 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        placeholder="Search"
      />
    </div>
  </div>

  {/* Right section with cart and user details */}
  <div className="flex items-center gap-8">
    <div className="total-price flex gap-2 items-center">
      <CartIcon />
      <span className="font-medium">117.000 ₺</span>
    </div>

    <div className="user flex gap-2 items-center">
      <UserIcon />
      <span className="font-medium">Kerem</span>
    </div>
  </div>
</div>


  );
};

export default Header;
