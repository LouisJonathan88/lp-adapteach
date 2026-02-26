import { NavbarHome } from "@/components/common/NavHome";
import { Button } from "@/components/ui/button";
import { Fitur } from "./Fitur";
import { Manfaat } from "./Manfaat";
import { CaraKerja } from "./CaraKerja";
import { Footer } from "@/components/common/Footer";

export const Home: React.FC = () => {
  const imgImage2 = "/Inovasi Cerdas.png";

  return (
    <div className="bg-[#ffffff] w-full min-h-screen flex flex-col">
      <NavbarHome />

      {/* Main Content */}
      <main className="flex-grow">
        <section className="relative w-full pt-32 pb-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 flex flex-col gap-6">
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
              </div>

              <div className="flex-1 relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px]">
                  <div className=" bg-white">
                    <img
                      alt="Dashboard Preview"
                      className="w-full h-auto object-cover"
                      src={imgImage2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Fitur />
        <Manfaat />
        <CaraKerja />
      </main>

      <Footer />
    </div>
  );
};