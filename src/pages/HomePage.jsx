import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import SortBy from "../components/SortBy";
import BrandFilter from "../components/BrandFilter";
import ModelFilter from "../components/ModelFilter";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import { fetchProducts } from "../redux/slices/productSlice"; 

const HomePage = () => {
  const dispatch = useDispatch();
  const { productList, isLoading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts(1)); 
  }, [dispatch]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content area */}
      <div className="content flex flex-col lg:flex-row py-10 px-8">
        {/* Left: Filters */}
        <div className="boxes flex flex-row md:flex-col w-full md:w-1/4 gap-5">
          <SortBy />
          <BrandFilter />
          <ModelFilter />
        </div>

        {/* Middle: Products */}
        <div className="products w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 lg:mt-0">
          {isLoading && <p>Loading products...</p>}
          {error && <p>Error loading products: {error}</p>}
          {productList.map((product, index) => (
            <ProductCard key={product.id || index} product={product} />
          ))}
        </div>

        {/* Right: Cart */}
        <div className="cart w-full lg:w-1/4 mt-6 lg:mt-0 pl-0 lg:pl-6">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
