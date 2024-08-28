import React, { ReactElement, ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <div className="w-full h-full fixed z-50 bg-slate-700 bg-opacity-35 flex justify-center items-center top-0 left-0">
      {children}
    </div>
  );
};

export default Modal;
