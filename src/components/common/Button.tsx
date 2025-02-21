"use client";
import React, { FC } from "react";

interface Props {
  text: string;
  color?: string;
  outline?: boolean;
  className?: string;
}

const Button: FC<Props> = ({
  text,
  color = "bg-primary",
  outline = false,
  className,
}) => {
  return (
    <button
      className={`w-full py-3 text-lg font-semibold transition-all duration-300 
        ${className}
        ${
          outline
            ? "border-2 border-black bg-white text-black hover:bg-gray-100"
            : `${color} text-white hover:opacity-80`
        }`}
    >
      {text}
    </button>
  );
};

export default Button;
