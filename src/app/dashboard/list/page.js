import React from "react";

const List = () => {
  return (
    <main className="flex-1 p-6 bg-white">
      <div className="mt-6">
        <div className="flex items-start mb-4">
          <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center mr-3">
            CS
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-500">Role AI</div>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-1.5 bg-gray-400 rounded-full mr-3"></span>
                <span className="text-sm text-gray-700">Use Indonesian</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-1.5 bg-gray-400 rounded-full mr-3"></span>
                <span className="text-sm text-gray-700">Formal Response</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-start mb-4">
          <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center mr-3">
            CS
          </div>
          <div className="flex-1">
            {/* <div className="flex items-center text-sm text-gray-500">
              <span className="font-medium text-gray-700">Craig Schleifer</span>
              <span className="ml-2">9:51 PM</span>
            </div> */}
            <div className="mt-2 text-sm text-gray-700">
              Aminos Facilities{" "}
              {/* <span className="bg-gray-200 px-2 py-1 rounded-lg">
                John Smith
              </span>{" "}
              <span className="bg-gray-200 px-2 py-1 rounded-lg">#998</span> */}
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-sm">
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium text-gray-700">Order #998</span>
                <span className="ml-2">Aug 10, 9:48</span>
                <span className="ml-auto">$19.00</span>
              </div>
              <div className="mt-2 text-sm text-gray-700">
                <div>
                  Placed by <span className="font-medium">Jane Doe</span>
                </div>
                <div>1 item: Custom Notebook</div>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-lg">
                    PAID
                  </span>
                  <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-lg">
                    FULFILLED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default List;
