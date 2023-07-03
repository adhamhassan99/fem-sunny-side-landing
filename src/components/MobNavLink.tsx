import { MouseEventHandler } from "react";

type Props = {
  title: string;
  active?: boolean;
  onPress: MouseEventHandler<HTMLDivElement>;
};

const MobNavLink = ({ title, active, onPress }: Props) => {
  return (
    <div
      onClick={onPress}
      className={`${
        active ? "bg-Yellow font-bold" : "text-VeryDarkGrayishBlue font-medium"
      } px-4 py-2 rounded-2xl text-xs `}
    >
      <span>{title}</span>
    </div>
  );
};

export default MobNavLink;
