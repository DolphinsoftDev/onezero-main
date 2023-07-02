import React from "react";

import service from "../../assets/mobile-imgs/service.png";
import niyod from "../../assets/mobile-imgs/niyod.png";

export default function ThirdScreen() {
  return (
    <div className="font-Digibank-Regular text-center px-5 py-14 flex flex-col gap-11 md:gap-[4.375rem] md:items-center bg-grey  ">
      <div className="text-center flex flex-col">
        <img src={service} alt="שירות 24/6" />
        <h2 className="mt-[1rem]">
          <span className="text-black text-[1.25rem] font-bold font-Digibank-Medium  leading-tight">
            שירות
          </span>
          <span className="font-Digibank-Apparat-Book text-black text-[18px]  leading-none">
            {" "}
            24/6
          </span>
        </h2>
        <p className="leading-normal text-[1.25rem] opacity-70">
          הצוות כאן מסביב לשעון
          <br />
          וישמח לסייע בכל עניין.
        </p>
      </div>
      <div className="text-center flex flex-col">
        <img src={niyod} alt="שירות 24/6" />
        <h2 className="mt-[1rem]">
          <span className="text-black font-bold text-[1.25rem]  uppercase leading-tight">
            ניוד חשבון ל-{" "}
          </span>
          <span className="text-black text-[18px] uppercase leading-none font-Digibank-Apparat-Book">
            ONE ZERO
            <br />
          </span>
        </h2>
        <p className="leading-normal text-[1.25rem] opacity-70">
          מנהלי הכספים ישמחו ללוות
          <br />
          אותך בהעברת פעילות חשבון הבנק
          <br />
          הקודם אלינו באופן מאובטח וללא מאמץ!
        </p>
      </div>
    </div>
  );
}
