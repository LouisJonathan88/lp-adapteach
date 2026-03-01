import { NavbarHome } from "@/components/common/NavHome";
import { Button } from "@/components/ui/button";
import { Fitur } from "./Fitur";
import { Manfaat } from "./Manfaat";
import { CaraKerja } from "./CaraKerja";
import { Footer } from "@/components/common/Footer";
import { Reveal } from "@/components/common/Reveal";
import { motion } from "framer-motion";
export const Home: React.FC = () => {
  const imgImage2 = "/Inovasi Cerdas.png";

  return (
    <div className="bg-[#ffffff] w-full min-h-screen flex flex-col">
      <NavbarHome />

      <main className="flex-grow">
        <section className="relative w-full pt-32 pb-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                className="flex-1 flex flex-col gap-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="font-semibold font-inter leading-[1.2] text-[#33383f] text-[48px] tracking-[-0.96px] max-w-[530px]">
                  Inovasi Cerdas AI untuk Pendidikan Indonesia
                </h1>
                <p className=" text-[20px] leading-[1.6] tracking-[-0.02em] text-[#686E77] font-normal max-w-[537px] font-inter">
                  Gunakan AdapTeach untuk membantumu berperan dalam pendidikan
                  yang adaptif dan inovatif.
                </p>
                <div>
                  <Button className="text-white font-semibold font-inter text-base px-8 py-6 bg-[linear-gradient(90deg,#6A2CFE_0%,#010FFE_100%)] hover:opacity-90 transition-all duration-300 rounded-xl shadow-lg">
                    Coba Gratis
                  </Button>
                </div>
              </motion.div>

              <motion.div
                className="flex-1 relative flex justify-center lg:justify-end"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <div className="relative w-full max-w-[500px]">
                  <img
                    src={imgImage2}
                    alt="Dashboard Preview"
                    className="..."
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

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
