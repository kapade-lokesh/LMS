import React, { ReactNode } from "react";
import Navbar from "./_components/Navbar";

const layoutPublic = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className=" mx-auto px-4 md:px-8 lg:px-12">{children}</main>
    </div>
  );
};

export default layoutPublic;
