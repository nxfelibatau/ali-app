import Header from "../components/Header";

export default function Layout({ children }) {
  const headerData = {
    logoAlt: "لوگوی AG",
    navLinks: [
      { href: "/fa", label: "صفحه اصلی", active: true },
      { href: "/fa/courses", label: "دوره‌ها" },
      { href: "/fa/projects", label: "پروژه‌ها" },
    ],
  };

  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header {...headerData} />
        {children}
      </body>
    </html>
  );
}
