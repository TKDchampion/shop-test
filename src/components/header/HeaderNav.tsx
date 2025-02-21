"use client";
import { FC, useEffect, useRef, useState } from "react";
import { NavItem } from "./model";
import { IoPersonOutline } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import clsx from "clsx";
import { throttleFtn } from "@/utils/throttle";
import { usePathname } from "next/navigation";

const HeaderNav: FC = () => {
  const pathname = usePathname();
  const logoRef = useRef<HTMLDivElement | null>(null);
  const leftNavRef = useRef<HTMLDivElement | null>(null);
  const [shouldWrap, setShouldWrap] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

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

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = throttleFtn(() => {
      const scrollY = window.scrollY;
      setIsFixed(scrollY > 48);

      if (scrollY > lastScrollY + 50) {
        setIsHidden(true);
      } else if (scrollY < lastScrollY - 20) {
        setIsHidden(false);
      }

      lastScrollY = scrollY;
    }, 10);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className={clsx(
        "min-h-[87px] w-full px-[30px] z-50",
        "transition-transform duration-300 ease-in-out",
        "hover:bg-white hover:text-black",
        shouldWrap ? "block" : "flex flex-nowrap justify-between items-center",
        isHidden ? "-translate-y-full" : "translate-y-0",
        isFixed
          ? "fixed top-0 bg-white text-black"
          : pathname === "/"
          ? "absolute text-white bg-transparent border-b border-gray-300"
          : "absolute text-black bg-white"
      )}
    >
      <h1
        ref={logoRef}
        className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold h-[80px] leading-[80px]"
      >
        morning
      </h1>
      <nav
        className={`flex items-center order-2 space-x-4 h-8 w-full sm:w-auto ${
          shouldWrap ? "justify-between h-[80px]" : "justify-between sm:initial"
        }`}
      >
        <div className="hidden sm:block">United States (USD$)</div>
        <div className="block sm:hidden">
          <CiMenuBurger />
        </div>
        <div className="flex items-center space-x-4">
          <IoPersonOutline className="hidden sm:block" size={20} />
          <RiShoppingBagLine size={20} />
          <CiSearch size={20} />
        </div>
      </nav>
      <nav
        className={`flex space-x-4 transition-all duration-300 hidden sm:block ${
          shouldWrap ? "w-full justify-center items-center mt-2" : "order-1"
        }`}
        ref={leftNavRef}
      >
        {NavItem.map((navItem, index) => {
          return (
            <a
              href={navItem.key}
              key={index}
              className={`${
                navItem.name === "SALE" ? "text-red-500" : "inherit"
              }`}
            >
              {navItem.name}
            </a>
          );
        })}
      </nav>
    </main>
  );
};

export default HeaderNav;
