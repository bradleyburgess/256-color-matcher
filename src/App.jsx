import React from "react";
import clsx from "clsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Converter from "./components/Converter";

const styles = {
  container: [
    "px-2",
    "sm:px-0",
    "md:h-full",
    "sm:flex",
    "sm:flex-col",
    "sm:items-center",
    // "md:flex",
    // "md:flex-col",
    // "md:items-center",
    // "xl:justify-center",
    "text-gray-800",
  ],
  // app: "max-w-lg",
};

function App() {
  // for window resizing?
  // const [height, setHeight] = useState(0);
  // const updateHeight = () => setHeight(window.innerHeight);
  // useEffect(() => {
  //   // window.addEventListener("resize", updateHeight);
  //   setHeight(window.innerHeight);
  //   console.log(height);
  //   // return () => window.removeEventListener("resize", updateHeight);
  // });

  return (
    <div className={clsx(styles.container)}>
      <div id="app-container" className={clsx(styles.app)}>
        <Header />
        <Converter />
      </div>
      <Footer />
    </div>
  );
}
export default App;
