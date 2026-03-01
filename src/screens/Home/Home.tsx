// import { NavbarHome } from "@/components/common/NavHome";
// import { Button } from "@/components/ui/button";
// import { Fitur } from "./Fitur";
// import { Manfaat } from "./Manfaat";
// import { CaraKerja } from "./CaraKerja";
// import { Footer } from "@/components/common/Footer";

// export const Home: React.FC = () => {
//   const imgImage2 = "/Inovasi Cerdas.png";

//   return (
//     <div className="bg-[#ffffff] w-full min-h-screen flex flex-col">
//       <NavbarHome />

//       {/* Main Content */}
//       <main className="flex-grow">
//         <section className="relative w-full pt-32 pb-10 overflow-hidden">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col lg:flex-row items-center gap-12">
//               <div className="flex-1 flex flex-col gap-6">
//                 <h1 className="font-semibold font-inter leading-[1.2] text-[#33383f] text-[48px] tracking-[-0.96px] max-w-[530px]">
//                   Inovasi Cerdas AI untuk Pendidikan Indonesia
//                 </h1>

//                 <p className=" text-[20px] leading-[1.6] tracking-[-0.02em] text-[#686E77] font-normal max-w-[537px] font-inter">
//                   Gunakan AdapTeach untuk membantumu berperan dalam pendidikan
//                   yang adaptif dan inovatif.
//                 </p>

//                 <div>
//                   <Button className="text-white font-semibold font-inter text-base px-8 py-6 bg-[linear-gradient(90deg,#6A2CFE_0%,#010FFE_100%)] hover:opacity-90 transition-all duration-300 rounded-xl shadow-lg">
//                     Coba Gratis
//                   </Button>
//                 </div>
//               </div>

//               <div className="flex-1 relative flex justify-center lg:justify-end">
//                 <div className="relative w-full max-w-[500px]">
//                   <div className=" bg-white">
//                     <img
//                       alt="Dashboard Preview"
//                       className="w-full h-auto object-cover"
//                       src={imgImage2}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <Fitur />
//         <Manfaat />
//         <CaraKerja />
//       </main>

//       <Footer />
//     </div>
//   );
// };



// import { NavbarHome } from "@/components/common/NavHome";
// import { Button } from "@/components/ui/button";
// import { Fitur } from "./Fitur";
// import { Manfaat } from "./Manfaat";
// import { CaraKerja } from "./CaraKerja";
// import { Footer } from "@/components/common/Footer";
// import { Reveal } from "@/components/common/Reveal";

// export const Home: React.FC = () => {
//   const imgImage2 = "/Inovasi Cerdas.png";

//   return (
//     <div className="bg-[#ffffff] w-full min-h-screen flex flex-col">
//       <NavbarHome />

//       {/* Main Content */}
//       <main className="flex-grow">
//         <section className="relative w-full pt-32 pb-10 overflow-hidden">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col lg:flex-row items-center gap-12">
              
//               {/* Reveal 1: Untuk Teks Hero (Sisi Kiri) */}
//               <div className="flex-1 flex flex-col gap-6">
//                 <Reveal>
//                   <h1 className="font-semibold font-inter leading-[1.2] text-[#33383f] text-[48px] tracking-[-0.96px] max-w-[530px]">
//                     Inovasi Cerdas AI untuk Pendidikan Indonesia
//                   </h1>

//                   <p className="text-[20px] leading-[1.6] tracking-[-0.02em] text-[#686E77] font-normal max-w-[537px] font-inter mt-6">
//                     Gunakan AdapTeach untuk membantumu berperan dalam pendidikan
//                     yang adaptif dan inovatif.
//                   </p>

//                   <div className="mt-6">
//                     <Button className="text-white font-semibold font-inter text-base px-8 py-6 bg-[linear-gradient(90deg,#6A2CFE_0%,#010FFE_100%)] hover:opacity-90 transition-all duration-300 rounded-xl shadow-lg">
//                       Coba Gratis
//                     </Button>
//                   </div>
//                 </Reveal>
//               </div>

//               {/* Reveal 2: Untuk Gambar Hero (Sisi Kanan) */}
//               <div className="flex-1 relative flex justify-center lg:justify-end">
//                 <Reveal>
//                   <div className="relative w-full max-w-[500px]">
//                     <div className="bg-white">
//                       <img
//                         alt="Dashboard Preview"
//                         className="w-full h-auto object-cover"
//                         src={imgImage2}
//                       />
//                     </div>
//                   </div>
//                 </Reveal>
//               </div>

//             </div>
//           </div>
//         </section>

//         {/* Section lainnya bisa dibungkus Reveal juga agar muncul perlahan saat scroll */}
//         <Reveal>
//           <Fitur />
//         </Reveal>
        
//         <Manfaat />
//         <CaraKerja />
//       </main>

//       <Footer />
//     </div>
//   );
// };



import { NavbarHome } from "@/components/common/NavHome";
import { Button } from "@/components/ui/button";
import { Fitur } from "./Fitur";
import { Manfaat } from "./Manfaat";
import { CaraKerja } from "./CaraKerja";
import { Footer } from "@/components/common/Footer";
import { Reveal } from "@/components/common/Reveal";
import { motion } from "framer-motion"; // Pastikan import motion

// export const Home: React.FC = () => {
//   const imgImage2 = "/Inovasi Cerdas.png";

//   return (
//     <div className="bg-[#ffffff] w-full min-h-screen flex flex-col">
//       <NavbarHome />

//       <main className="flex-grow">
//         <section className="relative w-full pt-32 pb-10 overflow-hidden">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col lg:flex-row items-center gap-12">
              
//               {/* Sisi Kiri: Teks Hero */}
//               <motion.div 
//                 className="flex-1 flex flex-col gap-6"
//                 initial={{ opacity: 0, x: -30 }} // Mulai dari transparan & geser ke kiri
//                 animate={{ opacity: 1, x: 0 }}   // Berakhir di posisi normal
//                 transition={{ duration: 0.8, ease: "easeOut" }}
                
//               >
//                 <h1 className="font-semibold font-inter leading-[1.2] text-[#33383f] text-[48px] tracking-[-0.96px] max-w-[530px]">
//                   Inovasi Cerdas AI untuk Pendidikan Indonesia
//                 </h1>

//                 <p className="text-[20px] leading-[1.6] tracking-[-0.02em] text-[#686E77] font-normal max-w-[537px] font-inter mt-6">
//                   Gunakan AdapTeach untuk membantumu berperan dalam pendidikan
//                   yang adaptif dan inovatif.
//                 </p>

//                 <div className="mt-6">
//                   <Button className="text-white font-semibold font-inter text-base px-8 py-6 bg-[linear-gradient(90deg,#6A2CFE_0%,#010FFE_100%)] hover:opacity-90 transition-all duration-300 rounded-xl shadow-lg">
//                     Coba Gratis
//                   </Button>
//                 </div>
//               </motion.div>

//               {/* Sisi Kanan: Gambar Hero */}
//               <motion.div 
//                 className="flex-1 relative flex justify-center lg:justify-end"
//                 initial={{ opacity: 0, scale: 0.9 }} // Mulai dari transparan & sedikit mengecil
//                 animate={{ opacity: 1, scale: 1 }}   // Berakhir di ukuran normal
//                 transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} // Ada sedikit delay agar teks muncul duluan
//               >
//                 <div className="relative w-full max-w-[500px]">
//                   <div className="bg-white">
//                     <img
//                       alt="Dashboard Preview"
//                       className="w-full h-auto object-cover"
//                       src={imgImage2}
//                     />
//                   </div>
//                 </div>
//               </motion.div>

//             </div>
//           </div>
//         </section>

//         {/* Gunakan Reveal (Scroll Trigger) untuk section bawahnya */}
//         <Reveal>
//           <Fitur />
//         </Reveal>
        
//         <Reveal>
//            <Manfaat />
//         </Reveal>

//         <Reveal>
//            <CaraKerja />
//         </Reveal>
//       </main>

//       <Footer />
//     </div>
//   );
// };



export const Home: React.FC = () => {
  const imgImage2 = "/Inovasi Cerdas.png";

  return (
    <div className="bg-[#ffffff] w-full min-h-screen flex flex-col">
      <NavbarHome />

      <main className="flex-grow">
        <section className="relative w-full pt-32 pb-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              
              {/* Teks Hero: Berulang saat scroll atas/bawah */}
              <motion.div 
                className="flex-1 flex flex-col gap-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }} // Gunakan whileInView
                viewport={{ once: false, amount: 0.3 }} // once: false agar berulang
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="font-semibold font-inter leading-[1.2] text-[#33383f] text-[48px] tracking-[-0.96px] max-w-[530px]">
Inovasi Cerdas AI untuk Pendidikan Indonesia
</h1>
                <p className=" text-[20px] leading-[1.6] tracking-[-0.02em] text-[#686E77] font-normal max-w-[537px] font-inter">
Gunakan AdapTeach untuk membantumu berperan dalam pendidikan yang adaptif dan inovatif.</p>
 <div>
  <Button className="text-white font-semibold font-inter text-base px-8 py-6 bg-[linear-gradient(90deg,#6A2CFE_0%,#010FFE_100%)] hover:opacity-90 transition-all duration-300 rounded-xl shadow-lg">
Coba Gratis
</Button>
</div>
              </motion.div>

              {/* Gambar Hero: Berulang saat scroll atas/bawah */}
              <motion.div 
                className="flex-1 relative flex justify-center lg:justify-end"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }} // Gunakan whileInView
                viewport={{ once: false, amount: 0.3 }} // once: false agar berulang
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <div className="relative w-full max-w-[500px]">
                  <img src={imgImage2} alt="Dashboard Preview" className="..." />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Section di bawah ini otomatis mengikuti setting di file Reveal.tsx */}
        <Reveal>
          <Fitur />
        </Reveal>
        
        <Reveal>
           <Manfaat />
        </Reveal>

        <Reveal>
           <CaraKerja />
        </Reveal>
      </main>

      <Footer />
    </div>
  );
};