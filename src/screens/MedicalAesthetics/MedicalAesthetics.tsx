import { ArrowUpIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { HeroSection } from "../ElementLight/sections/HeroSection";
import { ServiceGallerySection } from "../ElementLight/sections/ServiceGallerySection";

export const MedicalAesthetics = (): JSX.Element => {
  const contactInfo = [
    {
      icon: <PhoneIcon className="h-5 w-5 text-[#c292a1]" />,
      text: "1 (678) 404-5969",
      alt: "Phone",
    },
  ];

  const treatmentServices = [
    {
      title: "Botox & Dysport",
      description: "Smooth away fine lines and wrinkles with our premium neurotoxin treatments",
      image: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg",
      features: ["Forehead lines", "Crow's feet", "Frown lines", "Preventative care"]
    },
    {
      title: "Dermal Fillers",
      description: "Restore volume and enhance facial contours with FDA-approved fillers",
      image: "https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg",
      features: ["Lip enhancement", "Cheek augmentation", "Nasolabial folds", "Under-eye hollows"]
    },
    {
      title: "PDO Thread Lift",
      description: "Non-surgical facelift using dissolvable threads for instant lifting",
      image: "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg",
      features: ["Jawline definition", "Neck tightening", "Brow lift", "Cheek lift"]
    },
    {
      title: "Laser Treatments",
      description: "Advanced laser technology for skin resurfacing and rejuvenation",
      image: "https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg",
      features: ["Skin resurfacing", "Pigmentation removal", "Scar reduction", "Pore refinement"]
    },
    {
      title: "Body Contouring",
      description: "Non-invasive body sculpting treatments for targeted fat reduction",
      image: "https://images.pexels.com/photos/3985332/pexels-photo-3985332.jpeg",
      features: ["CoolSculpting", "Radiofrequency", "Ultrasound therapy", "Cellulite reduction"]
    },
    {
      title: "Skin Tightening",
      description: "Advanced radiofrequency and ultrasound treatments for firmer skin",
      image: "https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg",
      features: ["Face tightening", "Neck firming", "Body contouring", "Collagen stimulation"]
    }
  ];

  const beforeAfterGallery = [
    {
      title: "Botox Treatment",
      beforeImage: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg",
      afterImage: "https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg"
    },
    {
      title: "Dermal Fillers",
      beforeImage: "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg",
      afterImage: "https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg"
    },
    {
      title: "Thread Lift",
      beforeImage: "https://images.pexels.com/photos/3985332/pexels-photo-3985332.jpeg",
      afterImage: "https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg"
    }
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

        {/* Hero Banner */}
        <section className="relative w-full h-[500px] bg-gradient-to-br from-[#c292a1]/20 via-[#e2cbd8]/10 to-[#f4f0ea]">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg')] bg-cover bg-center opacity-30" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <p className="font-bold text-[#874c62] text-lg tracking-[6px] mb-4 uppercase">
              Advanced
            </p>
            <h1 className="font-['Imperial_Script'] text-[#874c62] text-6xl lg:text-7xl mb-6 leading-tight">
              Medical Aesthetics
            </h1>
            <p className="text-[#5f2131] max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
              Transform your appearance with our cutting-edge medical aesthetic treatments, 
              performed by certified professionals using the latest technology and techniques.
            </p>
            <Button className="bg-[#c292a1] hover:bg-[#b08291] text-white font-bold text-sm tracking-[3px] px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              SCHEDULE CONSULTATION
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-bold text-[#c292a1] text-sm tracking-[4px] mb-4 uppercase">
                Our Signature
              </p>
              <h2 className="font-['Imperial_Script'] text-[#a78351] text-5xl lg:text-6xl mb-6">
                Medical Aesthetic Treatments
              </h2>
              <p className="text-[#5f2131] max-w-4xl mx-auto leading-relaxed text-lg">
                Experience the latest in medical aesthetics with our comprehensive range of 
                FDA-approved treatments designed to enhance your natural beauty and boost your confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentServices.map((service, index) => (
                <div key={`service-${index}`} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6 h-[300px]">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-xl font-bold mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={`feature-${index}-${featureIndex}`} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#c292a1] rounded-full flex-shrink-0"></div>
                          <span className="text-[#3b2129] text-sm font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline"
                      className="w-full border-2 border-[#c292a1] text-[#c292a1] hover:bg-[#c292a1] hover:text-white font-bold text-sm tracking-[2px] py-2 rounded-lg transition-all duration-300"
                    >
                      LEARN MORE
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="w-full py-20 bg-gradient-to-b from-[#f8f5f0] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-bold text-[#c292a1] text-sm tracking-[4px] mb-4 uppercase">
                Real Results
              </p>
              <h2 className="font-['Imperial_Script'] text-[#a78351] text-5xl lg:text-6xl mb-6">
                Before & After Gallery
              </h2>
              <p className="text-[#5f2131] max-w-3xl mx-auto leading-relaxed text-lg">
                See the transformative results our clients have achieved with our medical aesthetic treatments.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {beforeAfterGallery.map((item, index) => (
                <div key={`gallery-${index}`} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-[#c292a1] font-bold text-lg mb-6 text-center">
                      {item.title}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-600 mb-2">BEFORE</p>
                        <div className="relative overflow-hidden rounded-lg h-[200px]">
                          <img 
                            src={item.beforeImage} 
                            alt={`${item.title} before`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-600 mb-2">AFTER</p>
                        <div className="relative overflow-hidden rounded-lg h-[200px]">
                          <img 
                            src={item.afterImage} 
                            alt={`${item.title} after`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="w-full py-20 bg-gradient-to-r from-[#c292a1] to-[#a87b96]">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Schedule your complimentary consultation today and discover which medical aesthetic 
              treatments are right for you. Our expert team will create a personalized treatment plan 
              to help you achieve your aesthetic goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#c292a1] hover:bg-gray-100 font-bold text-sm tracking-[2px] px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                BOOK CONSULTATION
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#c292a1] font-bold text-sm tracking-[2px] px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                VIEW PRICING
              </Button>
            </div>
          </div>
        </section>

        {/* Safety & Credentials */}
        <section className="w-full py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="font-bold text-[#a78351] text-sm tracking-[4px] mb-4 uppercase">
                Safety & Excellence
              </h3>
              <h2 className="text-3xl font-bold text-[#c292a1] mb-6">
                Why Choose Bbeautiful Medical Spa?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#c292a1] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L3.09 8.26L4 21L12 17L20 21L20.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-[#874c62] text-lg mb-2">Certified Professionals</h4>
                <p className="text-gray-600 text-sm">
                  Our team consists of licensed medical professionals with extensive training in aesthetic procedures.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#c292a1] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-[#874c62] text-lg mb-2">FDA-Approved Products</h4>
                <p className="text-gray-600 text-sm">
                  We only use FDA-approved products and the latest technology for safe, effective treatments.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#c292a1] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-[#874c62] text-lg mb-2">Personalized Care</h4>
                <p className="text-gray-600 text-sm">
                  Every treatment is customized to your unique needs and aesthetic goals for optimal results.
                </p>
              </div>
            </div>
          </div>
        </section>

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