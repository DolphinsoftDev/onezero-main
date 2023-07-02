import React from "react";
import humanHoldingPhone from "../../assets/mobile-imgs/human-holding-phone.png";
import humanHoldingPhoneDesk from "../../assets/human-holding-phone.png";

type Props = {};

export default function FormImage({}: Props) {
  return (
    <>
      <img
        className="w-screen h-[21rem] mb-8 md:h-full md:w-1/2 3xl:object-cover md:hidden"
        src={humanHoldingPhone}
        alt="בן אדם מחזיק טלפון"
      />
      <img
        className="w-screen h-[21rem] mb-8 md:h-full md:w-1/2 hidden md:block 3xl:object-cover"
        src={humanHoldingPhoneDesk}
        alt="בן אדם מחזיק טלפון"
      />
    </>
  );
}
