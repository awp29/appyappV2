import React from "react";
import clsx from "clsx";
import { Logo } from "../icons";

const AppTitle: React.FC = () => {
  return (
    <div className={clsx("flex items-center relative left-[2px]")}>
      <Logo size={44} />
      <span className="text-xl font-semibold">Appy App</span>
    </div>
  );
};

export default AppTitle;
