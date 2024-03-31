import React from "react";
import checked from "../../assets/checked.svg";

type Props = {
  text: string;
};

export default function IconParagraph({ text }: Props) {
  return (
    <p className="flex gap-[unset] align-middle font-Digibank-Regular font-normal md:text-[1.111vw]">
      <img className="w-2.5  md:w-[1.319vw] " src={checked} alt="וי" />
      {text}
    </p>
  );
}
