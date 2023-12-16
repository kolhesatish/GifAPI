import React from "react";

const GiphyList = ({ filteredData }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {filteredData.map((gif) => (
        <div
          key={gif.id}
          className="max-w-[200px] overflow-hidden rounded-md shadow-md"
        >
          <img
            src={gif.images.fixed_height.url}
            className="w-full h-auto"
            alt={gif.title}
          />
          <p className="gif-title">{gif.title}</p>
        </div>
      ))}
    </div>
  );
};

export default GiphyList;
