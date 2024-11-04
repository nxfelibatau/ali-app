import "./styles/globals.css";

export const metadata = {
  title: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-navy">
        {children}
      </body>
    </html>
  );
}
