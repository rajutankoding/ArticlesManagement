"use client";
import article from "@/app/article";
import axios from "axios";
import { useEffect, useState } from "react";

const Article = () => {
  const [articles, setArticles] = useState([]); // State untuk menyimpan data artikel
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error

  // Fungsi untuk mengambil data dari API
  const getData = async () => {
    try {
      //   const response = await axios.get("http://192.168.5.3:3345/Article");
      //   return response.data; // Mengembalikan data dari API
      return article;
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message); // Menyimpan pesan error di state
      return null;
    }
  };

  // Mengambil data saat komponen pertama kali dirender
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      if (data) {
        // console.log("Ambil Data : ", data);
        setArticles(data); // Menyimpan data artikel ke state
      }
      setLoading(false); // Menyelesaikan proses loading
    };
    fetchData();
  }, []);

  // Render loading, error, atau konten utama
  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <main className="flex-1 p-6 bg-white">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Articles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={article.image || "https://via.placeholder.com/600"} // Gambar dari API atau placeholder
                alt={article.title || "Default Title"}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {article.category || "Unknown Category"}
                  </span>
                  {/* <span className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {article.date || "Unknown Date"}
                  </span> */}
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  {article.title || "Default Title"}
                </h2>
                <p className="text-red-500 text-sm mb-2">
                  {article.createdAt || "Default Subtitle"}
                </p>
                {article.shortDesc && (
                  <p className="text-gray-700 text-sm mb-4">
                    {article.shortDesc}
                  </p>
                )}
                <div className="flex items-center text-gray-500 text-xs">
                  <span className="mr-2">
                    <i className="far fa-clock"></i>{" "}
                    {article.time || "Unknown Time"}
                  </span>
                  <span>
                    <i className="far fa-comments"></i>{" "}
                    {article.comments || "0 Comments"}
                  </span>
                </div>
                <div className="flex justify-end items-center mt-4">
                  <a
                    href={`/dashboard/article/${article.id}`}
                    className="button bg-blue-500 text-white text-xs font-bold px-4 py-3 rounded">
                    Manage
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Article;
