import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className="contact-page py-32 bg-gray-100">
        <div className="container mx-auto px-5">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Liên hệ với chúng tôi</h2>
            <p className="text-lg text-gray-600">
              Đây là thông tin liên hệ của Agua International Education. Chúng tôi luôn sẵn sàng hỗ trợ bạn!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info Card */}
            <div className="bg-white p-10 rounded-xl shadow-lg space-y-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Thông tin liên hệ</h3>
              <p className="flex items-center justify-center text-gray-700 space-x-3">
                <i className="fa fa-map-marker"></i>
                <span>20 Mỹ Giang 2A, khu biệt thự Phú Mỹ Hưng, quận 7, Tp.HCM</span>
              </p>
              <p className="flex items-center justify-center text-gray-700 space-x-3">
                <i className="fa fa-envelope"></i>
                <span>info@agua.com</span>
              </p>
              <p className="flex items-center justify-center text-gray-700 space-x-3">
                <i className="fa fa-phone"></i>
                <span>+84 123 456 789</span>
              </p>
              <p className="flex items-center justify-center text-gray-700 space-x-3">
                <i className="fa fa-clock-o"></i>
                <span>Thứ 2 - Thứ 6: 8:00 - 17:00</span>
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fa fa-facebook fa-lg"></i></a>
                <a href="#" className="text-blue-400 hover:text-blue-600"><i className="fa fa-twitter fa-lg"></i></a>
                <a href="#" className="text-pink-500 hover:text-pink-700"><i className="fa fa-instagram fa-lg"></i></a>
              </div>
            </div>

            
          </div>

<section className="contact-map my-12">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
      Vị trí Agua International Education
    </h2>
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        title="Agua Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.132407374581!2d106.7151061152603!3d10.742615092343622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f28a1cde6a5%3A0x3b3b0e1234567890!2s20%20M%C4%83y%20Giang%202A%2C%20Ph%C3%BA%20M%E1%BB%B9%20H%C6%B0ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM!5e0!3m2!1sen!2s!4v1695000000000!5m2!1sen!2s"
        width="100%"
        height="100%"
        className="border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#222] text-gray-400 py-5 text-center">
        <div className="container mx-auto px-5">
          <p>© {new Date().getFullYear()} Agua International Education. Bảo lưu mọi quyền.</p>
          <p className="mt-2 space-x-3">
            <Link to="/about" className="text-sky-400 hover:underline">Giới thiệu</Link>
            <Link to="/services" className="text-sky-400 hover:underline">Dịch vụ</Link>
            <Link to="/contact" className="text-sky-400 hover:underline">Liên hệ</Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
