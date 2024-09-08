import React from 'react';

const ModelFilter = () => {
  return (
    <div className="model-box p-5 m-5 shadow-md w-[220px] h-auto text-black">
      <h3 className="text-md mb-2 text-boxTitle">Model</h3>
      <div className="mb-3 bg-white">
        <input
          type="text"
          placeholder="Search"
          className="search-box w-full px-4 py-2 bg-gray-100"
        />
      </div>
      <div className="flex flex-col space-y-2 max-h-48 overflow-y-auto text-secondary">
        <label>
          <input type="checkbox" value="11" className="mr-2" />
          11
        </label>
        <label>
          <input type="checkbox" value="12 Pro" className="mr-2" />
          12 Pro
        </label>
        <label>
          <input type="checkbox" value="13 Pro Max" className="mr-2" />
          13 Pro Max
        </label>
      </div>
    </div>
  );
};

export default ModelFilter;
