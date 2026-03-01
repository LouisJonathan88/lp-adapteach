import React from "react";
import { motion } from "framer-motion";

export const Manfaat: React.FC = () => {
  const icons = {
    icon1: "/icon-Wawasan Kebutuhan Siswa.svg",
    icon2: "/icon-Smart Recommendation.svg",
    icon3: "/icon-Pembelajaran yang Disesuaikan.svg",
    icon4: "/icon-Dashboard Intuitif dan Mudah Digunakan.svg",
    icon5: "/icon-Komunitas Pembelajaran yang Kolaboratif.svg",
  };

  const dataManfaat = [
    {
      title: "Wawasan Kebutuhan Siswa",
      desc: "Kami menyediakan analisis kebutuhan belajar siswa yang akurat, memungkinkan guru untuk menyesuaikan pendekatan mengajar dan meningkatkan hasil belajar.",
      icon: icons.icon1,
    },
    {
      title: "Smart Recommendation",
      desc: "Nikmati proses pembuatan RPP dan materi ajar yang lebih cepat dan efisien, sehingga Anda bisa menghabiskan lebih banyak waktu dengan siswa Anda.",
      icon: icons.icon2,
    },
    {
      title: "Pembelajaran yang Disesuaikan",
      desc: "Pembelajaran yang Disesuaikan dengan Setiap Siswa - Dengan fitur yang adaptif, setiap siswa mendapatkan pengalaman belajar yang disesuaikan dengan kecepatan mereka.",
      icon: icons.icon3,
    },
    {
      title: "Dashboard Intuitif dan Mudah Digunakan",
      desc: "Kemudahan Penggunaan - Dashboard intuitif kami memudahkan guru untuk mengakses fitur, melacak kemajuan, dan membuat keputusan berdasarkan data.",
      icon: icons.icon4,
    },
    {
      title: "Komunitas Pembelajaran yang Kolaboratif",
      desc: "Kolaborasi untuk Kesuksesan Bersama - AdapTeach memfasilitasi komunitas pembelajaran di mana guru dapat berbagi sumber daya, strategi, dan mendapatkan dukungan dari rekan-rekan mereka.",
      icon: icons.icon5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const CardItem = ({ item }: any) => (
    <motion.div 
      variants={itemVariants}
      className="bg-[#313234] p-8 rounded-xl shadow-xl transition-all duration-300 flex flex-col items-start gap-6 h-full hover:bg-[#3d3e41]"
    >
      <div className="w-14 h-14 flex items-center justify-center bg-[#c8b1ff]/20 rounded-full">
        <img
          src={item.icon}
          alt={item.title}
          className="w-14 h-14 object-contain"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-inter font-semibold text-xl leading-none tracking-[-0.02em] text-white max-w-[257px]">
          {item.title}
        </h3>
        <p className="font-inter font-normal text-base leading-[1.6] tracking-[-0.02em] text-white/80 opacity-80">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section className="w-full py-24 bg-[#191D22] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 mb-20"
        >
          <div className="flex-1">
            <p className="font-inter font-medium text-base leading-none text-[#C8B1FF] mb-4">
              Manfaat Fitur
            </p>
            <h2 className="font-inter font-semibold text-[32px] leading-[1.5] tracking-[-0.02em] text-white max-w-[517px]">
              AdapTeach memberikan beberapa keunggulan untuk pendidikan
            </h2>
          </div>

          <div className="flex-1 lg:pt-8">
            <p className="font-inter font-normal text-base leading-[1.6] tracking-[-0.02em] text-white/80 opacity-80 max-w-[523px]">
              Dengan fitur-fitur canggihnya, AdapTeach mampu mempercepat
              transformasi pendidikan dengan cara yang efektif. Berikut adalah
              beberapa keunggulan yang dapat kami tawarkan
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col gap-8"
        >
          {/* Baris Pertama (3 Kartu) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataManfaat.slice(0, 3).map((item, index) => (
              <CardItem key={index} item={item} />
            ))}
          </div>

          {/* Baris Kedua (2 Kartu) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {dataManfaat.slice(3, 5).map((item, index) => (
              <CardItem key={index} item={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};