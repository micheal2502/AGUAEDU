import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const plans = [
    {
      name: "Discovery Pathway",
      price: "$20,000 USD",
      services: [
        {
          key: "Định hình bản sắc",
          text: "Hướng dẫn self-reflection chi tiết giúp học sinh nhận diện giá trị cá nhân, đam mê, năng lực và sở thích. Bao gồm các bài tập phản chiếu, phân tích điểm mạnh/yếu, và các buổi mentor tư vấn để phát triển tầm nhìn cá nhân rõ ràng.",
          icon: "fa fa-star",
        },
        {
          key: "Thiết kế lộ trình nghề nghiệp",
          text: "Cung cấp framework toàn diện để thử nghiệm các hướng đi nghề nghiệp. Học sinh xây dựng CV nổi bật, luyện tập phỏng vấn với chuyên gia, nhận feedback định hướng nghề nghiệp và khám phá các cơ hội thực tế dựa trên sở thích và kỹ năng cá nhân.",
          icon: "fa fa-lightbulb-o",
        },
        {
          key: "Thiết kế đời sống cân bằng",
          text: "Hướng dẫn học sinh xây dựng lối sống lành mạnh, quản lý thời gian, giấc ngủ, thể thao, chế độ dinh dưỡng và mindfulness. Tích hợp các workshop về sức khỏe tâm lý, kỹ năng quản lý stress, và phát triển thói quen hiệu quả để duy trì năng suất cao.",
          icon: "fa fa-graduation-cap",
        },
        {
          key: "Mentor 1‑1",
          text: "Các buổi gặp hàng tuần với mentor chuyên sâu, tập trung vào ra quyết định, phát triển sự tự tin và kỹ năng giải quyết vấn đề. Học sinh nhận được guidance cá nhân, đánh giá tiến độ, và kế hoạch phát triển dài hạn phù hợp với mục tiêu học tập và nghề nghiệp.",
          icon: "fa fa-file-text",
        },
      ],
    },
    {
      name: "Launch Pathway",
      price: "$20,000 USD",
      services: [
        {
          key: "Trải nghiệm chính",
          text: "Cùng xây dựng một lộ trình sống động, khơi nguồn cảm hứng cho các dự án đam mê và nhận thức toàn cầu. Học sinh được hướng dẫn khám phá các kỹ năng, sở thích và định hướng bản thân thông qua trải nghiệm đa dạng.",
          icon: "fa fa-star",
        },
        {
          key: "Khám phá đa kỹ năng",
          text: "Trải nghiệm luân phiên các lĩnh vực STEM, nghệ thuật, ngôn ngữ và tác động xã hội để tìm ra thế mạnh tiềm ẩn của mỗi học sinh. Tập trung vào phát triển toàn diện hơn là chỉ thành tích học tập.",
          icon: "fa fa-lightbulb-o",
        },
        {
          key: "Mentor 1-1",
          text: "Gặp gỡ định kỳ cùng người đồng hành gần gũi, giúp học sinh nuôi dưỡng sự tự tin và niềm vui học tập. Mentor hỗ trợ cả về học thuật và kỹ năng mềm để phát triển toàn diện.",
          icon: "fa fa-graduation-cap",
        },
        {
          key: "Hồ sơ phát triển sáng tạo",
          text: "Lưu giữ các sản phẩm (video, blog, dự án thử nghiệm) phản ánh quá trình trưởng thành của học sinh mà không áp lực điểm số. Đây là công cụ để quan sát sự tiến bộ và nhận diện điểm mạnh cá nhân.",
          icon: "fa fa-file-text",
        },
        {
          key: "Đồng hành cùng phụ huynh",
          text: "Các buổi chia sẻ hàng quý để cha mẹ cùng đồng hành và phát triển cùng con, hiểu được quá trình học tập và phát triển kỹ năng của học sinh, từ đó hỗ trợ hiệu quả hơn.",
          icon: "fa fa-users",
        },
      ],
    },
    {
      name: "Momentum Pathway",
      price: "$20,000 USD",
      services: [
        {
          key: "Kế hoạch học thuật chiến lược",
          text: "Tư vấn chọn môn học phù hợp với định hướng nghề nghiệp và trường mục tiêu. Xây dựng chiến lược thi cử, dự án cá nhân và roadmap học tập dài hạn để tối đa hóa điểm mạnh học sinh và đạt kết quả tốt nhất trong các kỳ thi quốc tế.",
          icon: "fa fa-star",
        },
        {
          key: "Không gian ươm mầm giá trị",
          text: "Hướng dẫn học sinh triển khai và dẫn dắt các dự án cộng đồng, nghiên cứu khoa học hoặc khởi nghiệp sáng tạo. Khuyến khích phát triển kỹ năng lãnh đạo, quản lý dự án, tư duy sáng tạo và tác động xã hội thông qua trải nghiệm thực tế.",
          icon: "fa fa-lightbulb-o",
        },
        {
          key: "Xây dựng câu chuyện cá nhân",
          text: "Phát triển thương hiệu cá nhân và hồ sơ ứng tuyển nổi bật cho học sinh. Bao gồm việc định hình câu chuyện, chuẩn bị portfolio, kỹ năng viết luận, và các buổi mock interview để thể hiện toàn diện năng lực, sở thích và tiềm năng của học sinh.",
          icon: "fa fa-graduation-cap",
        },
        {
          key: "Kết nối chuyên gia toàn cầu",
          text: "Tạo cơ hội giao lưu trực tiếp với giáo sư, doanh nhân, cựu sinh viên đạt học bổng quốc tế và các chuyên gia ngành nghề. Các buổi mentor, Q&A và workshop cung cấp insight thực tế, mở rộng tầm nhìn và định hướng phát triển cá nhân của học sinh.",
          icon: "fa fa-file-text",
        },
        {
          key: "Portfolio & Impact Projects",
          text: "Học sinh xây dựng portfolio phong phú phản ánh các dự án, nghiên cứu và thành tựu. Đây là công cụ quan trọng để thể hiện năng lực, sự sáng tạo, tư duy phản biện và khả năng lãnh đạo trong mắt các trường đại học và nhà tuyển dụng.",
          icon: "fa fa-folder-open",
        },
      ],
    },
  ];

  return (
    <>
      <section className="services-page text-center">
        <div className="container mx-auto px-5">
          <div className="section-title mb-12">
            <h1 className="text-4xl font-bold mb-4">Các Lộ Trình Giáo Dục Đặc Trưng của AGUA</h1>
            <p className="text-xl text-gray-600">Chọn gói phù hợp với nhu cầu và mục tiêu của học sinh.</p>
          </div>

          {plans.map((plan) => (
            <div key={plan.name} className="mb-12">
              <div className="service-card text-left p-10">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-xl font-bold mb-6">{plan.price}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {plan.services.map((service, j) => (
                    <div key={`${service.key}-${j}`} className="feature-card p-5 bg-white rounded-xl shadow-md hover:scale-105 transition transform">
                      <i className={`${service.icon} text-3xl text-[#1B2340] mb-3`}></i>
                      <h5 className="text-xl font-semibold mb-2">{service.key}</h5>
                      <p className="text-gray-700 text-base leading-relaxed">{service.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-page text-center">
        <div className="container mx-auto px-5">
          <div className="section-title mb-12">
            <h1 className="text-4xl font-bold mb-4">AGUA Luminary Infinity Membership</h1>
            <p className="text-xl text-gray-600">
              Ba giá trị nền tảng: Niềm vui học tập – Tư duy sáng tạo – Học tập cộng tác được gắn kết xuyên suốt chương trình,
              để mỗi học sinh không chỉ đạt mục tiêu học thuật mà còn tìm thấy niềm vui và sự gắn kết trong hành trình.
            </p>
          </div>

          <div className="service-card text-left p-10">
            <h3 className="text-2xl font-semibold mb-2">Luminary Infinity Membership</h3>
            <p className="text-xl font-bold mb-6">$50,000 USD / Thành viên trọn đời</p>

            <div className="space-y-6">
              <div className="feature-card">
                <i className="fa fa-lightbulb-o text-3xl text-[#1B2340] mb-3"></i>
                <h5 className="text-xl font-semibold mb-2">Triết lý cốt lõi</h5>
                <p className="text-gray-700 text-base leading-relaxed">
                  Ba giá trị nền tảng: Niềm vui học tập – Tư duy sáng tạo – Học tập cộng tác được gắn kết xuyên suốt chương trình.
                </p>
              </div>

              <div className="feature-card">
                <i className="fa fa-star text-3xl text-[#1B2340] mb-3"></i>
                <h5 className="text-xl font-semibold mb-2">Thiết kế trải nghiệm</h5>
                <p className="text-gray-700 text-base leading-relaxed">
                  Niềm vui Học tập: Curiosity Walks, thử thách 21 ngày về thói quen hạnh phúc.<br />
                  Tư duy Sáng tạo: Moon-shot Studio, hackathon 48 giờ.<br />
                  Học hỏi Cộng tác: dự án xuyên biên giới, vòng tròn phản hồi.<br />
                  La bàn Trọn đời: Career Vision Board, Life Check-ins định kỳ.
                </p>
              </div>

              <div className="feature-card">
                <i className="fa fa-graduation-cap text-3xl text-[#1B2340] mb-3"></i>
                <h5 className="text-xl font-semibold mb-2">Hành trình linh hoạt</h5>
                <p className="text-gray-700 text-base leading-relaxed">
                  Khám phá & định hình (1 tháng) – điểm mạnh, sở thích, mục đích học tập.<br />
                  Xây dựng chuyên sâu (6–12 tháng) – mentoring 1-1, dự án sáng tạo & xã hội, lớp học quốc tế.<br />
                  Trình diễn tác động (2 tháng) – hoàn thiện hồ sơ, bài luận, hồ sơ học bổng và demo-day.<br />
                  Đồng hành trọn đời – 2 lần check-in/năm, kết nối mentor & mạng lưới cựu sinh viên suốt đời.
                </p>
              </div>

              <div className="feature-card">
                <i className="fa fa-heart text-3xl text-[#1B2340] mb-3"></i>
                <h5 className="text-xl font-semibold mb-2">Cam kết giá trị</h5>
                <p className="text-gray-700 text-base leading-relaxed">
                  Kết quả rõ ràng: học bổng, IELTS, dự án cá nhân, chỉ số hạnh phúc học tập.<br />
                  Hoàn tiền 50% nếu KPI không đạt.<br />
                  Mentor thuộc top 1% (quy trình tuyển chọn 4 vòng, huấn luyện 40 giờ).<br />
                  95% doanh thu được tái đầu tư vào tài liệu & chuyên gia quốc tế.
                </p>
              </div>

              <div className="feature-card">
                <i className="fa fa-dollar-sign text-3xl text-[#1B2340] mb-3"></i>
                <h5 className="text-xl font-semibold mb-2">Chi phí & quyền lợi</h5>
                <p className="text-gray-700 text-base leading-relaxed">
                  50,000 USD / thành viên trọn đời.<br />
                  Bao gồm:<br />
                  - 100+ giờ mentoring 1-1 cá nhân hóa<br />
                  - 4 lớp học quốc tế mỗi năm<br />
                  - 1 tuần Creative Camp (Việt Nam hoặc Đông Nam Á)<br />
                  - Hỗ trợ hồ sơ, học bổng, visa<br />
                  - Tư vấn & đồng hành suốt đời
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer text-center py-5 bg-[#222] text-gray-400">
        <div className="container mx-auto px-5">
          <p>© {new Date().getFullYear()} Agua International Education. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/about" className="text-sky-400 hover:underline">About</Link> |{" "}
            <Link to="/services" className="text-sky-400 hover:underline">Services</Link> |{" "}
            <Link to="/contact" className="text-sky-400 hover:underline">Contact</Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Services;
