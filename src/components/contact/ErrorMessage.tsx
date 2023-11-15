import { ReactNode } from "react";

const ErrorMessage = ({ children }: { children: ReactNode }) => {
  return <div className="text-end text-red-500">{children}</div>;
};

export default ErrorMessage;
