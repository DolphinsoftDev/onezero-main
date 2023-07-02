import React from "react";
import desktop from "../../assets/desktop.png";
export default function Desktop() {
  return (
    <div className="flex w-[100dvw] h-[100dvh]">
      <div className="font-Digibank-Regular flex flex-col justify-center items-center text-white  bg-[#2D68F3] w-[50%]">
        <div>
          <h2 className="text-[3.6045rem] leading-none">
            ברוכים הבאים
            <br />
            לבנק ONE ZERO
          </h2>
          <p className="text-[2.403rem] leading-10 mt-[20px]">
            אנחנו שמחים שפתחת אצלנו
            <br />
            חשבון ומחכים להתחיל להעניק
            <br />
            לך שירות יוצא דופן.
          </p>
          <p className="text-[2.403rem] leading-10 mt-[92px]">
            העמוד המבוקש זמין לצפייה
            <br />
            ממכשיר הסלולר שלך.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#3E3E3E] w-[50%]  ">
        <img className="w-[80%]" src={desktop} alt="" />
      </div>
    </div>
  );
}
