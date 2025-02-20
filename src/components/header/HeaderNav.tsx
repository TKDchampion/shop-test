"use client";
import { FC, useEffect, useRef, useState } from "react";
import { NavItem } from "./model";
import { IoPersonOutline } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

const HeaderNav: FC = () => {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const leftNavRef = useRef<HTMLDivElement | null>(null);
  const [shouldWrap, setShouldWrap] = useState(false);

  useEffect(() => {
    let initialNavRight = 0;
    const checkCollision = () => {
      if (!logoRef.current || !leftNavRef.current) return;

      const logoRect = logoRef.current.getBoundingClientRect();
      const leftNavRect = leftNavRef.current.getBoundingClientRect();

      if (!initialNavRight) {
        initialNavRight = leftNavRect.right;
      }

      setShouldWrap(logoRect.left < initialNavRight + 10);
    };

    const observer = new ResizeObserver(() => checkCollision());
    observer.observe(document.body);

    window.addEventListener("resize", checkCollision);
    checkCollision();

    return () => {
      window.removeEventListener("resize", checkCollision);
      observer.disconnect();
    };
  }, []);

  return (
    <main
      className={`min-h-[87px] w-full px-[30px] absolute z-10 text-white ${
        shouldWrap ? "block" : "flex flex-nowrap justify-between items-center"
      } hover:bg-white hover:text-black border-b border-gray-300`}
    >
      <h1
        ref={logoRef}
        className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold h-[80px] leading-[80px]"
      >
        morning
      </h1>
      <nav
        className={`flex items-center order-2 space-x-4 h-8 ${
          shouldWrap ? "justify-between h-[80px]" : "initial"
        }`}
      >
        <div>United States (USD$)</div>
        <div className="flex items-center space-x-4">
          <IoPersonOutline size={20} />
          <RiShoppingBagLine size={20} />
          <CiSearch size={20} />
        </div>
      </nav>
      <nav
        className={`flex space-x-4 transition-all duration-300 ${
          shouldWrap ? "w-full justify-center items-center mt-2" : "order-1"
        }`}
        ref={leftNavRef}
      >
        {NavItem.map((navItem, index) => {
          return (
            <a
              href="#"
              key={index}
              className={`${navItem === "SALE" ? "text-red-500" : "inherit"}`}
            >
              {navItem}
            </a>
          );
        })}
      </nav>
    </main>
  );
};

export default HeaderNav;
