import { useState } from "react";
import IconButton from "../Ui/IconButton";
import leftArrow from "../../assets/icons/arrow-left.svg";
import QrDialog from "../QrDialog/QrDialog";
import { MIN_DESKTOP_WIDTH } from "../../constants/constants";
import { openAppStore } from "../../utils/openAppStore";

import checkup from "../../assets/mobile-imgs/checkup.png";
import phoneNotification from "../../assets/mobile-imgs/phone-notification.png";
import trolly from "../../assets/mobile-imgs/trolly.png";

type Props = {};

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center">{children}</div>
  );
}

export default function FourthScreen({}: Props) {
  return (
    <div className="bg-[#3E3E3E] text-white font-Digibank-Regular flex flex-col items-center text-center pb-[40px] pt-[29px] gap-[30px] ">
      <h2 className="text-[1.5rem] leading-7">
        לקוחות מסלולי הבנקאות
        <br />
        הפרטית One+ / One
        <br />
        נהנים משירות ניהול החשבון
      </h2>
      <Card>
        <img className=" w-[285px] " src={checkup} />
        <header className="font-Digibank-Medium text-[1.25rem] mt-[20px]">
          צ׳ק אפ פיננסי מלא
        </header>
        <p className="leading-tight  ">
          באמצעות מערכת AI החכמה שפיתחנו - ׳אלה׳
          <br />
          הבנקאית הפרטית הדיגיטלית שלך תסרוק
          <br />
          את חשבונך מדי יום כדי לוודא שהכל בסדר. אם משהו
          <br />
          לא תקין, ׳אלה׳ תטפל בזה בשבילך.
        </p>
      </Card>
      <Card>
        <img className="me-[20px] w-[303px]" src={phoneNotification} />
        <header className="font-Digibank-Medium text-[1.25rem] mt-[20px]">
          מנהלי כספים שעובדים בשבילך
        </header>
        <p className="leading-tight  ">
          הצוות ילווה ויסייע בניהול החשבון והנכסים
          <br />
          שלך, כדי להבטיח את הצמיחה הפיננסית שלך.
        </p>
      </Card>
      <Card>
        <img className="ms-[20px] w-[303px]" src={trolly} />
        <header className="font-Digibank-Medium text-[1.25rem] mt-[20px]">
          טסים לחו״ל?
        </header>
        <p className="leading-tight  ">
          כדי ליהנות מ-0% עמלת המרת מט״ח,
          <br />
          לא לשכוח לקחת את הכרטיס של ONE ZERO.
          <br />
          לאחר הנסיעה, אנחנו נרכז בשבילך את
          <br />
          ההוצאות ונכין לך סיכום מפורט, כולל
          <br />
          החיסכון שהשגת בזכות השימוש בכרטיס
          <br />
          של ONE ZERO.
        </p>
      </Card>
    </div>
  );
}
