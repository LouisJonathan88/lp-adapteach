import React from "react";
import { motion } from "framer-motion";

export const Footer: React.FC = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <footer className="w-full bg-[#1a1c1e] text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MOBILE LAYOUT */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInVariants}
          className="flex flex-col gap-10 lg:hidden"
        >
          <div>
            <p className="font-medium text-[14px] text-white/60 opacity-60 tracking-[0.84px] uppercase mb-4">
              Contact Us
            </p>
            <h2 className="font-semibold text-[36px] leading-[1.1] tracking-[-1.5px]">
              Mulai Transformasi Pendidikan - Coba AdapTeach Hari Ini!
            </h2>
          </div>

          <div className="flex flex-wrap gap-6 border-b border-white/10 pb-8">
            {["Partner", "FaQ", "Hubungi Kami", "Blog"].map((link) => (
              <a key={link} href="#" className="text-[16px] underline decoration-solid underline-offset-4">
                {link}
              </a>
            ))}
          </div>

          <div>
            <h3 className="font-bold text-[16px] mb-8">Let's Contact Us</h3>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <div className="border-b border-white/20 pb-2">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="bg-transparent w-full outline-none text-[14px] placeholder:text-white"
                  />
                </div>
                <div className="border-b border-white/20 pb-2">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="bg-transparent w-full outline-none text-[14px] placeholder:text-white"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-fit bg-[#313234] px-10 py-4 font-bold text-[15px] mt-32 hover:bg-[#404144] transition-colors"
              >
                Contact Us
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-6 border-t border-white/10 pt-8 items-center text-center">
            <div>
              <p className="text-[12px] font-bold opacity-60 uppercase mb-2">Email</p>
              <a href="mailto:adapteach.ai@gmail.com" className="text-[14px] underline decoration-solid">
                adapteach.ai@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[12px] font-bold opacity-60 uppercase mb-2">Instagram</p>
              <p className="text-[14px]">@adapteach.ai</p>
            </div>
            <div className="pb-8 border-b border-white/10">
              <p className="text-[12px] font-bold opacity-60 uppercase mb-2">Address</p>
              <p className="text-[14px] leading-relaxed opacity-80">
                Jl. Dahlia Blok M No.21, RT.4/RW.8, Cipayung, Kec. Cipayung, Jakarta Timur
              </p>
            </div>
          </div>
        </motion.div>

        {/* DESKTOP LAYOUT */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInVariants}
          className="hidden lg:block"
        >
          <div className="flex flex-row justify-between gap-16 mb-20">
            <div className="flex-1">
              <p className="font-inter font-medium text-sm leading-none tracking-[0.06em] text-white/60 opacity-60 uppercase mb-4">
                Contact Us
              </p>
              <h2 className="font-inter font-medium text-[62px] leading-[1.1] tracking-[-0.03em] text-[#FAFAFA] max-w-[540px]">
                Mulai Transformasi Pendidikan - Coba AdapTeach Hari Ini!
              </h2>
            </div>

            <div className="flex-1 max-w-[458px]">
              <h3 className="font-inter font-bold text-base leading-none text-white mb-8">
                Let's Contact Us
              </h3>
              <form className="flex flex-col gap-8">
                <div className="flex flex-row gap-6">
                  <div className="flex-1 border-b border-white/20 pb-2">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="font-inter bg-transparent w-full outline-none font-normal text-sm text-white placeholder:text-white"
                    />
                  </div>
                  <div className="flex-1 border-b border-white/20 pb-2">
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className="font-inter bg-transparent w-full outline-none font-normal text-sm text-white placeholder:text-white"
                    />
                  </div>
                </div>
                <div className="border-b border-white/20 pb-12">
                  <input
                    type="text"
                    placeholder="Message"
                    className="font-inter bg-transparent w-full outline-none font-normal text-sm text-white placeholder:text-white mb-6"
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="flex items-center justify-between mb-16 border-b border-white/10 pb-8">
            <div className="flex flex-wrap gap-8">
              {["Partner", "FaQ", "Hubungi Kami", "Blog"].map((link) => (
                <a key={link} href="#" className="font-inter font-medium text-base text-white underline transition-colors">
                  {link}
                </a>
              ))}
            </div>

            <div className="flex-1 max-w-[458px]">
              <button
                type="button"
                className="font-inter bg-[#313234] px-10 py-4 font-bold text-[15px] text-white hover:bg-[#404144] transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between">
            <div className="grid grid-cols-[auto_auto_1fr] gap-y-8 gap-x-12 w-full">
              <div>
                <p className="font-inter text-sm font-medium text-white/60 uppercase mb-2">Email</p>
                <a href="mailto:adapteach.ai@gmail.com" className="font-inter font-medium text-[14px] text-white underline transition-colors">
                  adapteach.ai@gmail.com
                </a>
              </div>
              <div className="ml-10">
                <p className="font-inter text-sm font-medium text-white/60 uppercase mb-2">Instagram</p>
                <p className="font-inter font-medium text-[14px] text-white">@adapteach.ai</p>
              </div>
              <div className="ml-10">
                <p className="font-inter text-sm font-medium text-white/60 uppercase mb-2">Address</p>
                <p className="font-inter font-medium text-[14px] text-white whitespace-nowrap">
                  Jl. Dahlia Blok M No.21, RT.4/RW.8, Cipayung, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13840
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/5">
            <p className="font-inter font-normal text-[14px] text-white/70 opacity-70">
              © 2023 - all rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};