import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import FlightCard from "./components/FlightCard";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Header />

      {/* Search Bar */}
      <div className="p-6">
        <SearchBar />
      </div>

      {/* Main Content */}
      <div className="p-6 grid grid-cols-12 gap-4">
        {/* Filters Section */}
        <aside className="col-span-3 bg-white shadow-md rounded-lg p-4">
          <Filters />
        </aside>

        {/* Flights and Summary */}
        <div className="col-span-9 flex flex-col gap-6">
          {/* Flights Section */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Flights from Rajkot to Mumbai, and back
            </h2>
           
            {/* Flight Cards */}
            <div className="flex flex-col gap-4">
              
              <FlightCard />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;
