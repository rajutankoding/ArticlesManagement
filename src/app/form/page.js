"use client";
import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import { SaveData } from "../../../lib/action";

const Form = () => {
  const [error, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    namaLengkap: "",
    // tanggalTes: "",
    nik: "",
    tempatTanggalLahir: "",
    alamat: "",
    statusPerkawinan: "",
    pekerjaan: "",
    kewarganegaraan: "",
    jenisPemeriksaan: "",
    nomorTelepon: "",
    keperluan: "",
    tanggalLahir: "",
    rtrw: "",
    kelDes: "",
    kecamatan: "",
    agama: "",
    tgltes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isInvalid =
    !formData.email ||
    !formData.namaLengkap ||
    // !formData.tanggalTes ||
    !formData.nik ||
    !formData.tempatTanggalLahir ||
    !formData.alamat ||
    !formData.statusPerkawinan ||
    !formData.pekerjaan ||
    !formData.kewarganegaraan ||
    !formData.jenisPemeriksaan ||
    !formData.nomorTelepon ||
    !formData.keperluan ||
    !formData.tanggalLahir ||
    !formData.rtrw ||
    !formData.kelDes ||
    !formData.kecamatan ||
    !formData.agama ||
    !formData.tgltes;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isInvalid) {
      setErrors({
        email: !formData.email,
        namaLengkap: !formData.namaLengkap,
        // tanggalTes: !formData.tanggalTes,
        nik: !formData.nik,
        tempatTanggalLahir: !formData.tempatTanggalLahir,
        alamat: !formData.alamat,
        statusPerkawinan: !formData.statusPerkawinan,
        pekerjaan: !formData.pekerjaan,
        kewarganegaraan: !formData.kewarganegaraan,
        jenisPemeriksaan: !formData.jenisPemeriksaan,
        nomorTelepon: !formData.nomorTelepon,
        keperluan: !formData.keperluan,
        tanggalLahir: !formData.tanggalLahir,
      });
      return;
    } else {
      // console.log(error);
      // console.log(formData);
      // SaveData;
      // Validasi: Periksa apakah ada field yang kosong
      const newErrors = {};
      Object.keys(formData).forEach((field) => {
        if (!formData[field]) {
          newErrors[field] = "Field ini wajib diisi.";
        }
      });

      // Jika ada error, set pesan error dan hentikan pengiriman form
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      console.log("Form data submitted:", formData);
      // Lakukan tindakan lain, misalnya redirect atau mengirim data ke server
      // window.location.href = "https://w.com";
    }
  };

  const { formStatus } = useFormStatus;
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
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Nomor Telepon (WA) <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="nomorTelepon"
              value={formData.nomorTelepon}
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
              NIK <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
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
              name="tanggalLahir"
              value={formData.tanggalLahir}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
              // max={new Date().toISOString().split("T")[0]}
              max={
                new Date(new Date().setDate(new Date().getDate() - 2))
                  .toISOString()
                  .split("T")[0]
              }
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
          {/*  */}
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              RT/RW <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="rtrw"
              value={formData.rtrw}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Kel/Desa <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="kelDes"
              value={formData.kelDes}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Kecamatan <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="kecamatan"
              value={formData.kecamatan}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Agama <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="agama"
              value={formData.agama}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          {/* <div className="mb-6">
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
          </div> */}
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Status Perkawinan <span className="text-red-600">*</span>
            </label>
            <div className="flex flex-col space-y-2">
              <div className="flex text-black items-center">
                <input
                  type="radio"
                  id="blmNikah"
                  name="statusPerkawinan"
                  value="BELUM MENIKAH"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="blmNikah">BELUM MENIKAH</label>
              </div>
              <div className="flex text-black items-center">
                <input
                  type="radio"
                  id="nikah"
                  name="statusPerkawinan"
                  value="MENIKAH"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="nikah">MENIKAH</label>
              </div>
              <div className="flex text-black items-center">
                <input
                  type="radio"
                  id="janda"
                  name="statusPerkawinan"
                  value="JANDA"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="janda">JANDA</label>
              </div>
              <div className="flex text-black items-center">
                <input
                  type="radio"
                  id="dudha"
                  name="statusPerkawinan"
                  value="DUDHA"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="dudha">DUDHA</label>
              </div>
              <div className="flex text-black items-center">
                <input
                  type="radio"
                  id="jomblo"
                  name="statusPerkawinan"
                  value="JOMBLO"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="jomblo">JOMBLO</label>
              </div>
            </div>
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
          {/* Add other fields in the same way */}
          {/* <div className="mb-6">
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
          </div> */}
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Tanggal Tes <span className="text-red-600">*</span>
            </label>
            <div className="flex flex-col space-y-2">
              <div className="flex text-black items-center">
                <input
                  type="radio"
                  id="tanggaltes"
                  name="tgltes"
                  value="Senin, 6 Januari 2025"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="tanggaltes">Senin, 6 Januari 2025</label>
              </div>
            </div>
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
          {isInvalid ? (
            <>
              <div className="text-red-600 text-xl mb-2">
                Ada Kolom yang belum Anda isi
              </div>
              <button
                disabled
                // type="button"
                // onClick={() => {
                //   console.log(formData);
                // }}
                type="submit"
                // disabled={isInvalid}
                className="btn disable bg-red-600 text-white font-bold px-4 py-2 rounded"
              >
                {formStatus ? "Sedang Menyimpan..." : "Simpan"}
              </button>
            </>
          ) : (
            <button
              // disabled
              // type="button"
              // onClick={() => {
              //   console.log(formData);
              // }}
              type="submit"
              // disabled={isInvalid}
              className="btn disable bg-blue-500 text-white font-bold px-4 py-2 rounded"
            >
              {formStatus ? "Sedang Menyimpan..." : "Simpan"}
            </button>
          )}
        </form>
      </div>
    </main>
  );
};

export default Form;
