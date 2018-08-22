import React from "react";

import Navbar from "../navbar";
import Footer from "../footer";

function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
