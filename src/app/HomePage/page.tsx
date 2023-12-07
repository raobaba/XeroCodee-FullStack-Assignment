"use-client"
import React from "react";
import Navbar from "../Navbar/page";
import Suggestion from "../Suggestion/page";
import Footer from "../Footer/page";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Suggestion />
      <Footer />
    </div>
  );
}

export default HomePage;
