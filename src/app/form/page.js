"use client";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    namaLengkap: "",
    tanggalTes: "",
    nik: "",
    tempatTanggalLahir: "",
    alamat: "",
    statusPerkawinan: "",
    pekerjaan: "",
    kewarganegaraan: "",
    jenisPemeriksaan: "",
    nomorTelepon: "",
    keperluan: "",
    tanggalPilihan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Redirect or save the data
    window.location.href = "https://w.com";
  };

  return (
    <main className="flex-1 text-black p-6 bg-white">
      <img
        src="https://placehold.co/600x200"
        alt="A hospital building with a red roof and green walls"
        className="w-full rounded-t-lg"
      />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">
          Form Pendaftaran Tes Kesehatan CASN (CPNS & PPPK) Amino Hospital
        </h1>
        <p className="mb-4">
          Pendaftaran: Senin - Kamis : 07:00-11:30, Jumat : 07:30-10:40 di
          Gedung Komprehensif, Mohon membawa Fotocopy KTP untuk proses
          Verifikasi Data (Kuota Terbatas 80 orang/hari)
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Nama Lengkap <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="namaLengkap"
              value={formData.namaLengkap}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Tanggal Tes <span className="text-red-600">*</span>
            </label>
            <div className="flex text-black items-center">
              <input
                type="radio"
                id="tanggal1"
                name="tanggalTes"
                value="Senin, 6 Januari 2025"
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="tanggal1">Senin, 6 Januari 2025</label>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              NIK <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="nik"
              value={formData.nik}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Tempat Lahir <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="tempatTanggalLahir"
              value={formData.tempatTanggalLahir}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          {/* Tanggal Pilihan (Date Picker) */}
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Tanggal Lahir <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              name="tanggalPilihan"
              value={formData.tanggalPilihan}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Alamat <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Status Perkawinan <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="statusPerkawinan"
              value={formData.statusPerkawinan}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Pekerjaan <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="pekerjaan"
              value={formData.pekerjaan}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Kewarganegaraan <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="kewarganegaraan"
              value={formData.kewarganegaraan}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          {/* <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Jenis Pemeriksaan <span className="text-red-600">*</span>
            </label>
            <div className="flex text-black items-center">
              <input
                type="radio"
                id="tanggal1"
                name="tanggal"
                className="mr-2"
              />
              <label htmlFor="tanggal1">Fisik, Jiwa dan Bebas Narkoba</label>
            </div>
            <div className="flex text-black items-center">
              <input
                type="radio"
                id="tanggal1"
                name="tanggal"
                className="mr-2"
              />
              <label htmlFor="tanggal1">Fisik dan Jiwa</label>
            </div>
            <div className="flex text-black items-center">
              <input
                type="radio"
                id="tanggal1"
                name="tanggal"
                className="mr-2"
              />
              <label htmlFor="tanggal1">Fisik dan Jiwa</label>
            </div>
            <div className="flex text-black items-center">
              <input
                type="radio"
                id="tanggal1"
                name="tanggal"
                className="mr-2"
              />
              <label htmlFor="tanggal1">Bebas Narkoba</label>
            </div>
          </div> */}
          {/* Add other fields in the same way */}
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Nomor Telepon (WA) <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="nomorTelepon"
              value={formData.nomorTelepon}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Keperluan (misal: Pemberkasan CPNS, Pemberkasan PPPK, dll)
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="keperluan"
              value={formData.keperluan}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          {/* Jenis Pemeriksaan */}
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Jenis Pemeriksaan <span className="text-red-600">*</span>
            </label>
            <div className="flex flex-col space-y-2">
              <div className="flex text-black items-center">
                <input
                  type="radio"
                  id="fisikJiwaNarkoba"
                  name="jenisPemeriksaan"
                  value="Fisik, Jiwa dan Bebas Narkoba"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="fisikJiwaNarkoba">
                  Fisik, Jiwa dan Bebas Narkoba
                </label>
              </div>
              <div className="flex text-black items-center">
                <input
                  type="radio"
                  id="fisikJiwa"
                  name="jenisPemeriksaan"
                  value="Fisik dan Jiwa"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="fisikJiwa">Fisik dan Jiwa</label>
              </div>
              <div className="flex text-black items-center">
                <input
                  type="radio"
                  id="bebasNarkoba"
                  name="jenisPemeriksaan"
                  value="Bebas Narkoba"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="bebasNarkoba">Bebas Narkoba</label>
              </div>
            </div>
          </div>
          <a
            // type="button"
            onClick={() => {
              console.log(formData);
            }}
            type="submit"
            className="bg-blue-500 text-white font-bold px-4 py-2 rounded">
            Submit
          </a>
        </form>
      </div>
    </main>
  );
};

export default Form;
