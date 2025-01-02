import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-4">
          <div className="flex items-center mb-6">
            <img src="https://placehold.co/24x24" alt="Logo" className="mr-2" />
            <span className="text-xl font-semibold">Dashboard AI</span>
          </div>
          {/* <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <i className="fas fa-search absolute top-2.5 right-3 text-gray-400"></i>
      </div> */}
          <nav>
            <ul>
              <li className="mb-2">
                <a
                  href="/dashboard"
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  <i className="fas fa-home mr-3"></i> Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/dashboard/list"
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  <i className="fas fa-box mr-3"></i> Role
                  <span className="ml-auto text-xs font-semibold text-gray-500">
                    3
                  </span>
                </a>
                {/* <ul className="ml-8 mt-2">
                  <li className="mb-2">
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
                      Shipping labels
                      <span className="ml-auto text-xs font-semibold text-gray-500">
                        3
                      </span>
                    </a>
                  </li>
                </ul> */}
              </li>
              <li className="mb-2">
                <a
                  href="/dashboard/article"
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  <i className="fas fa-cube mr-3"></i> Article
                  <span className="ml-auto text-xs font-semibold text-gray-500">
                    12
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      {children}
    </div>
  );
};

export default DashboardLayout;
