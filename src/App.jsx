import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Converter from "./components/Converter";

function App() {
  return (
    <div className="container mx-auto sm:px-1 sm:flex sm:flex-col sm:justify-center sm:h-screen">
      <Header />
      <Converter />
      <Footer />
    </div>
  );
}
export default App;
