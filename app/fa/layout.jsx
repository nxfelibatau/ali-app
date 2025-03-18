import Header from "../components/Header";
import { Home, Book, Code } from "lucide-react";


export default function Layout({ children }) {
  const headerData = {
    logoAlt: "لوگوی AG",
    navLinks: [
      { href: "/fa", label: "صفحه اصلی", icon: <Home size={24} /> },
      { href: "/fa/courses", label: "دوره ها", icon: <Book size={24} /> },
      { href: "/fa/projects", label: "پروژه ها", icon: <Code size={24} /> },
    ],
  };

  return (
    <html lang="fa">
      <body>
        <Header {...headerData} />
        {children}
      </body>
    </html>
  );
}
