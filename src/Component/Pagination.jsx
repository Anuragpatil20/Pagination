import React, { useState } from "react";

// Pagination Component
const Pagination = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-auto bg-[url('http://getwallpapers.com/wallpaper/full/1/a/3/1519947-vertical-dark-theme-wallpaper-1920x1080-4k.jpg')] bg-cover items-center">
      <div className="p-6 max-w-2xl mx-auto rounded-lg shadow-2xl">
        <div className="flex items-center mb-4">
          <img src="https://cdn-icons-png.flaticon.com/128/12209/12209662.png" className="h-10 w-10 ml-45  mr-3" />
          <h2 className="text-4xl font-bold font-mono  text-yellow-500 uppercase">Item List</h2>
        </div>
        <ul className="border rounded-lg shadow-md bg-transparent divide-y divide-gray-300">
          {displayedItems.map((item, index) => (
            <li key={index} className="p-4 hover:bg-gradient-to-r from-green-400 hover:rounded-lg shadow-lg to-blue-500 hover:text-black text-white hover:scale-105 duration-300 flex items-center justify-between">
              <span className="font-mono">{item.name}</span>
              <span className="text-sm text-white font-semibold underline">{item.category}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-4 space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:opacity-50"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                currentPage === i + 1 ? "bg-blue-950 scale-130 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:opacity-50"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

// App Component
const App = () => {
  const items = Array.from({ length: 50 }, (_, i) => ({
    name: `Product ${i + 1}`,
    category: i % 2 === 0 ? "Electronics" : "Clothing",
  }));
  return <Pagination items={items} itemsPerPage={10} />;
};

export default App;
