import "./App.css";
import InroImg from "../challengeAssets/images/desktop/image-header.jpg";
import React, { useState } from "react";
import { ReactComponent as Burger } from "../challengeAssets/images/icon-hamburger.svg";
import BugerMenu from "./components/BugerMenu";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="h-full bg-slate-500">
      <div className="flex flex-col">
        <div className="relative" id="firstSection">
          {/* mobile nav */}
          <div className="bg-IntroBlue z-20 items-center relative flex justify-between px-4 pt-3">
            <div className="font-bold text-White">sunnyside</div>
            <div onClick={() => setMenuOpen(!menuOpen)} className="">
              <Burger />
            </div>
            <BugerMenu open={menuOpen} />
          </div>
          <img
            className="absolute scale-[1.85] sm:scale-125   md:scale-100"
            src={InroImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
