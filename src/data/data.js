export const profile = {
  name: "Dương Thanh Hoài",
  role: "Kỹ sư Phần mềm | CNTT",
  tagline:
    "Xây dựng và phát triển các hệ thống phầm mềm và chuyển hóa quy trình nghiệp vụ thành các giải pháp số ổn định, có khả năng mở rộng.",
  location: "Cần Thơ, Việt Nam",
  available: true,
  email: "hoaiduongthanh1504@gmail.com",
  phone: "0779 876 065",
  cvUrl: "/CV.pdf",
  githubUrl: "https://github.com/2howieDuong154",
  socials: [],
};

export const about = {
  paragraphs: [
    "Kỹ sư Phần mềm với hơn 3 năm kinh nghiệm phát triển, tích hợp và bảo trì các hệ thống doanh nghiệp. Thế mạnh chuyên môn gồm Java Spring Boot, .NET, thiết kế cơ sở dữ liệu, tích hợp API và phát triển backend.",
    "Có kinh nghiệm phối hợp với các bên liên quan để phân tích yêu cầu, tối ưu quy trình và chuyển đổi hoạt động vận hành thành các giải pháp số thực tiễn. Đồng thời tham gia triển khai, xây dựng tài liệu và hỗ trợ hệ thống vận hành trong các nhóm Agile liên chức năng.",
  ],
  highlights: [
    { label: "Kinh nghiệm", value: "4+ năm" },
    { label: "Dự án tiêu biểu", value: "5" },
    { label: "Tiếng Anh", value: "B2" },
  ],
};

export const skills = [
  {
    category: "Ngôn ngữ & Backend",
    items: [
      "Java 17/21",
      ".NET",
      "Python",
      "JavaScript",
      "Spring Boot",
      "ASP.NET",
      "Node.js",
    ],
  },
  {
    category: "Kiến trúc & Tích hợp",
    items: [
      "Vi dịch vụ",
      "REST API",
      "gRPC",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
    ],
  },
  {
    category: "Dữ liệu & Frontend",
    items: [
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "Tối ưu SQL",
      "Angular",
      "Vue.js",
      "ReactJS",
    ],
  },
  {
    category: "Một số công nghệ khác đã thực hiện",
    items: [
      "AWS - Các dịch vụ cơ bản",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "JUnit",
      "Mockito",
      "YoloV8",
    ],
  },
  // {
  //   category: "Chuyển đổi số",
  //   items: [
  //     "Phân tích quy trình nghiệp vụ",
  //     "Phân tích yêu cầu",
  //     "Tối ưu quy trình làm việc",
  //     "Triển khai hệ thống",
  //     "Tài liệu kỹ thuật",
  //     "Agile/Scrum",
  //   ],Một vài sản phẩm gần đây
  // },
];

export const siteTechnologies = [
  {
    name: "React",
    category: "Giao diện",
    description:
      "Xây dựng giao diện theo kiến trúc component, giúp mã nguồn rõ ràng và dễ mở rộng.",
    icon: "react",
  },
  {
    name: "Vite",
    category: "Công cụ build",
    description:
      "Cung cấp môi trường phát triển nhanh và tối ưu tài nguyên khi đóng gói production.",
    icon: "vite",
  },
  {
    name: "Tailwind CSS",
    category: "Thiết kế giao diện",
    description:
      "Định hình hệ thống màu sắc, khoảng cách và bố cục responsive nhất quán trên toàn trang.",
    icon: "tailwind",
  },
  {
    name: "Framer Motion",
    category: "Chuyển động",
    description:
      "Tạo hiệu ứng xuất hiện, chuyển cảnh và tương tác mượt mà khi người dùng cuộn trang.",
    icon: "framer",
  },
  {
    name: "JavaScript",
    category: "Ngôn ngữ",
    description:
      "Xử lý dữ liệu, hành vi tương tác và kết nối các thành phần trong ứng dụng.",
    icon: "javascript",
  },
  {
    name: "React Icons",
    category: "Thư viện biểu tượng",
    description:
      "Cung cấp bộ biểu tượng nhẹ, đồng nhất và phù hợp với phong cách trực quan của portfolio.",
    icon: "icons",
  },
];

export const experience = [
  {
    role: "Software Engineer (Full-stack)",
    company: "FPT Software",
    period: "11/2022 — Hiện tại",
    description:
      "Phát triển hệ thống backend và frontend của doanh nghiệp bằng Java Spring Boot, .NET và các công nghệ web. Tham gia phân tích yêu cầu, thiết kế cơ sở dữ liệu, triển khai dịch vụ và hỗ trợ vận hành thực tế.",
    tags: ["Java", "Spring Boot", ".NET", "REST API", "SQL Server", "MySQL", "Angular", "Vue.js"],
  },
  {
    role: "Software Engineer (Intern)",
    company: "AppCore Co., Ltd.",
    period: "2021",
    description:
      "Phát triển các tính năng cho ứng dụng web bằng ReactJS và hỗ trợ hoạt động bảo trì hệ thống.",
    tags: ["ReactJS", "JavaScript", "Phát triển Web"],
  },
];

// Chưa có thông tin học vấn.
export const education = [];

export const certifications = [
  {
    issuer: "Oracle University",
    title: "Bộ chứng chỉ Oracle.",
    description:
      "5 chứng chỉ về Oracle Cloud Infrastructure, trí tuệ nhân tạo và quản trị dữ liệu.",
    image: "/oracle.png",
    imageAlt: "Các chứng chỉ Oracle của Dương Thanh Hoài",
  },
    {
    issuer: "Hackerrank",
    title: "Bộ chứng chỉ Hackerrank",
    description:
      "Get certified in SQL (Advanced)",
    image: "/SQL.png",
    imageAlt: "Các chứng chỉ Hackerrank",
  },
];

export const projects = [
  {
    title: "Hệ thống Quản lý Nhân sự",
    description:
      "Số hóa quy trình nhân sự thủ công thông qua các phân hệ hồ sơ nhân viên, nghỉ phép, phân quyền và báo cáo.",
    tags: ["ASP.NET Core", "EF Core", "Blazor", "SQL Server"],
    image: "/background_image/hr.png",
  },
  {
    title: "Hệ thống Quản lý Cửa hàng",
    description:
      "Xây dựng các tính năng quản lý tồn kho, bán hàng, xử lý đơn hàng và bảng điều khiển để hỗ trợ hoạt động kinh doanh hằng ngày.",
    tags: ["ASP.NET Core", "SQL Server"],
    image: "/background_image/shoe.png",
  },
  {
    title: "Nền tảng Backend cho hệ thống lưu trữ playlist video",
    description:
      "Phát triển các dịch vụ backend và luồng xử lý dữ liệu cho nền tảng video, đồng thời hỗ trợ triển khai và vận hành thực tế.",
    tags: ["Spring Boot", "Spring Batch", "AWS", "Docker", "Kubernetes"],
    image: "/background_image/claudeTV.png",
  },
  {
    title: "Hệ thống Quản lý Xây dựng",
    description:
      "Phát triển và bảo trì hệ thống quản lý vận hành xây dựng.",
    tags: ["Spring Boot", "MySQL", "Angular"],
      image: "/background_image/construct.png",
    },
  {
    title: "Phát triển và Bảo trì Nền tảng Quản lý Bán lẻ mỹ phẩm",
    description:
      "Phát triển các tính năng quản lý tồn kho và giao dịch cho nền tảng vận hành bán lẻ.",
    tags: ["Spring MVC", "PostgreSQL", "Vue.js"],
    image: "/background_image/food.png",
  },
];
