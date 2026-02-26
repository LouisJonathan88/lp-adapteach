import React from "react";
import { Button } from "@/components/ui/button";



export const Fitur: React.FC = () => {
  const imgImage2 = "/Buat Rencana belajar dalam hitungan menit.png";
  const imgImage3 = "/Sesuaikan Rencana belajar dengan kebutuhan siswa.png";
  const imgImage4 = "/Penyusunan Materi Ajar yang Dinamis.png";
  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-4">
          <p className="font-inter font-medium text-[#692aff] text-base leading-none">
            Fitur Kami
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24 mb-24">
          <div className="flex-1">
            <h2 className="font-inter font-semibold text-[32px] leading-[1.5] tracking-[-0.02em] text-[#33383F] max-w-[518px]">
              Dengan mengintegrasikan AI kami memiliki berbagai fitur canggih
            </h2>
          </div>

          <div className="flex-1">
            <p className="font-inter font-normal text-base leading-[1.6] tracking-[-0.02em] text-[#686E77] max-w-[520px]">
              Dengan fitur-fitur unggulan ini, AdapTeach mewujudkan visi
              pendidikan yang modern, adaptif, dan memberdayakan guru.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-16 lg:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
            <div className="flex-1 w-full flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[500px] rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={imgImage2}
                  alt="Rencana Belajar"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-6 items-start">
              <h3 className="font-inter font-medium text-[28px] leading-[1.5] tracking-[-0.02em] text-[#33383F] max-w-[404px]">
                Buat Rencana belajar dalam hitungan menit !
              </h3>
              <p className="font-inter font-normal text-base leading-[1.6] tracking-[-0.02em] text-[#686E77] max-w-[521px]">
                Sederhanakan Proses Pembuatan RPP - AI kami mengolah silabus dan
                menghasilkan Rencana Pelaksanaan Pembelajaran yang disesuaikan
                dengan kebutuhan unik setiap kelas, membebaskan waktu Anda untuk
                tugas yang lebih penting.
              </p>
              <Button className="text-white font-semibold font-inter text-base px-8 py-6 bg-[linear-gradient(90deg,#6A2CFE_0%,#010FFE_100%)] hover:opacity-90 transition-all duration-300 rounded-xl shadow-lg">
                Coba Gratis
              </Button>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-24">
            <div className="flex-1 flex flex-col gap-6 items-start">
              <h3 className="font-inter font-medium text-[28px] leading-[1.5] tracking-[-0.02em] text-[#33383F] max-w-[499px]">
                Sesuaikan Rencana belajar dengan kebutuhan siswa
              </h3>
              <p className="font-inter font-normal text-base leading-[1.6] tracking-[-0.02em] text-[#686E77] max-w-[521px]">
                Kurikulum yang Responsif - Teknologi AI kami menganalisis
                kebutuhan belajar siswa untuk memberikan wawasan mendalam,
                memungkinkan Anda untuk menyesuaikan materi ajar dengan
                kecepatan dan gaya belajar mereka.
              </p>
              <Button className="text-white font-semibold font-inter text-base px-8 py-6 bg-[linear-gradient(90deg,#6A2CFE_0%,#010FFE_100%)] hover:opacity-90 transition-all duration-300 rounded-xl shadow-lg">
                Coba Gratis
              </Button>
            </div>

            <div className="flex-1 w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={imgImage3}
                  alt="Kurikulum Responsif"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
            <div className="flex-1 w-full flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[500px] rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={imgImage4}
                  alt="Materi Dinamis"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-6 items-start">
              <h3 className="font-inter font-medium text-[28px] leading-[1.5] tracking-[-0.02em] text-[#33383F] max-w-[412px]">
                Penyusunan Materi Ajar yang Dinamis
              </h3>
              <p className="font-inter font-normal text-base leading-[1.6] tracking-[-0.02em] text-[#686E77] max-w-[521px]">
                Konten Pembelajaran yang Menarik - Dengan AI, ciptakan materi
                ajar yang menarik dan relevan yang memacu rasa ingin tahu siswa
                dan mendukung pencapaian tujuan pembelajaran.
              </p>
              <Button className="text-white font-semibold font-inter text-base px-8 py-6 bg-[linear-gradient(90deg,#6A2CFE_0%,#010FFE_100%)] hover:opacity-90 transition-all duration-300 rounded-xl shadow-lg">
                Coba Gratis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};