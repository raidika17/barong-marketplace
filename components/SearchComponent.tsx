import React from "react";

const SearchComponent: React.FC = () => {
  return (
    <>
      <input
        className="border shadow-lg text-orange-300 font-bold rounded-full px-4 py-1 w-full focus:outline-none focus:ring focus:ring-orange-500"
        placeholder="Search..."
      />
    </>
  );
};

export default SearchComponent;
