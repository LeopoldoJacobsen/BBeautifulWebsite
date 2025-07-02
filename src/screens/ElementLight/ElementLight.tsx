import { ArrowUpIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { HeroSection } from "./sections/HeroSection";
import { PromoSection } from "./sections/PromoSection";
import { ServiceGallerySection } from "./sections/ServiceGallerySection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const ElementLight = (): JSX.Element => {
  const contactInfo = [
    {
      icon: <PhoneIcon className="h-5 w-5 text-[#c292a1]" />,
      text: "1 (678) 404-5969",
      alt: "Phone",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1920px] relative">
        {/* Header Section */}
        <header className="w-full bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Bar with Contact Info */}
            <div className="flex justify-between items-center py-4 border-b border-gray-100">
              <div className="flex items-center space-x-8">
                {contactInfo.map((item, index) => (
                  <div key={`contact-${index}`} className="flex items-center space-x-3">
                    {item.icon}
                    <span className="text-sm text-gray-600 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  className="w-10 h-10 bg-[#c292a1] rounded-full flex items-center justify-center hover:bg-[#b08291] transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button
                  className="w-10 h-10 bg-[#c292a1] rounded-full flex items-center justify-center hover:bg-[#b08291] transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.405c-.315 0-.595-.122-.807-.315-.21-.21-.315-.49-.315-.807 0-.315.105-.595.315-.807.21-.21.49-.315.807-.315.315 0 .595.105.807.315.21.21.315.49.315.807 0 .315-.105.595-.315.807-.21.193-.49.315-.807.315zm-3.832 9.405c-2.5 0-4.531-2.031-4.531-4.531s2.031-4.531 4.531-4.531 4.531 2.031 4.531 4.531-2.031 4.531-4.531 4.531z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Logo Section */}
            <div className="flex justify-center py-6">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-[#c292a1] mb-2">Bbeautiful</h1>
                <p className="text-lg text-[#874c62] font-medium">Medical Spa</p>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <HeroSection />

        {/* Main Content Sections */}
        <main>
          <TestimonialsSection />
          <PromoSection />
        </main>

        {/* Footer */}
        <ServiceGallerySection />

        {/* Back to Top Button */}
        <Button
          className="fixed bottom-6 right-6 w-14 h-14 bg-[#c292a1] hover:bg-[#b08291] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUpIcon className="w-6 h-6 text-white" />
        </Button>
      </div>
    </div>
  );
};