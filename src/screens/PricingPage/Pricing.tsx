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
  },
  {
    title: "Premium Plan",
    description: "Terbaik untuk Individual",
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
  },
  {
    title: "Plus Plan",
    description: "Paling terbaik untuk jangka panjang",
    price: "Rp 99.000",
    priceUnit: "/Bulan",
    features: [
      "Unlimited Generated per Bulan",
      "Rencana Pembelajaran",
      "Full Akses semua fitur",
    ],
    buttonText: "Hubungi Kami",
    isPopular: false,
  },
];

const tahunanPlans = [
  {
    title: "Enterprise Plan",
    description: "Terbaik untuk Individual",
    price: "Rp 35.000",
    priceUnit: "/Bulan",
    subPrice: "Harga lebih stabil untuk Institusi",
    features: [
      "Unlimited Generated",
      "Full akses",
      "Minimal 10 akun guru pembelian",
      "Prioritas update fitur",
    ],
    buttonText: "Coba Sekarang",
    isPopular: true,
  },
  {
    title: "Premium Plan",
    description: "Terbaik untuk Individual",
    price: "Segera Datang",
    features: [
      "20x Generated per Bulan",
      "Rencana Pembelajaran",
      "Analitik pembelajaran",
      "Prioritas update fitur",
    ],
    buttonText: "Hubungi Kami",
    isPopular: false,
  },
  {
    title: "Free Plan",
    description: "Untuk individu & pendidik mandiri",
    price: "Segera Datang",
    features: [
      "3x Free Generate per Bulan",
      "Materi ajar dinamis",
      "Dashboard pembelajaran",
    ],
    buttonText: "Hubungi Kami",
    isPopular: false,
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
  subPrice?: string;
  features: string[];
  buttonText: string;
  isPopular: boolean;
}

const PricingCard = ({
  title,
  description,
  price,
  priceUnit,
  subPrice,
  features,
  buttonText,
  isPopular,
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
      className="relative rounded-2xl bg-white overflow-visible h-full"
      style={{
        border: isPopular ? "0.758px solid #bedbff" : "0.758px solid #e5e7eb",
        boxShadow: isPopular
          ? "0px 4px 6px rgba(0,0,0,0.1), 0px 2px 4px rgba(0,0,0,0.1)"
          : "0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px rgba(0,0,0,0.1)",
      }}
    >
      {/* Popular tint overlay */}
      {isPopular && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ backgroundColor: "rgba(239,246,255,0.3)" }}
        />
      )}

      {/* Popular badge */}
      {isPopular && (
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[12px] font-bold py-1 px-4 rounded-full uppercase tracking-wider whitespace-nowrap z-10"
          style={{
            top: 0,
            background: "linear-gradient(to right, #155dfc, #7f22fe)",
            boxShadow:
              "0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px rgba(0,0,0,0.1)",
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
        <p className="text-[#6a7282] text-[14px] mb-6">{description}</p>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-2">
          <span
            className="text-[#101828] font-bold"
            style={{
              fontSize: isComingSoon ? 34 : 36,
              letterSpacing: "-0.53px",
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

        {subPrice ? (
          <p className="text-[#00a63e] text-[12px] font-medium mb-6">
            {subPrice}
          </p>
        ) : (
          <div className="h-4 mb-6" />
        )}

        {/* Feature list */}
        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((f, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-[14px] text-[#4a5565]"
            >
              <CheckBadge variant={isPopular ? "purple" : "blue"} />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        {isPopular ? (
          <button
            className="w-full py-3 rounded-xl text-[14px] font-semibold text-white transition-opacity hover:opacity-90 mt-auto"
            style={{
              background: "linear-gradient(to right, #6a2cfe, #010ffe)",
              boxShadow: "0px 4px 6px 0px #cebeff, 0px 2px 4px 0px #cebeff",
            }}
          >
            {buttonText}
          </button>
        ) : (
          <button
            className="w-full py-3 rounded-xl text-[14px] font-semibold text-[#101828] bg-white hover:bg-gray-50 transition-colors mt-auto"
            style={{ border: "0.758px solid #e5e7eb" }}
          >
            {buttonText}
          </button>
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
