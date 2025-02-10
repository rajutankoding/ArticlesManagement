import React from "react";

const Dashboard = () => {
  return (
    <main className="flex-1 p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Orders / Activity</h1>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
        <div className="flex items-start mb-4">
          <img
            src="https://placehold.co/40x40"
            alt="User avatar"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="flex-1">
            <textarea
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Leave a comment..."></textarea>
            <div className="flex items-center mt-2">
              <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600">
                Post
              </button>
              <i className="fas fa-paperclip ml-3 text-gray-500"></i>
              <i className="fas fa-smile ml-3 text-gray-500"></i>
              <i className="fas fa-at ml-3 text-gray-500"></i>
              <i className="fas fa-hashtag ml-3 text-gray-500"></i>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Only you and other staff can see this
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
