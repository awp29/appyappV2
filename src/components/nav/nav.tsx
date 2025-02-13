import React from "react";
import clsx from "clsx";
import AppTitle from "./appTitle";
import Link from "./link";

interface NavProps {
  children: React.ReactNode;
  className?: string;
}

interface NavComponent extends React.FC<NavProps> {
  AppTitle: typeof AppTitle;
  Link: typeof Link;
}

const Nav: NavComponent = (props) => {
  const { children, className } = props;

  return (
    <div className={clsx("w-64")}>
      <nav
        className={clsx(
          "fixed w-64 h-screen bg-default-100 border-r border-default-200 p-3",
          className
        )}
      >
        {children}
      </nav>
    </div>
  );
};

Nav.AppTitle = AppTitle;
Nav.Link = Link;

export default Nav;
