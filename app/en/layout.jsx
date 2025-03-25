import React from "react";
import Header from "../components/Header";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

const Layout = React.memo(({ children }) => {
  const headerData = React.useMemo(() => ({
    logoAlt: "AG Logo",
    navLinks: [
      { href: "/en", label: " Home", icon: <IconHome size={24} /> },
      { href: "/en/courses", label: "Courses", icon: <IconUser size={24} /> },
      { href: "/en/projects", label: " Projects", icon: <IconMessage size={24} /> },
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
