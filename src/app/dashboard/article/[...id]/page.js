"use client";

import article from "@/app/article";
import React, { use, useEffect, useState } from "react";

const Detail = ({ params }) => {
  const [loading, setLoading] = useState(true); // State untuk loading
  const [articles, setArticles] = useState({}); // State untuk artikel
  const [error, setError] = useState(null); // State untuk error
  const [title, setTitle] = useState();
  // const [sDesc, setsDesc] = useState()
  const [desc, setDesc] = useState();
  const [image, setImage] = useState();
  const [content, setContent] = useState();
  const { id } = use(params);
  // console.log("Params : ", article);
  const getData = async () => {
    try {
      const response = article.find((item) => item.id === parseInt(id));
      // console.log("Data : ", response);
      if (!response) {
        throw new Error("Article not found"); // Lempar error jika artikel tidak ditemukan
      }
      return response;
    } catch (error) {
      // console.error("Error fetching article", error);
      setError(error.message);
      return null;
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      if (data) {
        setArticles(data);
        setTitle(data.title);
        setDesc(data.shortDesc);
        setImage(data.image);
        setContent(data.content);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }
  if (error) {
    return <div className="text-center">Error fetching article</div>;
  }
  return (
    <main className="flex-1 p-6 bg-white">
      <div className=" mx-auto  shadow-md rounded-md mt-10">
        <h2 className="text-2xl font-bold mb-6">Edit Article</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              value={title}
              onChange={setTitle}
              placeholder="Enter article title"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="author"
            >
              Short Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="author"
              type="text"
              value={desc}
              onChange={setDesc}
              placeholder="Enter author name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="content"
            >
              Content
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="content"
              rows="10"
              value={content}
              onChange={setContent}
              placeholder="Enter article content"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="text"
              value={image}
              onChange={setImage}
              placeholder="Enter image URL"
            />
            <img
              src={image || "https://via.placeholder.com/600"} // Gambar dari API atau placeholder
              alt={title || "Default Title"}
              className="w-full mt-2 h-48 object-cover"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Save
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Detail;
