import React from "react";

const Pagination = ({
  currentPage,
  handlePrevClick,
  handleNextClick,
  disablePrev,
}) => {
  return (
    <div className="mt-4 flex justify-between">
      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
          disablePrev && "opacity-50 cursor-not-allowed"
        }`}
        onClick={handlePrevClick}
        disabled={disablePrev}
      >
        Previous
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
