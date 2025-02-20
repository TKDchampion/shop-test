"use client";
import { FC } from "react";
import HeaderSwiper from "./HeaderSwiper";
import HeaderNav from "./HeaderNav";

const Header: FC = () => {
  return (
    <main className="w-full">
      <HeaderSwiper />
      <HeaderNav />
    </main>
  );
};

export default Header;
