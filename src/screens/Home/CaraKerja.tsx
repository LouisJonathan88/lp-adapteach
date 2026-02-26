import React from "react";

export const CaraKerja: React.FC = () => {
  const stepIcons = {
    step1: "/icon-Identifikasi kebutuhan belajar.svg",
    step2: "/icon-Rencana belajar otomatis dibuat secara cepat.svg",
    step3: "/icon-Membantumu membuat bahan ajar yang menarik dengan cepat.svg",
  };

  const partnerLogos = {
    harvest: "/Harvest-logo.svg",
    edgeKart: "/EdgeKart-logo.svg",
    pastel: "/Pastel&Co.-logo.svg",
    yellowBook: "/Yellow Book-logo.svg",
  };

  const steps = [
    {
      number: "1",
      icon: stepIcons.step1,
      title: "Identifikasi kebutuhan belajar",
      desc: "Kami memulai dengan mengidentifikasi kebutuhan belajar unik setiap siswa, memastikan bahwa setiap rencana pembelajaran yang dibuat adalah target yang tepat untuk perkembangan mereka.",
    },
    {
      number: "2",
      icon: stepIcons.step2,
      title: "Rencana belajar otomatis dibuat secara cepat",
      desc: "Rencana Pembelajaran Kustom - Dengan wawasan yang diperoleh, AI kami merancang RPP yang disesuaikan, mengintegrasikan metode pengajaran yang paling efektif untuk kelas Anda.",
    },
    {
      number: "3",
      icon: stepIcons.step3,
      title: "Membantumu membuat bahan ajar yang menarik dengan cepat",
      desc: "Materi Ajar yang Dinamis - Terakhir, AI kami secara otomatis menghasilkan materi ajar yang menarik dan interaktif, yang disinkronkan dengan tujuan pembelajaran.",
    },
  ];

  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-20">
          <p className="font-inter font-medium text-base leading-none text-[#692AFF] mb-3">
            Cara Kerja
          </p>
          <h2 className="font-inter font-semibold text-[40px] leading-[1.5] tracking-[-0.02em] text-[#33383F] text-center max-w-[647px] mx-auto">
            Cara Kerja Fitur Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-12 mb-12 md:mb-32">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-8 flex items-center justify-center w-full">
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute left-[50%] w-full justify-center gap-2 z-0">
                    {[...Array(7)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-[2px] bg-[#692AFF] opacity-40"
                      />
                    ))}
                  </div>
                )}
                <div className="w-[120px] h-[120px] bg-[#f3f0ff] rounded-full flex items-center justify-center relative z-10 shadow-sm">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-12 h-12 object-contain"
                  />
                  <div className="absolute -top-5 -left-5 w-[35px] h-[35px] bg-[#692AFF] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <span className="text-white text-[16px] font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="font-inter font-medium text-[24px] leading-[1.5] tracking-[-0.02em] text-[#33383F] text-center max-w-[298px] mx-auto mb-4">
                  {step.title}
                </h3>
                <p className="font-inter font-normal text-base leading-[1.6] tracking-[-0.02em] text-[#686E77] text-center max-w-[306px] mx-auto">
                  {step.desc}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="flex md:hidden flex-col items-center gap-[5px] my-8">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="w-[2px] h-3 bg-[#692AFF] opacity-40 rounded-full"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-inter font-medium text-base leading-none text-[#692AFF] text-center mb-3">
            Partner
          </p>
          <h2 className=" font-inter font-semibold text-[40px] leading-[1.5] tracking-[-0.02em] text-[#33383F] text-center max-w-[647px] mx-auto mb-16">
            Bisnis Partner Kami
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24">
            <img
              src={partnerLogos.harvest}
              alt="Harvest"
              className="h-14 w-auto object-contain"
            />
            <img
              src={partnerLogos.edgeKart}
              alt="EdgeKart"
              className="h-14 w-auto object-contain"
            />
            <img
              src={partnerLogos.pastel}
              alt="Pastel&Co"
              className="h-14 w-auto object-contain"
            />
            <img
              src={partnerLogos.yellowBook}
              alt="Yellow Book"
              className="h-14 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
