import React, { ReactNode } from "react";
import Navbar from "./_components/Navbar";

const layoutPublic = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-2 md:px-2 lg:px-7">{children}</main>
    </div>
  );
};

export default layoutPublic;
