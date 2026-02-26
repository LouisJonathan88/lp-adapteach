import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const NavbarPricing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Fitur Kami", href: "#" },
    { name: "Cara Kerja", href: "#" },
    { name: "Manfaat Fitur", href: "#" },
    { name: "Partner", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Hubungi Kami", href: "#" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          <a
            href="/"
            className={`flex items-center flex-shrink-0 relative z-50 transition-opacity duration-300 ${
              isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <img
              className="w-12 h-12 object-contain"
              alt="AdapTeach Logo"
              src="/logo.png"
            />
          </a>
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-black font-medium text-base leading-none font-inter">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-purple-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button className="text-white font-semibold font-inter text-base leading-none px-6 py-2 bg-[linear-gradient(90deg,#6A2CFE_0%,#010FFE_100%)] hover:opacity-90 transition-all duration-300">
              Join Beta
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none relative z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-white z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center mt-20 gap-8 text-xl font-medium">
          <a
            href="/"
            aria-label="Go to homepage"
            className="flex items-center flex-shrink-0 relative z-50"
          >
            <img
              className="w-16 h-16 object-contain mb-4"
              alt="AdapTeach Logo"
              src="/logo.png"
            />
          </a>

          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-purple-600 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <Button
            className="mt-4 bg-[#6A2CFE] text-white px-10 py-6 text-lg font-bold shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            Join Beta
          </Button>
        </div>
      </div>
    </nav>
  );
};
