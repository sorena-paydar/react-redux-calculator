import * as React from "react";

function Backspace(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={30}
      height={30}
      fill="none"
      viewBox="0 0 24 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{ position: "absolute", left: 3, top: 3 }}
    >
      <path
        d="M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2v0zM18 9l-6 6M12 9l6 6"
        stroke="#807ff9"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Backspace;
