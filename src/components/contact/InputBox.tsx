import { ReactNode } from "react";

const InputBox = ({ children }: { children: ReactNode }) => {
  return <div className="grid gap-2">{children}</div>;
};

export default InputBox;
