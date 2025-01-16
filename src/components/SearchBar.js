import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-gray-100 px-6 py-4 flex items-center justify-between rounded-lg shadow-md">
      {/* Trip Type */}
      <div className="flex flex-col text-sm">
        <span className="text-gray-500">Trip Type</span>
        <span className="text-blue-600 font-medium">Round Trip</span>
      </div>

      {/* From */}
      <div className="flex flex-col text-sm">
        <span className="text-gray-500">From</span>
        <span className="text-blue-600 font-medium">Rajkot</span>
      </div>

      {/* Swap Icon */}
      <div className="text-blue-600 px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.25 9.75L6.75 6.25m0 0L10.25 2.75M6.75 6.25h12.5m-3.5 9l3.5 3.5m0 0l-3.5 3.5m3.5-3.5H6.75"
          />
        </svg>
      </div>

      {/* To */}
      <div className="flex flex-col text-sm">
        <span className="text-gray-500">To</span>
        <span className="text-blue-600 font-medium">Mumbai</span>
      </div>

      {/* Departure */}
      <div className="flex flex-col text-sm">
        <span className="text-gray-500">Departure</span>
        <span className="text-blue-600 font-medium">03 Jan</span>
      </div>

      {/* Separator */}
      <span className="text-gray-400">-</span>

      {/* Return */}
      <div className="flex flex-col text-sm">
        <span className="text-gray-500">Return</span>
        <span className="text-blue-600 font-medium">06 Jan</span>
      </div>

      {/* Travellers */}
      <div className="flex flex-col text-sm">
        <span className="text-gray-500">Traveller(s)</span>
        <span className="text-blue-600 font-medium">1 Traveller(s)</span>
      </div>

      {/* Class */}
      <div className="flex flex-col text-sm">
        <span className="text-gray-500">Class</span>
        <span className="text-blue-600 font-medium">Economy</span>
      </div>

      {/* Fare Type */}
      <div className="flex flex-col text-sm">
        <span className="text-gray-500">Fare Type</span>
        <span className="text-blue-600 font-medium">Regular</span>
      </div>

      {/* Search Button */}
      <button className="bg-blue-600 text-white p-3 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 19c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM21 21l-4.35-4.35"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
