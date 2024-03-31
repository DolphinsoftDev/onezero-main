import React from "react";

type Props = {
  iconPosition?: "start" | "end";
  text?: string;
  icon: React.ReactNode;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function IconButton({
  iconPosition,
  className,
  icon,
  text,
  ...rest
}: Props) {
  const position = iconPosition === "start" ? "flex-row" : "flex-row-reverse";
  const style = `w-fit gap-2 md:gap-[0.278vw]  text-base md:leading-[0vw] font-Digibank-Medium  inline-flex py-2.5 px-5 rounded-[33px] items-center ${position}`;
  return (
    <button className={`${style} ${className}  `} {...rest}>
      {icon}
      {text}
    </button>
  );
}
