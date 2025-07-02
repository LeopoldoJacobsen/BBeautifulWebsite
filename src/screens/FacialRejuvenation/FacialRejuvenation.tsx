import { ArrowUpIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { HeroSection } from "../ElementLight/sections/HeroSection";
import { ServiceGallerySection } from "../ElementLight/sections/ServiceGallerySection";

export const FacialRejuvenation = (): JSX.Element => {
  const contactInfo = [
    {
      icon: <PhoneIcon className="h-5 w-5 text-[#c292a1]" />,
      text: "1 (678) 404-5969",
      alt: "Phone",
    },
  ];

  const facialTreatments = [
    {
      title: "Botox",
      description: "Smooth away fine lines and wrinkles with precision injections",
      image: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg",
      price: "Starting at $12/unit",
      duration: "15-30 minutes"
    },
    {
      title: "Fillers & Collagen",
      description: "Restore volume and enhance facial contours naturally",
      image: "https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg",
      price: "Starting at $650",
      duration: "30-45 minutes"
    },
    {
      title: "Microneedling",
      description: "Stimulate collagen production for smoother, firmer skin",
      image: "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg",
      price: "Starting at $250",
      duration: "60 minutes"
    },
    {
      title: "VI Peel",
      description: "Advanced chemical peel for skin renewal and rejuvenation",
      image: "https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg",
      price: "Starting at $300",
      duration: "45 minutes"
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
        <section className="relative w-full h-[600px] bg-gradient-to-br from-[#f8f5f0] via-[#f4f0ea] to-[#ead5c4]">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg')] bg-cover bg-center opacity-20" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <p className="font-bold text-[#a78351] text-sm tracking-[6px] mb-6 uppercase">
              Your Place For
            </p>
            <h1 className="font-['Imperial_Script'] text-[#a78351] text-7xl lg:text-8xl xl:text-9xl mb-8 leading-tight">
              Facial Rejuvenation
            </h1>
            <p className="text-[#5f2131] max-w-3xl mx-auto text-lg mb-10 leading-relaxed font-medium">
              Discover the art of facial rejuvenation at Bbeautiful Medical Spa. Our expert team 
              combines advanced techniques with personalized care to help you achieve natural, 
              radiant results that enhance your unique beauty.
            </p>
            <Button className="bg-[#c292a1] hover:bg-[#b08291] text-white font-bold text-sm tracking-[3px] px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
              BOOK YOUR CONSULTATION
            </Button>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-bold text-[#a78351] text-sm tracking-[4px] mb-6 uppercase">
                Welcome To
              </p>
              <div className="mb-8">
                <h2 className="text-5xl font-bold text-[#c292a1] mb-3">Bbeautiful</h2>
                <p className="text-2xl text-[#874c62] font-medium">Facial Rejuvenation Center</p>
              </div>
              <p className="font-bold text-[#874c62] text-lg mb-6">
                Located in Chamblee, GA
              </p>
              <p className="font-bold text-[#874c62] text-sm tracking-[2px] mb-10 uppercase">
                Where Science Meets Beauty
              </p>
              
              <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed mb-12 text-lg">
                <p>
                  At Bbeautiful Medical Spa, we believe that true beauty comes from feeling confident 
                  in your own skin. Our facial rejuvenation treatments are designed to enhance your 
                  natural features while addressing your specific concerns with precision and artistry.
                </p>
                <p>
                  Our team of certified professionals uses the latest FDA-approved treatments and 
                  cutting-edge technology to deliver exceptional results. From subtle enhancements 
                  to comprehensive rejuvenation, we create personalized treatment plans that help 
                  you look and feel your absolute best.
                </p>
              </div>
              
              <Button className="bg-[#a87b96] hover:bg-[#96697f] text-white font-bold text-sm tracking-[2px] px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                DISCOVER OUR TREATMENTS
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Treatments Section */}
        <section className="w-full py-20 bg-gradient-to-b from-[#f8f5f0] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-bold text-[#c292a1] text-sm tracking-[4px] mb-4 uppercase">
                Signature
              </p>
              <h2 className="font-['Imperial_Script'] text-[#a78351] text-5xl lg:text-6xl mb-6">
                Facial Rejuvenation Treatments
              </h2>
              <p className="text-[#5f2131] max-w-4xl mx-auto leading-relaxed text-lg">
                Experience our most popular facial rejuvenation treatments, each designed to 
                address specific concerns and deliver beautiful, natural-looking results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facialTreatments.map((treatment, index) => (
                <div key={`treatment-${index}`} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6 h-[300px]">
                    <img 
                      src={treatment.image} 
                      alt={treatment.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-xl font-bold mb-2">
                        {treatment.title}
                      </h3>
                      <div className="flex justify-between items-center text-white/90 text-sm">
                        <span>{treatment.duration}</span>
                        <span className="font-semibold">{treatment.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <h3 className="font-bold text-[#c292a1] text-lg tracking-[2px] uppercase">
                      {treatment.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {treatment.description}
                    </p>
                    
                    <Button 
                      variant="outline"
                      className="w-full border-2 border-[#c292a1] text-[#c292a1] hover:bg-[#c292a1] hover:text-white font-bold text-xs tracking-[2px] py-3 rounded-lg transition-all duration-300"
                    >
                      LEARN MORE
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Process Section */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-bold text-[#c292a1] text-sm tracking-[4px] mb-4 uppercase">
                Our Process
              </p>
              <h2 className="font-['Imperial_Script'] text-[#a78351] text-5xl lg:text-6xl mb-6">
                Your Rejuvenation Journey
              </h2>
              <p className="text-[#5f2131] max-w-3xl mx-auto leading-relaxed text-lg">
                We believe in a comprehensive approach to facial rejuvenation that begins with 
                understanding your unique goals and concerns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#c292a1] to-transparent"></div>
                </div>
                <h4 className="font-bold text-[#874c62] text-lg mb-3">Consultation</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comprehensive assessment of your skin and discussion of your aesthetic goals 
                  with our expert team.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#c292a1] to-transparent"></div>
                </div>
                <h4 className="font-bold text-[#874c62] text-lg mb-3">Customization</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Personalized treatment plan designed specifically for your skin type, 
                  concerns, and desired outcomes.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#c292a1] to-transparent"></div>
                </div>
                <h4 className="font-bold text-[#874c62] text-lg mb-3">Treatment</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Professional treatment performed with precision using the latest 
                  technology and premium products.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">4</span>
                  </div>
                </div>
                <h4 className="font-bold text-[#874c62] text-lg mb-3">Follow-Up</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ongoing support and maintenance recommendations to ensure 
                  long-lasting, beautiful results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offer Section */}
        <section className="w-full py-20 bg-gradient-to-r from-[#f3eada] to-[#f8f5f0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-bold text-[#a78351] text-sm tracking-[4px] mb-4 uppercase">
                  Special Offer
                </p>
                <h2 className="font-['Imperial_Script'] text-[#a78351] text-5xl lg:text-6xl mb-6">
                  First Time Client?
                </h2>
                <p className="text-[#6d6d6d] text-xl mb-8 leading-relaxed">
                  <span className="font-light">Enjoy </span>
                  <span className="font-bold text-[#c292a1] text-2xl">$50 OFF</span>
                  <span className="font-light"> your first facial rejuvenation treatment and discover the Bbeautiful difference.</span>
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#c292a1] rounded-full"></div>
                    <span className="text-gray-700 font-medium">Complimentary consultation ($150 value)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#c292a1] rounded-full"></div>
                    <span className="text-gray-700 font-medium">Personalized treatment plan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#c292a1] rounded-full"></div>
                    <span className="text-gray-700 font-medium">Professional skincare recommendations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#c292a1] rounded-full"></div>
                    <span className="text-gray-700 font-medium">Take-home skincare samples</span>
                  </div>
                </div>
                <Button className="bg-[#c292a1] hover:bg-[#b08291] text-white font-bold text-sm tracking-[2px] px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  CLAIM YOUR OFFER
                </Button>
              </div>

              <div className="relative flex justify-center">
                <div className="relative w-[400px] h-[280px]">
                  <div className="absolute w-[350px] h-[200px] top-4 left-2 rounded-3xl transform rotate-[-8deg] shadow-2xl bg-gradient-to-br from-[#c292a1] to-[#a87b96] transition-transform duration-300 hover:rotate-[-4deg] flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-4xl font-bold mb-2">$50 OFF</h3>
                      <p className="text-lg mb-1">First Treatment</p>
                      <p className="text-sm opacity-90">New clients only</p>
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <p className="text-xs">Bbeautiful Medical Spa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-bold text-[#c292a1] text-sm tracking-[4px] mb-4 uppercase">
                Excellence & Safety
              </p>
              <h2 className="font-['Imperial_Script'] text-[#a78351] text-5xl lg:text-6xl mb-6">
                Why Choose Bbeautiful?
              </h2>
              <p className="text-[#5f2131] max-w-3xl mx-auto leading-relaxed text-lg">
                Our commitment to excellence, safety, and natural-looking results sets us apart 
                in the world of facial rejuvenation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-b from-[#f8f5f0] to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L3.09 8.26L4 21L12 17L20 21L20.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-[#874c62] text-xl mb-4">Expert Practitioners</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our team consists of board-certified professionals with extensive training 
                  in advanced facial rejuvenation techniques and aesthetic medicine.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-b from-[#f8f5f0] to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-[#874c62] text-xl mb-4">Premium Products</h4>
                <p className="text-gray-600 leading-relaxed">
                  We exclusively use FDA-approved products and cutting-edge technology 
                  to ensure the highest standards of safety and efficacy.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-b from-[#f8f5f0] to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-[#874c62] text-xl mb-4">Natural Results</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our artistic approach focuses on enhancing your natural beauty with 
                  subtle, sophisticated results that look refreshed, never overdone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-20 bg-gradient-to-r from-[#c292a1] to-[#a87b96]">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Take the first step towards a more confident, radiant you. Schedule your 
              complimentary consultation today and discover how facial rejuvenation can 
              enhance your natural beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-[#c292a1] hover:bg-gray-100 font-bold text-sm tracking-[2px] px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                BOOK FREE CONSULTATION
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#c292a1] font-bold text-sm tracking-[2px] px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                VIEW TREATMENT MENU
              </Button>
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