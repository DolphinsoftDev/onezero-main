import React from "react";
import oneZeroLogo from "../../assets/onezero-logo.svg";
import IconParagraph from "./IconParagraph";
import firstScreenIllustration from "../../assets/firstscreen-illustration.png";
import firstScreenIllustrationDesktop from "../../assets/firstscreen-illustration-desktop.png";

type Props = {};
export default function FirstScreen({}: Props) {
  return (
    <div className=" bg-blue w-full h-full flex flex-col gap-3  text-white p-5 px-6 pb-6 md:px-20 md:py-6 md:pb-[74px] md:items-stretch">
      <img
        className="self-end object-contain w-26 h-[1.4rem] mt-2 md:mt-0  md:w-30 md:h-7"
        src={oneZeroLogo}
        alt="לוגו"
      />
      <div className="md:flex text-center md:gap-[9.125rem] md:justify-between font-Digibank-Regular leading-none">
        <h2 className="text-2xl">
          ברוכים הבאים
          <br />
          לבנק <span className="font-Digibank-Apparat-Book">ONE ZERO</span>
        </h2>
        <p className="text-base leading-tight">
          אנחנו שמחים שפתחת אצלנו חשבון ומחכים
          <br />
          להתחיל להעניק לך שירות יוצא דופן.
          <br />
          כדי שהמעבר שלך יהיה חלק וכדי שנתחיל להכיר,
          <br />
          הנה כל הדברים שחשוב לדעת
        </p>
      </div>
      <img className="object-cover mt-5 " src={firstScreenIllustration} alt="" />
    </div>
  );
}
