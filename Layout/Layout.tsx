import { NextComponentType, NextPageContext } from "next";
import React from "react";
import Sidebar from "./components/Sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="overflow-y-auto">{children}</div>
    </div>
  );
};

export default Layout;
