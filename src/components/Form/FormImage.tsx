import React from "react";
import humanHoldingPhone from "../../assets/human-holding-phone.png";

type Props = {};

export default function FormImage({}: Props) {
  return (
    <img
      className="hidden md:block w-screen h-64 mb-8 md:h-full md:w-1/2 3xl:object-cover"
      src={humanHoldingPhone}
      alt="בן אדם מחזיק טלפון"
    />
  );
}
