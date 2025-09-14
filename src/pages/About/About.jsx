import React from "react";
import { Link } from "react-router-dom";
import { aboutIntro, aboutBlocks, philosophy } from "../../constants/index.js";

const About = () => {
  return (
    <>
      <section className="about-page">
        {/* Hero Video */}
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/videos/video2.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              {aboutIntro.title}
            </h1>
          </div>
        </div>

        {/* Intro */}
        <div className="container mx-auto mt-12 px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              {aboutIntro.title}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">{aboutIntro.subtitle}</p>
          </div>

          {/* Blocks */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {aboutBlocks.map((block, index) => (
                <div
                key={index}
                className={`${
                    block.color === "blue" ? "bg-blue-950 text-white" : "bg-gray-500 text-amber-50"
                } p-6 rounded-xl shadow-md text-center transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-110 cursor-pointer`}
                >
                <i
                    className={`fa ${block.icon} fa-3x mb-3 ${block.color === "gray" ? "text-blue-600" : ""}`}
                ></i>
                <h4 className="text-xl font-semibold mb-2">{block.title}</h4>
                <p>{block.text}</p>
                </div>
            ))}
            </div>
        </div>
      </section>

<section className="bg-gray-50 py-16">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        {philosophy.title}
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        {philosophy.subtitle}
      </p>
    </div>

    {/* Timeline */}
    <div className="timeline relative">
      {philosophy.items.map((item, index) => (
        <div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"} mb-12`}
        >
          <div className="timeline-content bg-[#E5EAF5] text-[#1B2340] p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <i className={`fa ${item.icon} fa-2x text-blue-600`}></i>
            <h4 className="text-lg font-semibold mt-2">{item.title}</h4>
            <p className="text-gray-600">{item.text}</p>
          </div>
        </div>
      ))}

      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#1B2340] -translate-x-1/2"></div>
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
    </>
  );
};

export default About;
