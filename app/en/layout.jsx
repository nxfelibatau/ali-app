import React from "react";
import Header from "../components/Header";
import { Home, Book, Code } from "lucide-react";

const Layout = React.memo(({ children }) => {
  const headerData = React.useMemo(() => ({
    logoAlt: "AG Logo",
    navLinks: [
      { href: "/en", label: "Home", icon: <Home size={24} /> },
      { href: "/en/courses", label: "Courses", icon: <Book size={24} /> },
      { href: "/en/projects", label: "Projects", icon: <Code size={24} /> },
    ],
  }), []);

  return (
    <html lang="en">
      <body>
        <Header {...headerData} />
        {children}
      </body>
    </html>
  );
});

export default Layout;
