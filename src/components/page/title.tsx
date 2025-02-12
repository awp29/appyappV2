import React from "react";
import { title } from "@/components/primitives";

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1 className={title({ size: "lg" })}>{children}</h1>;
};

export default Title;
