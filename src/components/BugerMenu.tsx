import React, { useState, Dispatch, useEffect } from "react";
import MobNavLink from "./MobNavLink";

type Props = {
  open: boolean;
  menuClose: Dispatch<React.SetStateAction<boolean>>;
};

const links = [
  {
    title: "About",
  },
  {
    title: "Services",
  },
  {
    title: "Projects",
  },
  {
    title: "Contact",
  },
];

const BugerMenu = ({ open, menuClose }: Props) => {
  const [activeLink, setactiveLink] = useState(0);

  useEffect(() => {
    menuClose(false);
  }, [activeLink]);

  return (
    <div
      className={`z-50 transition-opacity ${
        open ? "opacity-100" : "opacity-0"
      }   absolute right-4 top-12 bg-White px-16 py-6`}
    >
      <div className=" space-y-4 flex flex-col items-center">
        {links.map((item, index) => (
          <MobNavLink
            {...item}
            onPress={() => setactiveLink(index)}
            active={index === activeLink}
          />
        ))}
      </div>
    </div>
  );
};

export default BugerMenu;
