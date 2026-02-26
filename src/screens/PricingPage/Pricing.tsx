import React, { useState } from "react";
import { Check, Minus } from "lucide-react";
import { NavbarPricing } from "@/components/common/NavPricing";
import { Manfaat } from "@/screens/Home//Manfaat";
import { CaraKerja } from "@/screens/Home/CaraKerja";
import { Footer } from "@/components/common/Footer";

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"bulanan" | "tahunan">(
    "tahunan"
  );

  return (
    <div className="bg-white w-full min-h-screen flex flex-col font-inter">
      <NavbarPricing />

      <main className="flex-grow pt-32 pb-20">
        {/* --- HEADER SECTION --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-[#33383f] text-3xl md:text-4xl font-semibold leading-tight mb-4">
            Pilih Paket yang Sesuai dengan <br className="hidden md:block" />{" "}
            Kebutuhan Pendidikan Anda
          </h1>
          <p className="text-[#686e77] text-base md:text-lg max-w-2xl mx-auto mb-10">
            Platform pembelajaran berbasis AI yang fleksibel dan scalable,
            dirancang untuk mendukung pertumbuhan individu maupun institusi
            pendidikan.
          </p>

          {/* Toggle Billing */}
          <div className="flex justify-center items-center">
            <div className="bg-[#f2f4f7] p-1 rounded-full flex items-center shadow-inner">
              <button
                onClick={() => setBillingCycle("bulanan")}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  billingCycle === "bulanan"
                    ? "bg-white text-[#101828] shadow-md"
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
                <span
                  className={`bg-[rgba(255,255,255,0.2)] text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide ${
                    billingCycle !== "tahunan" ? "text-[#6a7282]" : ""
                  }`}
                >
                  Hemat 20%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* --- PRICING CARDS --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Monthly Plan */}
            <PricingCard
              title="Monthly Plan"
              description="Untuk individu & pendidik mandiri"
              price="Rp 1.788.000"
              features={[
                "Rencana belajar AI",
                "Materi ajar dinamis",
                "Dashboard pembelajaran",
                "Dukungan komunitas",
              ]}
              buttonText="Mulai Gratis"
            />

            {/* Annual Plan (Featured) */}
            <PricingCard
              title="Annual Plan"
              description="Paling hemat untuk jangka panjang"
              price="Rp 1.490.000"
              features={[
                "Semua fitur Monthly Plan",
                "Smart recommendation lanjutan",
                "Analitik pembelajaran",
                "Prioritas update fitur",
              ]}
              buttonText="Coba Sekarang"
              isPopular={true}
              subPrice="Hemat 20% dibanding bulanan"
            />

            {/* Enterprise */}
            <PricingCard
              title="Enterprise"
              description="Untuk sekolah, institusi & organisasi"
              price="Custom Pricing"
              features={[
                "Custom AI learning flow",
                "Multi-user management",
                "Dedicated support",
                "Integrasi sistem internal",
                "SLA & onboarding",
              ]}
              buttonText="Hubungi Kami"
            />
          </div>
        </section>

        {/* --- COMPARISON TABLE --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#33383f] text-3xl font-semibold mb-2">
              Bandingkan Fitur Lengkap
            </h2>
            <p className="text-[#686e77]">
              Detail spesifikasi untuk setiap paket
            </p>
          </div>
          <ComparisonTable />
        </section>
      </main>

      <Manfaat />
      <CaraKerja />
      <Footer />
    </div>
  );
};

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

const PricingCard = ({
  title,
  description,
  price,
  features,
  buttonText,
  isPopular,
  subPrice,
}: {
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  subPrice?: string;
}) => (
  <div
    className="relative rounded-2xl bg-white overflow-visible h-full"
    style={{
      border: isPopular ? "0.758px solid #bedbff" : "0.758px solid #e5e7eb",
      boxShadow: isPopular
        ? "0px 4px 6px rgba(0,0,0,0.1), 0px 2px 4px rgba(0,0,0,0.1)"
        : "0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px rgba(0,0,0,0.1)",
    }}
  >
    {isPopular && (
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ backgroundColor: "rgba(239,246,255,0.3)" }}
      />
    )}

    {isPopular && (
      <div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[12px] font-bold py-1 px-4 rounded-full uppercase tracking-wider whitespace-nowrap z-10"
        style={{
          top: 0,
          background: "linear-gradient(to right, #155dfc, #7f22fe)",
          boxShadow: "0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        Paling Populer
      </div>
    )}

    {/* Card content */}
    <div className="relative z-10 p-8 flex flex-col h-full justify-between">
      <h3 className="text-[#101828] text-[18px] font-semibold mb-1 tracking-[-0.44px]">
        {title}
      </h3>
      <p className="text-[#6a7282] text-[14px] mb-6">{description}</p>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-2">
        <span
          className="text-[#101828] font-bold"
          style={{
            fontSize: price === "Custom Pricing" ? 32 : 36,
            letterSpacing: "-0.53px",
          }}
        >
          {price}
        </span>
        {price !== "Custom Pricing" && (
          <span className="text-[#6a7282] text-[14px] font-medium">/tahun</span>
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
      <ul className="space-y-4 mb-8">
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
          className="w-full py-3 rounded-xl text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(to right, #6a2cfe, #010ffe)",
            boxShadow: "0px 4px 6px 0px #cebeff, 0px 2px 4px 0px #cebeff",
          }}
        >
          {buttonText}
        </button>
      ) : (
        <button
          className="w-full py-3 rounded-xl text-[14px] font-semibold text-[#101828] bg-white hover:bg-gray-50 transition-colors"
          style={{ border: "0.758px solid #e5e7eb" }}
        >
          {buttonText}
        </button>
      )}
    </div>
  </div>
);

const TblCheck = ({ col }: { col: "monthly" | "annual" | "enterprise" }) =>
  col === "annual" ? (
    <span
      className="inline-flex items-center justify-center rounded-full mx-auto"
      style={{ width: 24, height: 24, backgroundColor: "#f2edff" }}
    >
      <Check
        strokeWidth={2}
        style={{ width: 16, height: 16, color: "#692aff" }}
      />
    </span>
  ) : (
    <span
      className="inline-flex items-center justify-center rounded-full mx-auto"
      style={{ width: 24, height: 24, backgroundColor: "#f3f4f6" }}
    >
      <Check
        strokeWidth={2}
        style={{ width: 16, height: 16, color: "#4a5565" }}
      />
    </span>
  );

const TblMinus = () => (
  <div className="flex justify-center">
    <Minus
      strokeWidth={2}
      style={{ width: 16, height: 16, color: "#d1d5dc" }}
    />
  </div>
);

const ComparisonTable = () => (
  <div
    className="min-w-[800px] border border-[#e5e7eb] rounded-xl overflow-hidden bg-white"
    style={{
      boxShadow:
        "0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)",
    }}
  >
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-[#f9fafb]">
          <th className="p-5 text-[14px] font-semibold text-[#101828] border-b border-[#e5e7eb]">
            Fitur
          </th>
          <th className="p-5 text-[14px] font-semibold text-[#101828] border-b border-[#e5e7eb] text-center">
            Monthly
          </th>
          <th className="p-5 text-[14px] font-semibold text-[#692aff] border-b border-[#e5e7eb] text-center">
            Annual
          </th>
          <th className="p-5 text-[14px] font-semibold text-[#101828] border-b border-[#e5e7eb] text-center">
            Enterprise
          </th>
        </tr>
      </thead>
      <tbody className="text-[14px]">

        <tr className="bg-[rgba(249,250,251,0.5)] border-b border-[#e5e7eb]">
          <td colSpan={4} className="px-5 py-3 font-medium text-[#101828]">
            Fitur AI
          </td>
        </tr>

        <tr className="border-b border-[#e5e7eb] hover:bg-gray-50 transition-colors">
          <td className="p-5 text-[#4a5565]">AI Learning Flow</td>
          <td className="p-5 text-center">
            <TblCheck col="monthly" />
          </td>
          <td className="p-5 text-center">
            <TblCheck col="annual" />
          </td>
          <td className="p-5 text-center">
            <span className="font-medium text-[#101828]">Custom</span>
          </td>
        </tr>

        <tr className="border-b border-[#e5e7eb] hover:bg-gray-50 transition-colors">
          <td className="p-5 text-[#4a5565]">Smart Recommendations</td>
          <td className="p-5 text-center">
            <TblMinus />
          </td>
          <td className="p-5 text-center">
            <TblCheck col="annual" />
          </td>
          <td className="p-5 text-center">
            <TblCheck col="enterprise" />
          </td>
        </tr>

        <tr className="border-b border-[#e5e7eb] hover:bg-gray-50 transition-colors">
          <td className="p-5 text-[#4a5565]">Personalized Content</td>
          <td className="p-5 text-center">
            <TblCheck col="monthly" />
          </td>
          <td className="p-5 text-center">
            <TblCheck col="annual" />
          </td>
          <td className="p-5 text-center">
            <TblCheck col="enterprise" />
          </td>
        </tr>

        <tr className="bg-[rgba(249,250,251,0.5)] border-b border-[#e5e7eb]">
          <td colSpan={4} className="px-5 py-3 font-medium text-[#101828]">
            Support & Analytics
          </td>
        </tr>

        <tr className="border-b border-[#e5e7eb] hover:bg-gray-50 transition-colors">
          <td className="p-5 text-[#4a5565]">Support Level</td>
          <td className="p-5 text-center">
            <span className="font-medium text-[#101828]">Email</span>
          </td>
          <td className="p-5 text-center">
            <span className="font-medium text-[#1447e6]">Priority Email</span>
          </td>
          <td className="p-5 text-center">
            <span className="font-medium text-[#101828]">Dedicated</span>
          </td>
        </tr>

        <tr className="border-b border-[#e5e7eb] hover:bg-gray-50 transition-colors">
          <td className="p-5 text-[#4a5565]">Learning Analytics</td>
          <td className="p-5 text-center">
            <span className="font-medium text-[#101828]">Basic</span>
          </td>
          <td className="p-5 text-center">
            <span className="font-medium text-[#1447e6]">Advanced</span>
          </td>
          <td className="p-5 text-center">
            <span className="font-medium text-[#101828]">Custom Reports</span>
          </td>
        </tr>

        <tr className="hover:bg-gray-50 transition-colors">
          <td className="p-5 text-[#4a5565]">SLA Guarantee</td>
          <td className="p-5 text-center">
            <TblMinus />
          </td>
          <td className="p-5 text-center">
            <TblMinus />
          </td>
          <td className="p-5 text-center">
            <TblCheck col="enterprise" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
