import "./App.css";
import InroImg from "../challengeAssets/images/desktop/image-header.jpg";
import React, { useState } from "react";
import { ReactComponent as Burger } from "../challengeAssets/images/icon-hamburger.svg";
import BugerMenu from "./components/BugerMenu";

import { ReactComponent as ArrowDown } from "../challengeAssets/images/icon-arrow-down.svg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="h-full ">
      <div className="flex flex-col">
        <div
          className="bg-IntroBlue overflow-x-clip relative max-w-full max-h-full"
          id="firstSection"
        >
          {/* mobile nav */}
          <div className="bg-IntroBlue z-20 items-center relative flex justify-between px-4 pt-3">
            <div className="font-bold text-White">sunnyside</div>
            <div onClick={() => setMenuOpen(!menuOpen)} className="">
              <Burger />
            </div>
            <BugerMenu menuClose={() => setMenuOpen(false)} open={menuOpen} />
          </div>
          <br />
          <br />
          <div className="absolute top-20 left-0 right-0 bottom-0  z-10 flex flex-col items-center text-White font-extrabold tracking-[5px] m-auto text-3xl">
            <div className="">WE ARE</div>
            <div className="">CREATIVES</div>
          </div>
          <ArrowDown className="z-50 absolute scale-75 top-40 left-0 right-0 bottom-0 mx-auto" />

          <img
            className="absolute scale-[1.85] sm:scale-125 max-w-full  md:scale-100"
            src={InroImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
