import React from "react";

const Form = () => {
  return (
    <main className="flex-1 p-6 bg-white">
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
        <p className="mb-4 text-gray-600">
          pejuangrecehan1258@gmail.com{" "}
          <span className="text-blue-600 cursor-pointer">Ganti akun</span>
        </p>
        <div className="flex items-center mb-4">
          <i className="fas fa-eye-slash text-gray-600 mr-2"></i>
          <span className="text-gray-600">Tidak dibagikan</span>
        </div>
        <p className="text-red-600 mb-4">
          * Menunjukkan pertanyaan yang wajib diisi
        </p>
        <form>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Nama Lengkap <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Tanggal Tes <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="tanggal1"
                name="tanggal"
                className="mr-2"
              />
              <label htmlFor="tanggal1">Senin, 6 Januari 2025</label>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              NIK <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Tempat/Tanggal Lahir <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Alamat <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Status Perkawinan <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Pekerjaan <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Kewarganegaraan <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Jenis Pemeriksaan <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="tanggal1"
                name="tanggal"
                className="mr-2"
              />
              <label htmlFor="tanggal1">Fisik, Jiwa dan Bebas Narkoba</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="tanggal1"
                name="tanggal"
                className="mr-2"
              />
              <label htmlFor="tanggal1">Fisik dan Jiwa</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="tanggal1"
                name="tanggal"
                className="mr-2"
              />
              <label htmlFor="tanggal1">Fisik dan Jiwa</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="tanggal1"
                name="tanggal"
                className="mr-2"
              />
              <label htmlFor="tanggal1">Bebas Narkoba</label>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Nomor WA <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Keperluan (misal: Pemberkasan CPNS, Pemberkasan PPPK, dll)
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Jawaban Anda"
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default Form;
