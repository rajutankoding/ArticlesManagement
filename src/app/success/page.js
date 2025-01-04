import React from "react";

const SuccessPage = () => {
  return (
    <main className="flex-1 h-screen items-center justify-center text-black p-6 bg-white">
      <div class="bg-white rounded-lg shadow-lg p-6 w-auto h-screen text-black text-center relative">
        <div className="p-6 justify-center text-black items-center">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="absolute inset-0 bg-white opacity-75"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-gray-300 text-2xl">
                <i class="fas fa-check-circle"></i>
              </div>
            </div>
          </div>
          <div class="relative z-10">
            <h1 class="text-xl font-semibold mb-4">Berhasil Terdaftar!</h1>
            <div class="flex items-center justify-center mb-4">
              <div class="bg-green-500 rounded-full p-4">
                <i class="fas fa-check text-white text-2xl">Telah Mendaftar</i>
              </div>
            </div>
            <p class="text-gray-600 mb-6">
              Pendaftaran anda berhasil, data sudah disimpan.
            </p>
            {/* <button class="bg-green-500 text-white py-2 px-4 rounded-full">
              ONCE AGAIN
            </button> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SuccessPage;
