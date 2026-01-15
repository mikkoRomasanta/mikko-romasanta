import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="h-screen w-full grid grid-cols-4 grid-rows-[1fr_auto] gap-2">
        <div className="col-span-1 row-span-2">
          <Navbar />
        </div>
        <div className="col-span-3 row-span-1">
          <Profile />
        </div>
        <div className="col-span-3 row-span-1">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
