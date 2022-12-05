import { ReactNode } from "react";

const SvgWrapper: React.FC<{children: ReactNode}> = ({  
  children,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    {children}
  </svg>
);

export default SvgWrapper;
