import React from "react";
import cupOfCouple from "../../assets/mobile-imgs/cup-of-couple.png";
import chatWithRep from "../../assets/mobile-imgs/chat-with-rep.png";
import oneZeroNotification from "../../assets/mobile-imgs/onezero-notification.png";
import phoneGraph from "../../assets/mobile-imgs/phone-graph.png";

import cupOfCoupleDesk from "../../assets/cup-of-couple.png";
import chatWithRepDesk from "../../assets/chat-with-rep.png";
import oneZeroNotificationDesk from "../../assets/onezero-notification.png";
import phoneGraphDesk from "../../assets/phone-graph.png";
type Props = {};

const cardContainer = "flex flex-col items-center gap-4 md:gap-[11.75rem]";
const cardHeader =
  "font-Digibank-Medium text-2xl leading-[1.14]  mb-2  md:leading-[2.875rem] md:text-right md:text-[2.5rem] md:mb-8  ";
const cardParagraph =
  "opacity-70 text-center leading-[19.2px] mb-6 md:leading-[31.2px]   md:text-[26px] md:text-right";
const reversedRow = "md:flex-row-reverse";
const row = "md:flex-row";
const desktopImage = "hidden md:flex h-[368px] w-[402px] object-contain ";
const mobileImage = "md:hidden ";
export default function ThirdScreen({}: Props) {
  return (
    <div className=" font-Digibank-Regular text-center px-5 py-14 md:py-[95px] flex flex-col gap-11 md:gap-[4.375rem] md:items-center bg-grey  ">
      <div className={`${cardContainer} ${reversedRow} `}>
        <div className="">
          <h2 className={`${cardHeader} md:w-[467.84px] `}>זמינים כשנוח לך - שירות 24/6</h2>
          <p className={cardParagraph}>
            מענה אנושי של בנקאים מקצועיים זמינים
            <br />
            מתי ואיך שנוח לך - בצ׳אט או בטלפון עם
            <br />
            מענה מהיר לכל בקשה
          </p>
        </div>
        {/* <div className="md:hidden">
          <h2 className={`${cardHeader} md:w-[467.84px] `}>זמינים כשנוח לך - שירות 24/6</h2>
          <p className={cardParagraph}>
            מענה אנושי של בנקאים מקצועיים כאן בשבילך
            <br />
            בצ׳אט או בטלפון בכל שעה לכל שאלה, בעיה
            <br />
            או התייעצות
          </p>
        </div> */}
        <img className={mobileImage} src={cupOfCouple} alt="ספל קפה" />
        <img
          className={`${desktopImage} `}
          src={cupOfCoupleDesk}
          alt="ספל קפה"
        />
      </div>
      <div className={`${cardContainer} ${row}`}>
        <div>
          <h2 className={`${cardHeader} md:w-[427.84px] `}>מנהלי כספים אישיים</h2>
          <p className={cardParagraph}>
            מנהלים עבורך את החשבון ומטפלים בכל מה
            <br className="hidden  md:block"/>{" "}
            שקשור
            <br className="md:hidden"/>{" "}
            לכסף שלך, בשבילך.
          </p>
        </div>
        <img className={mobileImage} src={chatWithRep} alt="שיחה עם נציג" />
        <img
          className={desktopImage}
          src={chatWithRepDesk}
          alt="שיחה עם נציג"
        />
      </div>
      <div className={`${cardContainer} ${reversedRow}`}>
        <div>
          <h2 className={`${cardHeader} md:w-[467.84px] `}>אין לך זמן להיות ׳על זה׳?</h2>
          <p className={cardParagraph}>
            מערכת מבוססת AI סורקת את חשבונך מדי
            <br className="hidden  md:block"/>{" "}
            יום -
            <br className="md:hidden"/>{" "}
            מזהה חיובים כפולים בכרטיס האשראי,
            <br className="hidden  md:block"/>{" "}
            בודקת אם
            <br className="md:hidden"/>{" "}
            קיים סכום כסף פנוי לחיסכון,
            <br className="hidden  md:block"/>{" "}
            מתריעה כשהחשבון
            <br className="md:hidden"/>{" "}
            עלול להיכנס לחריגה
            <br className="hidden  md:block"/>{" "}
            ועוד
          </p>
        </div>
        <img
          className={mobileImage}
          src={oneZeroNotification}
          alt="התראה מ onezero"
        />
        <img
          className={desktopImage}
          src={oneZeroNotificationDesk}
          alt="התראה מ onezero"
        />
      </div>
      <div className={`${cardContainer} ${row}`}>
        <div>
          <h2 className={`${cardHeader} md:w-[427.84px] `}>
            חשבון הבנק וההשקעות
            <br />
            במקום אחד
          </h2>
          <p className={cardParagraph}>
            מסחר בניירות ערך בתעריף המשתלם ביותר
            <br />
            ישירות מהחשבון ללא דמי ניהול/ אחזקה/ 
            <br />
            משמרת וללא עמלת המרת מט״ח
          </p>
        </div>
        <img
          className={`${mobileImage} object-cover`}
          src={phoneGraph}
          alt="שיחה עם נציג"
        />
        <img className={desktopImage} src={phoneGraphDesk} alt="שיחה עם נציג" />
      </div>
    </div>
  );
}
