import "./styles/globals.css";
import ClientWrapper from "./components/ClientWrapper";

export const metadata = {
  title: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-navy">
        <ClientWrapper/>
        {children}
      </body>
    </html>
  );
}
