import React from "react";

const BrandFilter = () => {
  return (
    <div className="brands-box p-5 m-5 shadow-md w-[220px] h-auto text-black">
      <h3 className="text-md mb-2 text-boxTitle">Brands</h3>
      <div className="mb-3 bg-white">
        <input
          type="text"
          placeholder="Search"
          className="search-box w-full px-4 py-2 bg-gray-100"
        />
      </div>
      <div className="flex flex-col space-y-2 max-h-48 overflow-y-auto text-secondary">
        <label>
          <input type="checkbox" value="Apple" className="mr-2" />
          Apple
        </label>
        <label>
          <input type="checkbox" value="Samsung" className="mr-2" />
          Samsung
        </label>
        <label>
          <input type="checkbox" value="Huawei" className="mr-2" />
          Huawei
        </label>
      </div>
    </div>
  );
};

export default BrandFilter;
