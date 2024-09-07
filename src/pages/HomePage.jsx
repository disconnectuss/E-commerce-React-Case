import React from "react";
import Header from "../components/Header";
import SortBy from "../components/SortBy";
import BrandFilter from "../components/BrandFilter";
import ModelFilter from "../components/ModelFilter";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";

const HomePage = () => {
  return (
    <div className="min-h-screen mt-10 flex flex-row gap-5">
      {/* Header */}
      <Header />

      {/* Main content area */}
      <div className="content flex py-10 px-8">
        {/* Left: Filters */}
        <div className="boxes flex flex-col w-1/4 gap-5 pr-6">
          <SortBy />
          <BrandFilter />
          <ModelFilter />
        </div>

        {/* Middle: Products */}
        <div className="products w-1/2 grid grid-cols-4 gap-6">
          {/* This is where your products will be displayed */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        {/* Right: Cart */}
        <div className="cart w-1/4 pl-6">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
