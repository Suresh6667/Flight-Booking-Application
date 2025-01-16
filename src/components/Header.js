import React from "react";

const Header = () => {
  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="logo" />
      </div>

      {/* Right Section: Options */}
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium">Offer</span>

        {/* Profile Section */}
        <div className="flex items-center space-x-2 bg-blue-700 px-4 py-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 5.121c-.854.854-1.121 2.143-.707 3.293A5 5 0 1017.586 5.707c-.854-.854-2.143-1.121-3.293-.707A5 5 0 005.121 5.121zM14.828 14.828a5 5 0 00-6.728-.707"
            />
          </svg>
          <span>Jenny Shah</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </div>

        {/* Country/Language Section */}
        <div className="flex items-center space-x-2 bg-blue-700 px-4 py-2 rounded-lg">
          <span className="flex items-center space-x-2">
            <img
              src="/india.png"
              alt="India Flag"
              className="w-5 h-5"
            />
            <span>IN | ENR | INR</span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Header;
