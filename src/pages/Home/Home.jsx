import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import {
  heroSection,
  missionSection,
  achievementsSection,
  servicesSection
} from "../../constants/index.js";

const Home = () => {
  

  const heroTextRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !scrolled) {
        setScrolled(true);
        const tl = gsap.timeline();
        tl.to(heroTextRef.current, {
          opacity: 0,
          y: -30,
          duration: 1.2,
          ease: "power3.inOut",
        });
        tl.to(
          ".hero-section",
          { filter: "brightness(1.1)", duration: 1, ease: "power2.inOut" },
          "-=0.8"
        );
      } else if (window.scrollY <= 50 && scrolled) {
        setScrolled(false);
        const tl = gsap.timeline();
        tl.to(heroTextRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        });
        tl.to(
          ".hero-section",
          { filter: "brightness(0.7)", duration: 1, ease: "power2.out" },
          "-=0.8"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <div className={`home-page ${scrolled ? "scrolled" : ""}`}>
      {/* Hero Section */}
      <section className="hero-section relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/video.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div
            ref={heroTextRef}
            className="text-center text-white space-y-4 px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold">{heroSection.title}</h1>
            <p className="text-lg md:text-2xl">{heroSection.subtitle}</p>
            <Link
              to="/about"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              {heroSection.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
    <section className="mission-section py-16 bg-white text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            {missionSection.title}
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto mb-12">
            {missionSection.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionSection.items.map((item, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                    <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-white text-sm md:text-base">{item.text}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
    </section>

    {/* Achievement Section */}
    <section className="achievements-section py-16 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {achievementsSection.title}
            </h2>
            <div className="achievements-grid gap-8">
            {achievementsSection.items.map((item, index) => (
                <div
                key={index}
                className="achievement-card hover:bg-black p-6 rounded-xl shadow transition"
                >
                <i className={`fa ${item.icon} fa-3x text-[#F5D386] mb-3`} aria-hidden="true"></i>
                <h3>{item.value}</h3>
                <p className="text-[#F5D386] mt-2">{item.text}</p>
                </div>
            ))}
            </div>
            <div className="mt-8">
            <Link
                to="/services"
                className="inline-block achievements-btn hover:bg-yellow-400"
            >
                {achievementsSection.cta}
            </Link>
            </div>
        </div>
    </section>

    {/* Service Section */}
<section className="py-16 bg-white text-center">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
      {servicesSection.title}
    </h2>
    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
      {servicesSection.description}
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {servicesSection.items.map((item, index) => (
        <div
  key={index}
  className="relative rounded-xl overflow-hidden shadow-lg group h-[32rem]" // tăng chiều cao
>
  {/* Layer 1: Default */}
  <div className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-0">
    <img
      src={item.img}
      alt={item.title}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
      <p className="text-white text-lg">{item.text}</p>
    </div>
  </div>

  {/* Layer 2: Hover */}
  <div className="absolute inset-0 opacity-0 transition-opacity duration-700 delay-150 group-hover:opacity-100">
    <img
      src={item.hoverImg}
      alt={item.title}
      className="w-full h-full object-cover brightness-110 scale-105 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center p-6">
      <h3 className="text-3xl font-bold text-white mb-2 transform translate-y-4 opacity-0 transition-all duration-700 delay-200 group-hover:translate-y-0 group-hover:opacity-100">
        {item.title}
      </h3>
      <p className="text-white text-xl opacity-0 transform translate-y-4 transition-all duration-700 delay-300 group-hover:translate-y-0 group-hover:opacity-100">
        {item.hoverText || item.text}
      </p>
      <Link
        to="/services"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg opacity-0 transform translate-y-4 transition-all duration-700 delay-400 group-hover:translate-y-0 group-hover:opacity-100"
      >
        Xem chi tiết
      </Link>
    </div>
  </div>
</div>

      ))}
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-[#1B2340] text-white py-6 text-center">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Agua International Education. Bảo lưu
            mọi quyền.
          </p>
          <p className="mt-2 space-x-3">
            <Link to="/about" className="hover:underline">
              Giới thiệu
            </Link>
            <span>|</span>
            <Link to="/services" className="hover:underline">
              Dịch vụ
            </Link>
            <span>|</span>
            <Link to="/contact" className="hover:underline">
              Liên hệ
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
