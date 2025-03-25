import React from "react";
import Header from "../components/Header";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

const Layout = React.memo(({ children }) => {
  const headerData = React.useMemo(() => ({
    logoAlt: "AG Logo",
    navLinks: [
      { href: "/fa", label: "صفحه اصلی", icon: <IconHome size={24} /> },
      { href: "/fa/courses", label: "دوره ها", icon: <IconUser size={24} /> },
      { href: "/fa/projects", label: "پروژه ها", icon: <IconMessage size={24} /> },
    ],
  }), []);

  return (
    <html lang="fa">
      <body>
        <Header {...headerData} />
        {children}
      </body>
    </html>
  );
});

export default Layout;
