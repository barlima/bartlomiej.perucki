import React, { PropsWithChildren } from "react";

export const Skill: React.FC<PropsWithChildren<{ index: number }>> = ({
  children,
  index,
}) => {
  return (
    <li className="mb-4 border-b border-solid border-green flex items-center">
      <span className="text-green font-bold mr-2 text-3xl min-w-[50px]">{(index + 1).toString().padStart(2, "0")}.</span>
      <span className="text-l">{children}</span>
    </li>
  );
};
