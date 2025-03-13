import Header from "../components/Header";

export default function Layout({ children }) {
  const headerData = {
    logoAlt: "AG Logo",
    navLinks: [
      { href: "/en", label: "Home", active: true },
      { href: "/en/courses", label: "Courses" },
      { href: "/en/projects", label: "Projects" },
    ],
  };

  return (
    <html lang="en">
      <body>
        <Header {...headerData} />
        {children}
      </body>
    </html>
  );
}
