import React, { useState } from "react";

const Filters = () => {
  // State for toggling each section
  const [onwardOpen, setOnwardOpen] = useState(true);
  const [returnOpen, setReturnOpen] = useState(true);
  const [airlinesOpen, setAirlinesOpen] = useState(false);
  const [aircraftOpen, setAircraftOpen] = useState(false);

  // Toggle handlers
  const toggleOnward = () => setOnwardOpen(!onwardOpen);
  const toggleReturn = () => setReturnOpen(!returnOpen);
  const toggleAirlines = () => setAirlinesOpen(!airlinesOpen);
  const toggleAircraft = () => setAircraftOpen(!aircraftOpen);

  return (
    <div className="w-full p-4 bg-white shadow-lg rounded-lg">
      {/* Flight Count */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">6 of 31 flights</h2>
        <a href="#" className="text-orange-600 text-sm font-medium">
          <u>Show All</u>
        </a>
      </div>

      {/* Onward Journey Section */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleOnward}
        >
          <h3 className="text-md font-semibold text-black">
            Onward Journey
          </h3>
          <span>
            {onwardOpen ? (
              <svg
                className="w-4 h-4 transform rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </span>
        </div>
        {onwardOpen && (
          <div className="mt-4">
            {/* Stops */}
            <h4 className="font-medium text-orange-600">Stops</h4>
            <ul className="space-y-2 mt-2">
              <li>
                <input type="checkbox" id="nonstop-onward" className="mr-2" />
                <label htmlFor="nonstop-onward">Non-Stop</label>
              </li>
              <li>
                <input type="checkbox" id="1stop-onward" className="mr-2" />
                <label htmlFor="1stop-onward">1 Stop</label>
              </li>
              <li>
                <input type="checkbox" id="2stop-onward" className="mr-2" />
                <label htmlFor="2stop-onward">2 Stop</label>
              </li>
            </ul>

            {/* Departure */}
            <h4 className="font-medium text-orange-600 mt-4">
              Departure from Rajkot
            </h4>
            <ul className="space-y-2 mt-2">
              <li>
                <input type="checkbox" id="00-06-onward" className="mr-2" />
                <label htmlFor="00-06-onward">00 - 06</label>
              </li>
              <li>
                <input type="checkbox" id="06-12-onward" className="mr-2" />
                <label htmlFor="06-12-onward">06 - 12</label>
              </li>
              <li>
                <input type="checkbox" id="12-18-onward" className="mr-2" />
                <label htmlFor="12-18-onward">12 - 18</label>
              </li>
              <li>
                <input type="checkbox" id="18-00-onward" className="mr-2" />
                <label htmlFor="18-00-onward">18 - 00</label>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Return Journey Section */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleReturn}
        >
          <h3 className="text-md font-semibold text-black">
            Return Journey
          </h3>
          <span>
            {returnOpen ? (
              <svg
                className="w-4 h-4 transform rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </span>
        </div>
        {returnOpen && (
          <div className="mt-4">
            <h4 className="font-medium text-orange-600">Stops</h4>
            <ul className="space-y-2 mt-2">
              <li>
                <input type="checkbox" id="nonstop-onward" className="mr-2" />
                <label htmlFor="nonstop-onward">Non-Stop</label>
              </li>
              <li>
                <input type="checkbox" id="1stop-onward" className="mr-2" />
                <label htmlFor="1stop-onward">1 Stop</label>
              </li>
              <li>
                <input type="checkbox" id="2stop-onward" className="mr-2" />
                <label htmlFor="2stop-onward">2 Stop</label>
              </li>
            </ul>

            {/* Departure */}
            <h4 className="font-medium text-orange-600 mt-4">
              Departure from Rajkot
            </h4>
            <ul className="space-y-2 mt-2">
              <li>
                <input type="checkbox" id="00-06-onward" className="mr-2" />
                <label htmlFor="00-06-onward">00 - 06</label>
              </li>
              <li>
                <input type="checkbox" id="06-12-onward" className="mr-2" />
                <label htmlFor="06-12-onward">06 - 12</label>
              </li>
              <li>
                <input type="checkbox" id="12-18-onward" className="mr-2" />
                <label htmlFor="12-18-onward">12 - 18</label>
              </li>
              <li>
                <input type="checkbox" id="18-00-onward" className="mr-2" />
                <label htmlFor="18-00-onward">18 - 00</label>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Airlines Section */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleAirlines}
        >
          <h4 className="font-semibold text-black">Airlines</h4>
          <span>
            {airlinesOpen ? (
              <svg
                className="w-4 h-4 transform rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </span>
        </div>
        {airlinesOpen && (
          <ul className="space-y-2 mt-2">
            {["Air India", "Air India Express", "AIX Connect", "Akasa Air", "Go First", "IndiGo", "SpiceJet", "Vistara", "Star Air", "FlyBig", "IndiaOne Air", "SpiceXpress"].map((airline) => (
              <li key={airline}>
                <input type="checkbox" id={airline} className="mr-2" />
                <label htmlFor={airline}>{airline}</label>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Aircraft Section */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleAircraft}
        >
          <h4 className="font-semibold text-black">Air Craft</h4>
          <span>
            {aircraftOpen ? (
              <svg
                className="w-4 h-4 transform rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </span>
        </div>
        {aircraftOpen && (
          <ul className="space-y-2 mt-2">
            {["ATR 42/72", "Airbus A320", "Airbus A320-100", "Airbus A320-212", "Airbus A321", "Boeing 777-200LR", "Boeing 777-300ER"].map((craft) => (
              <li key={craft}>
                <input type="checkbox" id={craft} className="mr-2" />
                <label htmlFor={craft}>{craft}</label>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Filters;
