import React from "react";
import clsx from "clsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Converter from "./components/Converter";

/*  @TODO:
 *  fix footer window resizing issue
 */

const styles = {
  container: "px-2 sm:px-0 flex flex-col items-center",
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
