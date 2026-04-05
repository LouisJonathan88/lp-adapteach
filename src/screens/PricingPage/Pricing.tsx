import React, { useState } from "react";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarPricing } from "@/components/common/NavPricing";
import { Manfaat } from "@/screens/Home//Manfaat";
import { CaraKerja } from "@/screens/Home/CaraKerja";
import { Footer } from "@/components/common/Footer";

const bulananPlans = [
  {
    title: "Free Plan",
    description: "Untuk individu & pendidik mandiri",
    price: "Rp 0",
    priceUnit: "/Bulan",
    features: [
      "3x Free Generate per Bulan",
      "Materi ajar dinamis",
      "Dashboard pembelajaran",
    ],
    buttonText: "Mulai Gratis",
    isPopular: false,
    socialProof: "Coba dulu, bayar nanti",
  },
  {
    title: "Premium Plan",
    description: "Pilihan terbaik untuk guru aktif",
    price: "Rp 49.000",
    priceUnit: "/Bulan",
    features: [
      "20x Generated per Bulan",
      "Rencana Pembelajaran",
      "Analitik pembelajaran",
      "Prioritas update fitur",
    ],
    buttonText: "Coba Sekarang",
    isPopular: true,
    socialProof: "Favorit 80% Guru SD/SMP",
  },
  {
    title: "Plus Plan",
    description: "Satu akun untuk semua kebutuhan mengajar",
    price: "Rp 99.000",
    priceUnit: "/Bulan",
    features: [
      "**Unlimited Generated per Bulan**",
      "Rencana Pembelajaran",
      "**Full Akses semua fitur**",
    ],
    buttonText: "Coba Sekarang",
    isPopular: false,
    socialProof: "Cocok untuk Guru Profesional",
  },
];

const tahunanPlans = [
  {
    title: "Free Plan",
    description: "Coba gratis, tanpa batas waktu",
    price: "Rp 0",
    priceUnit: "/bln",
    isFree: true,
    features: [
      "3x Free Generate per Bulan",
      "Materi ajar dinamis",
      "Dashboard pembelajaran",
    ],
    buttonText: "Mulai Gratis",
    isPopular: false,
    socialProof: "Selamanya gratis, tanpa kartu kredit",
    ctaMicrocopy: "Tidak perlu kartu kredit",
  },
  {
    title: "Premium Plan",
    description: "Pilihan terbaik untuk guru aktif",
    price: "Rp 39.200",
    priceUnit: "/bln",
    billingNote: "ditagih Rp 470.400/tahun",
    originalMonthlyPrice: "Rp 49.000",
    originalMonthlyLabel: "jika bayar bulanan",
    subPrice: "Hemat 20% vs bulanan",
    features: [
      "20x Generated per Bulan",
      "Rencana Pembelajaran",
      "Analitik pembelajaran",
      "Prioritas update fitur",
    ],
    buttonText: "Coba Sekarang",
    isPopular: false,
    socialProof: "Dipercaya 1.200+ Pendidik",
    ctaMicrocopy: "Tanpa kartu kredit · Batalkan kapan saja",
  },
  {
    title: "Enterprise",
    description: "Satu akun untuk semua kebutuhan mengajar",
    price: "Rp 79.200",
    priceUnit: "/bln",
    billingNote: "ditagih Rp 950.400/tahun",
    originalMonthlyPrice: "Rp 99.000",
    originalMonthlyLabel: "jika bayar bulanan",
    subPrice: "Hemat 20% vs bulanan",
    features: [
      "**Unlimited Generated per Bulan**",
      "Rencana Pembelajaran",
      "**Full Akses semua fitur**",
    ],
    buttonText: "Mulai dengan Plus",
    isPopular: true,
    socialProof: "Pilihan Institusi Pendidikan",
    ctaMicrocopy: "Tanpa kartu kredit · Batalkan kapan saja",
  },
];

const CheckBadge = ({ variant }: { variant: "blue" | "purple" }) => (
  <span
    className="inline-flex items-center justify-center rounded-full shrink-0"
    style={{
      width: 24,
      height: 24,
      backgroundColor: variant === "blue" ? "#eff6ff" : "#f2edff",
    }}
  >
    <Check
      strokeWidth={2}
      style={{
        width: 16,
        height: 16,
        color: variant === "blue" ? "#155dfc" : "#692aff",
      }}
    />
  </span>
);

interface PlanData {
  title: string;
  description: string;
  price: string;
  priceUnit?: string;
  isFree?: boolean;
  billingNote?: string;
  originalMonthlyPrice?: string;
  originalMonthlyLabel?: string;
  subPrice?: React.ReactNode;
  features: string[];
  buttonText: string;
  isPopular: boolean;
  socialProof?: string;
  ctaMicrocopy?: string;
}

const PricingCard = ({
  title,
  description,
  price,
  priceUnit,
  isFree,
  billingNote,
  originalMonthlyPrice,
  originalMonthlyLabel,
  subPrice,
  features,
  buttonText,
  isPopular,
  socialProof,
  ctaMicrocopy,
}: PlanData) => {
  const isComingSoon = price === "Segera Datang";

  return (
    <motion.div
      layout
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="relative rounded-2xl overflow-visible h-full"
      style={{
        backgroundColor: isPopular ? "#F5F3FF" : "#ffffff",
        border: isPopular ? "1.5px solid #D8B4FE" : "1px solid #e5e7eb",
        boxShadow: isPopular
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)"
          : "0 1px 3px rgba(0,0,0,0.05)",
      }}
    >
  
      {isPopular && (
        <div
          className="absolute left-1/2 -translate-x-1/2 text-white text-[11px] font-bold py-1.5 px-5 rounded-full uppercase tracking-wider whitespace-nowrap z-20"
          style={{
            top: "-12px",
            background: "linear-gradient(135deg, #155dfc 0%, #7f22fe 100%)",
            boxShadow: "0 4px 12px rgba(127, 34, 254, 0.3)",
          }}
        >
          Paling Populer
        </div>
      )}

      {/* Card content */}
      <div className="relative z-10 p-8 flex flex-col h-full">
        <h3 className="text-[#101828] text-[18px] font-semibold mb-1 tracking-[-0.44px]">
          {title}
        </h3>
        <p className="text-[#6a7282] text-[14px] mb-6 leading-relaxed">
          {description}
        </p>

        {/* original monthly price */}
        {originalMonthlyPrice ? (
          <div className="flex items-baseline gap-1.5 mb-1">
            <span className="text-[#98a2b3] text-[14px] line-through font-medium">
              {originalMonthlyPrice}
            </span>
            <span className="text-[#b0b7c3] text-[11px]">
              {originalMonthlyLabel}
            </span>
          </div>
        ) : (
          <div className="h-5 mb-1" />
        )}

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-2">
          <span
            className="text-[#101828] font-extrabold"
            style={{
              fontSize: isFree ? 28 : isComingSoon ? 28 : 38,
              letterSpacing: isFree ? "-0.5px" : "-1px",
              color: isFree ? "#6a7282" : "#101828",
            }}
          >
            {price}
          </span>
          {!isComingSoon && priceUnit && (
            <span className="text-[#6a7282] text-[14px] font-medium">
              {priceUnit}
            </span>
          )}
        </div>

        {/* Billing note */}
        {billingNote ? (
          <p className="text-[#98a2b3] text-[11px] mb-2">{billingNote}</p>
        ) : (
          <div className="h-4 mb-2" />
        )}

        {/* Savings */}
        {subPrice ? (
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[rgba(16,185,129,0.08)] text-[#059669] text-[12px] font-bold border border-[rgba(16,185,129,0.2)] backdrop-blur-[2px]">
              {subPrice}
            </span>
          </div>
        ) : (
          <div className="h-8 mb-6" />
        )}

        {/* Feature list */}
        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((f, i) => {
            const isHighlighted = f.startsWith("**") && f.endsWith("**");
            const cleanText = isHighlighted ? f.slice(2, -2) : f;

            return (
              <li
                key={i}
                className={`flex items-center gap-3 text-[14px] transition-all ${
                  isHighlighted ? "font-bold text-[#101828]" : "text-[#4b5563]"
                }`}
              >
                <CheckBadge variant={isPopular ? "purple" : "blue"} />
                {cleanText}
              </li>
            );
          })}
        </ul>

        {/* Social Proof */}
        {socialProof && (
          <p className="text-[#667085] text-[11px] font-medium text-center mb-3">
            ✨ {socialProof}
          </p>
        )}

        {/* CTA Button */}
        {isPopular ? (
          <>
            <button
              className="w-full py-3 rounded-xl text-[14px] font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] mt-auto"
              style={{
                background: "linear-gradient(135deg, #6a2cfe 0%, #010ffe 100%)",
                boxShadow: "0 8px 20px -6px rgba(106, 44, 254, 0.4)",
              }}
            >
              {buttonText}
            </button>
            {ctaMicrocopy && (
              <p className="text-[#98a2b3] text-[11px] text-center mt-2">
                {ctaMicrocopy}
              </p>
            )}
          </>
        ) : (
          <>
            <button
              className="w-full py-3 rounded-xl text-[14px] font-bold text-[#101828] bg-white hover:bg-gray-50 transition-all hover:scale-[1.02] active:scale-[0.98] mt-auto"
              style={{ border: "1px solid #d0d5dd" }}
            >
              {buttonText}
            </button>
            {ctaMicrocopy && (
              <p className="text-[#98a2b3] text-[11px] text-center mt-2">
                {ctaMicrocopy}
              </p>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"bulanan" | "tahunan">(
    "tahunan"
  );

  const plans = billingCycle === "bulanan" ? bulananPlans : tahunanPlans;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <div className="bg-white w-full min-h-screen flex flex-col font-inter">
      <NavbarPricing />

      <main className="flex-grow pt-32 pb-20">
        {/* --- HEADER SECTION --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[#33383f] text-3xl md:text-4xl font-semibold leading-tight mb-4">
              Pilih Paket yang Sesuai dengan <br className="hidden md:block" />
              Kebutuhan Pendidikan Anda
            </h1>
            <p className="text-[#686e77] text-base md:text-lg max-w-2xl mx-auto mb-10">
              Platform pembelajaran berbasis AI yang fleksibel dan scalable,
              dirancang untuk mendukung pertumbuhan individu maupun institusi
              pendidikan.
            </p>
          </motion.div>

          {/* Toggle Billing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="flex justify-center items-center"
          >
            <div className="bg-[#f2f4f7] p-1 rounded-full flex items-center shadow-inner">
              <button
                onClick={() => setBillingCycle("bulanan")}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  billingCycle === "bulanan"
                    ? "bg-[#101828] text-white shadow-md"
                    : "text-[#6a7282]"
                }`}
              >
                Bulanan
              </button>
              <button
                onClick={() => setBillingCycle("tahunan")}
                className={`px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all ${
                  billingCycle === "tahunan"
                    ? "bg-[#101828] text-white shadow-md"
                    : "text-[#6a7282]"
                }`}
              >
                Tahunan
                {billingCycle === "tahunan" && (
                  <span className="bg-[rgba(255,255,255,0.2)] text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide">
                    Hemat 20%
                  </span>
                )}
              </button>
            </div>
          </motion.div>
        </section>

        {/* --- PRICING CARDS --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={billingCycle}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
            >
              {plans.map(plan => (
                <PricingCard key={plan.title + billingCycle} {...plan} />
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
      <div className="space-y-5">
        <Manfaat />
        <CaraKerja />
      </div>
      <Footer />
    </div>
  );
};
