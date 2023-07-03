import React from "react";

type Props = {
  open: boolean;
};

const BugerMenu = ({ open }: Props) => {
  return open ? (
    <div className="transition-opacity duration-1000">BugerMenu</div>
  ) : null;
};

export default BugerMenu;
