"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Jika menggunakan Next.js

const AddArticle = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [addInformation, setAddInformation] = useState(false);
  const [data, setData] = useState([]);

  const router = useRouter();
  const { id } = useParams(); // Jika menggunakan Next.js
  // atau
  // const { id } = params; // Jika params langsung diterima sebagai prop

  useEffect(() => {
    try {
      setLoading(true);
      if (id && id[0] === "add") {
        setLoading(false);
        setAddInformation(true);
        return;
      }

      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://192.168.5.3:3345/article/information/${id}`
          );
          setData(response.data);
          setTitle(response.data.nama);
          setDesc(response.data.deskripsi);
        } catch (error) {
          setError(error.message || "Failed to fetch data");
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    } catch (error) {
      setError(error.message || "An error occurred");
      setLoading(false);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !desc) {
      setError("Title and description are required");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = {
      nama: title,
      deskripsi: desc,
    };
    // new FormData();
    // formData.append("nama", title);
    // formData.append("deskripsi", desc);
    // formData.append("content", content);
    // if (selectedImage) {
    //   formData.append("image", selectedImage);
    // }
    console.log("Data Form :", formData);

    try {
      const response = await axios.post(
        "http://192.168.5.3:3345/article/information",
        formData
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
      );

      if (response.status === 200) {
        alert("Article added successfully!");
        // Reset form
        // setTitle("");
        // setDesc("");
        // setContent("");
        // setSelectedImage(null);
        router.push("/dashboard/aidashboard");
      } else {
        throw new Error("Failed to add article");
      }
    } catch (error) {
      setError(error.message || "Failed to submit article");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!title || !desc) {
      setError("Title and description are required");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = {
      nama: title,
      deskripsi: desc,
    };
    console.log("Data Form :", formData);

    try {
      const response = await axios.put(
        `http://192.168.5.3:3345/article/information/${id}`,
        formData
      );

      if (response.status === 200) {
        alert("Article updated successfully!");
        router.push("/dashboard/aidashboard");
      } else {
        throw new Error("Failed to add article");
      }
    } catch (error) {
      setError(error.message || "Failed to submit article");
    } finally {
      setLoading(false);
    }
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const renderForm = () => (
    <main className="flex-1 p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6 mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          {addInformation
            ? "New Hospital Information"
            : "Edit Hospital Information"}
        </h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <form
          encType="multipart/form-data"
          onSubmit={addInformation ? handleSubmit : handleUpdate}>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Hospital Name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="desc">
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="desc"
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Amino Gondohutomo"
              required
            />
          </div>
          {/* <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image">
              Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="image"
              type="file"
              onChange={handleImageChange}
            />
          </div> */}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              type="submit"
              disabled={loading}>
              {loading ? "Saving..." : addInformation ? "Save" : "update"}
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
              type="button"
              onClick={() => {
                router.back();
              }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );

  return renderForm();
};

export default AddArticle;
