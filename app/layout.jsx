import "./styles/globals.css";
import ClientWrapper from "./components/ClientWrapper";

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio showcasing my work and skills",
  keywords: "portfolio, web development, machine learning, AI, projects",
  author: "Your Name", // Customize with your name or business name
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can add meta tags or other head elements here */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <title>{metadata.title}</title>
      </head>
      <body className="bg-navy">
        <ClientWrapper />
        {children}
      </body>
    </html>
  );
}
