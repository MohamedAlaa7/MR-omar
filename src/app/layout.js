"use client";
import "./globals.css";
import Navbar from "../components/Footer/Footer";
import Footer from "../components/Navbar/Navbar";

import { useState } from "react";

// export const metadata = {
//   title: "Mr-Omar Roshdy",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedasparent, setLoggedasparent] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <html lang="en">
      <body>
        <Footer />
        {children}
        <Navbar />
        <div className="test"></div>
      </body>
    </html>
  );
}

// isLoggedIn={isLoggedIn}
//           onLogin={handleLogin}
//           onLogout={handleLogout}
//           parentlooged={loggedasparent}
