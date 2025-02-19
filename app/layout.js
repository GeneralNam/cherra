import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}