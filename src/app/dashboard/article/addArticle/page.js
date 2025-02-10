"use client";

import React, { useState } from "react";

const AddArticle = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!title || !desc || !image || !content) {
    //   setError("All fields are required");
    //   return;
    // }

    setLoading(true);
    setError(null);
    const datass = {
      title: title,
      desc: desc,
      image: selectedImage,
      content: content,
    };
    console.log("Submit", datass);
    try {
      // Simulate API call
      const response = await fetch("http://192.168.5.3:3345/article", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { title, desc, selectedImage, content },
      });

      if (!response.ok) {
        throw new Error("Failed to add article");
      }

      const data = await response.json();
      alert("Article added successfully!");
      // Reset form
      setTitle("");
      setDesc("");
      setImage("");
      setContent("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  return (
    <main className="flex-1 p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6 mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Add New Article
        </h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter article title"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="desc">
              Short Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="desc"
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Enter short description"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="content">
              Content
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="content"
              rows="10"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter article content"
              required></textarea>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image">
              Image URL
            </label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {selectedImage && (
              <div>
                <img src={URL.createObjectURL(selectedImage)} alt="Preview" />
                <button>Upload</button>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              type="submit"
              disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
              type="button"
              onClick={() => {
                setTitle("");
                setDesc("");
                setImage("");
                setContent("");
                setError(null);
              }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddArticle;
