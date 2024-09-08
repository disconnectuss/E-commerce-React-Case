import React from "react";

const SortBy = () => {
  return (
    <div className="sortBy-box p-5 m-5 shadow-md w-[220px] h-auto">
      <h3 className="text-md mb-2 text-boxTitle">Sort By</h3>
      <div className="flex flex-col space-y-2 bg-white p-2">
        <label className="flex items-center">
          <input type="radio" name="sort" value="old-to-new" className="mr-2" />
          Old to new
        </label>
        <label className="flex items-center">
          <input type="radio" name="sort" value="new-to-old" className="mr-2" />
          New to old
        </label>
        <label className="flex items-center">
          <input type="radio" name="sort" value="high-to-low" className="mr-2" />
          Price high to low
        </label>
        <label className="flex items-center">
          <input type="radio" name="sort" value="low-to-high" className="mr-2" />
          Price low to high
        </label>
      </div>
    </div>
  );
};

export default SortBy;
