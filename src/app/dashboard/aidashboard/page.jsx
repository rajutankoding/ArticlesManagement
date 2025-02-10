"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AiDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [information, setInformation] = useState([]);
  const [message, setMessage] = useState(null); // State untuk menyimpan pesan

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://192.168.5.3:3345/article/information"
      );
      console.log("Get Information:", response.data);
      setInformation(response.data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await getData();
      // if (data) {
      //   setArticles(data);
      //   setTitle(data.title);
      //   setDesc(data.shortDesc);
      //   setImage(data.image);
      //   setContent(data.content);
      // }
    };
    fetchData();
  }, []);

  const deleteArticle = async (id) => {
    try {
      const response = await axios.delete(
        `http://192.168.5.3:3345/article/information/${id}`
      );
      console.log("Delete Article:", response.data);
      setMessage("Data berhasil dihapus!"); // Set pesan sukses
      await getData(); // Refresh data setelah menghapus artikel
    } catch (error) {
      console.log("Error:", error);
      setMessage("Gagal menghapus data!"); // Set pesan error
    }
    setTimeout(() => {
      setMessage(null); // Menghapus pesan setelah 3 detik
    }, 3000);
  };
  // const deleteArticle = async (id) => {
  //   try {
  //     const response = await axios.delete(
  //       `http://192.168.5.3:3345/article/information/${id}`
  //     );
  //     console.log("Delete Article:", response.data);
  //     // Refresh data setelah menghapus artikel
  //     await getData();
  //   } catch (error) {
  //     console.log("Error:", error);
  //   }
  // };

  return (
    <div className="bg-white text-black shadow rounded p-4 mt-4">
      {message && (
        <div
          className={`p-2 mb-4 rounded ${
            message.includes("berhasil")
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}>
          {message}
        </div>
      )}
      <a
        href="/dashboard/aidashboard/add"
        className="bg-green-500 text-white left-0 px-2 py-1 rounded mr-2">
        + Add
      </a>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Information</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {information.map((data) => (
              <tr key={data.id}>
                <td className="py-2 px-4 border-b">{data.title}</td>
                <td className="py-2 px-4 border-b">{data.content}</td>
                <td className="py-2 px-4 border-b">
                  <a
                    href={`/dashboard/aidashboard/${data.id}`}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                    Edit
                  </a>
                  <button
                    onClick={() => deleteArticle(data.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );

  // return (
  //   <div className="bg-white text-black shadow rounded p-4 mt-4">
  //     <a
  //       href="/dashboard/aidashboard/add"
  //       className="bg-green-500 text-white left-0 px-2 py-1 rounded mr-2">
  //       + Add
  //     </a>
  //     {loading ? (
  //       <p>Loading...</p>
  //     ) : (
  //       <table className="min-w-full bg-white">
  //         <thead>
  //           <tr>
  //             <th className="py-2 px-4 border-b">Name</th>
  //             <th className="py-2 px-4 border-b">Information</th>
  //             <th className="py-2 px-4 border-b">Actions</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {information.map((data) => (
  //             <tr key={data.id}>
  //               <td className="py-2 px-4 border-b">{data.title}</td>
  //               <td className="py-2 px-4 border-b">{data.content}</td>
  //               <td className="py-2 px-4 border-b">
  //                 <a
  //                   href={`/dashboard/aidashboard/${data.id}`}
  //                   className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
  //                   Edit
  //                 </a>
  //                 <button
  //                   onClick={() => deleteArticle(data.id)}
  //                   className="bg-red-500 text-white px-2 py-1 rounded">
  //                   Delete
  //                 </button>
  //               </td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     )}
  //   </div>
  // );
};

export default AiDashboard;
