import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ... (FlightOption and DateSelector components remain the same)
const FlightOption = ({ 
  departTime, 
  arriveTime, 
  duration, 
  price, 
  selected, 
  stops,
  seatsLeft 
}) => (
  <div className={`flex items-center p-4 border rounded-lg mb-2 cursor-pointer hover:border-blue-500 ${selected ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
    <div className="flex-1 flex items-center gap-6">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 bg-indigo-600 rounded-sm"></div>
        <span className="text-xs text-gray-500 mt-1">Indigo</span>
      </div>
      
      <div className="flex items-center gap-4 flex-1">
        <span className="text-lg font-semibold">{departTime}</span>
        <div className="flex flex-col items-center flex-1 max-w-[100px]">
          <span className="text-xs text-gray-500">{duration}</span>
          <div className="w-full h-px bg-gray-300 my-1"></div>
          <span className="text-xs text-gray-500">{stops || 'Non Stop'}</span>
        </div>
        <span className="text-lg font-semibold">{arriveTime}</span>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <div className="flex flex-col items-end">
        <span className="text-lg font-semibold">₹{price}</span>
        {seatsLeft && (
          <span className="text-xs text-red-500">{seatsLeft}</span>
        )}
      </div>
      <div className={`w-5 h-5 rounded-full border-2 ${selected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}>
      </div>
    </div>
  </div>
);

const DateSelector = ({ date, price, selected }) => (
  <div className={`px-3 py-2 text-center cursor-pointer ${selected ? 'text-blue-600' : 'text-gray-600'}`}>
    <div className="text-sm">{date}</div>
    <div className="text-xs">₹{price}</div>
  </div>
);

const FlightSection = ({ title, route, date, flights }) => (
  <div className="flex-1 min-w-0">
    <div className="flex justify-between items-center mb-4">
      <div className="text-lg font-semibold">
        <span>{route.from}</span>
        <span className="mx-2">→</span>
        <span>{route.to}</span>
        <span className="ml-2 text-gray-500">{date}</span>
      </div>
    </div>

    <div className="flex items-center mb-6 border-b">
      <button className="p-2">
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>
      <div className="flex-1 flex justify-between">
        {[
          { date: 'Tue, 02 Jan', price: '5,453' },
          { date: 'Tue, 02 Jan', price: '5,453', selected: true },
          { date: 'Tue, 02 Jan', price: '5,453' }
        ].map((item, i) => (
          <DateSelector key={i} {...item} />
        ))}
      </div>
      <button className="p-2">
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>
    </div>

    <div className="space-y-3 overflow-y-auto max-h-[600px]">
      {flights.map((flight, index) => (
        <FlightOption key={index} {...flight} />
      ))}
    </div>
  </div>
);

const SummaryCard = ({ departFlight, returnFlight }) => (
  <div className="flex bg-[#001835] text-white p-6 rounded-lg justify-between items-start mt-6">
    <div className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1">
          <div className="text-orange-400 font-medium mb-2">Departure</div>
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold">{departFlight.departTime}</div>
            <div className="flex flex-col items-center px-3">
              <div className="text-sm text-gray-400">{departFlight.duration}</div>
              <div className="w-24 h-px bg-gray-600 my-1"></div>
              <div className="text-sm text-gray-400">Non Stop</div>
            </div>
            <div className="text-3xl font-bold">{departFlight.arriveTime}</div>
          </div>
          <div className="text-2xl font-bold mt-2">₹{departFlight.price}</div>
        </div>

        <div className="w-px h-24 bg-gray-700 mx-8"></div>

        <div className="flex-1">
          <div className="text-orange-400 font-medium mb-2">Return</div>
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold">{returnFlight.departTime}</div>
            <div className="flex flex-col items-center px-3">
              <div className="text-sm text-gray-400">{returnFlight.duration}</div>
              <div className="w-24 h-px bg-gray-600 my-1"></div>
              <div className="text-sm text-gray-400">Non Stop</div>
            </div>
            <div className="text-3xl font-bold">{returnFlight.arriveTime}</div>
          </div>
          <div className="text-2xl font-bold mt-2">₹{returnFlight.price}</div>
        </div>
      </div>

      <button className="text-white text-sm underline">Flight Details</button>
    </div>

    <div className="bg-blue-500 p-4 rounded-lg text-center min-w-[200px]">
      <div className="text-3xl font-bold mb-2">₹{parseInt(departFlight.price.replace(',', '')) + parseInt(returnFlight.price.replace(',', ''))}</div>
      <div className="text-sm mb-4">Get ₹500 off with CTDOM</div>
      <button className="bg-[#001835] text-white w-full py-2 rounded-lg mb-2">
        Book Now
      </button>
      <button className="bg-[#001835] text-white w-full py-2 rounded-lg">
        Lock Price
      </button>
    </div>
  </div>
);

const FlightBookingInterface = () => {
  const departureFlights = [
    { departTime: "08:45", arriveTime: "09:55", duration: "1h 10m", price: "4,298" },
    { departTime: "09:05", arriveTime: "10:15", duration: "1h 10m", price: "4,403" },
    { departTime: "12:30", arriveTime: "13:35", duration: "1h 5m", price: "4,718", seatsLeft: "1 seat left" },
    { departTime: "19:20", arriveTime: "20:25", duration: "1h 5m", price: "5,453", selected: true },
    { departTime: "20:05", arriveTime: "20:20", duration: "1h 15m", price: "12,751" }
  ];

  const returnFlights = [
    { departTime: "08:45", arriveTime: "09:55", duration: "1h 10m", price: "4,298" },
    { departTime: "10:50", arriveTime: "12:00", duration: "1h 10m", price: "4,659", seatsLeft: "2 seats left" },
    { departTime: "17:20", arriveTime: "18:50", duration: "1h 30m", price: "4,659" },
    { departTime: "19:20", arriveTime: "20:25", duration: "1h 5m", price: "5,453", selected: true },
    { departTime: "13:00", arriveTime: "19:25", duration: "6h 25m", price: "11,642" }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex gap-6">
        <FlightSection 
          title="Departure" 
          route={{ from: "Rajkot", to: "Mumbai" }}
          date="Wed, 3 Jan"
          flights={departureFlights}
        />
        
        <FlightSection 
          title="Return"
          route={{ from: "Mumbai", to: "Rajkot" }}
          date="Sat, 6 Jan"
          flights={returnFlights}
        />
      </div>

      <SummaryCard 
        departFlight={departureFlights.find(f => f.selected)}
        returnFlight={returnFlights.find(f => f.selected)}
      />
    </div>
  );
};

export default FlightBookingInterface;