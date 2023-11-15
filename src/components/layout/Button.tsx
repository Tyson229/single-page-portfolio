import { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return <div className="border-b-2 border-green pb-3 w-fit hover:text-green">{children}</div>;
};

export default Button;
