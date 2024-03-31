import React from "react";
import MobileImage1 from "../../assets/mobile-imgs/mobile-img-1.png";
import Ball from "../../assets/mobile-imgs/onezero-ball.png";
import Card from "../../assets/mobile-imgs/onezero-card.png";
import cardDesktop from "../../assets/onzero-card.png";
import pikadon from "../../assets/pikadon.png";
import Image1 from "../../assets/image-1.png";
import HorizontalInfoCard from "./HorizontalInfoCard";
import VerticalInfoCard from "./VerticalInfoCard";
type Props = {};

const infoCardHeader =
  "leading-none font-Digibank-Medium text-xl  pr-2 md:pr-[unset] 3xl:text-3xl text-[20px] leading-[24px] md:text-[24px] md:leading-[28.8px] md:pt-[39px]";
const infoCardText =
  "font-Digibank-Regular text-black pt-[7px] md:pt-[unet] opacity-70 text-base leading-none pr-2 md:pr-[unset] md:opacity-100 md:text-darkGrey md:p-none text-[16px] leading-[19.2px] md:text-[19.2px] md:leading-[26.4px]";
const cardImage =
  "w-[289.78px] h-[273px] 3xl:w-96  3xl:h-fit   md:object-contain shadow-[0_0_8px_0_rgba(0,0,0,0.2)] md:rounded-[15px]";
export default function SecondScreen({}: Props) {
  return (
    <div className=" bg-white text-black px-5 pt-2 pb-10 flex flex-col gap-12 md:pt-14 ">
      <h2 className="text-center font-Digibank-Regular mt-[63px] text-2xl leading-[1.10] md:text-4xl	md:hidden">
        בנק שעובד בשבילך, בדיוק כמו שתמיד רצית:
      </h2>
      <h2 className="text-center font-Digibank-Regular leading-[1.10] md:text-4xl	hidden md:block">
        בנק שעובד בשבילך, בדיוק כמו שתמיד רצית:
      </h2>
      <HorizontalInfoCard className="md:hidden" src={Card}>
        <h3 className={infoCardHeader}>0% המרת מט״ח</h3>
        <p className={infoCardText}>
          ברכישות אונליין ובחופשות לחו״ל,
          <br />
          ללא דמי כרטיס
        </p>
      </HorizontalInfoCard>
      {/* <HorizontalInfoCard className="md:hidden" src={MobileImage1}>
        <h3 className={infoCardHeader}>
          מערכת מסחר אטרקטיבית
        </h3>
        <p className={infoCardText}>
          <span>
            עד $600 לפעולות בני״ע עלינו
          </span> <br />
          הטבה בלעדית למצטרפים עד ה1.5.24 <br />
          בכפוף <a className="underline" href="https://www.onezerobank.com/warehouse/userUploadFiles/Image/trading15.pdf" target="_blank">לתקנון המבצע</a>.
        </p>
      </HorizontalInfoCard> */}
      <HorizontalInfoCard className="md:hidden" src={Ball}>
        <h3 className={infoCardHeader}>פיקדון שנתי בשיעור 4.5%</h3>
        <p className={infoCardText}>
          הפיקדון המשתלם בישראל,
          <br />
          מתעדכן בהתאם לשינוי הריבית במשק
        </p>
      </HorizontalInfoCard>
      {/* <HorizontalInfoCard className="md:hidden" src={Card}>
        <h3 className={infoCardHeader}>0% המרת מט״ח</h3>
        <p className={infoCardText}>
          ברכישות אונליין ובחופשות לחו״ל,
          <br />
          ללא דמי כרטיס
        </p>
      </HorizontalInfoCard> */}
      <HorizontalInfoCard className="md:hidden" src={MobileImage1}>
        <h3 className={infoCardHeader}>
          מערכת מסחר אטרקטיבית
        </h3>
        <p className={infoCardText}>
          <span>
            עד $600 לפעולות בני״ע עלינו
          </span> <br />
          הטבה בלעדית למצטרפים עד
          <br />
           ה1.5.24 
          בכפוף <a className="underline" href="https://www.onezerobank.com/warehouse/userUploadFiles/Image/trading15.pdf" target="_blank">לתקנון המבצע</a>.
        </p>
      </HorizontalInfoCard>

      <div className="hidden md:flex md:flex-row justify-evenly">
        <VerticalInfoCard
          children={<>
              <img className={cardImage} src={cardDesktop} alt="" />
              <h3 className={infoCardHeader}>0% המרת מט״ח</h3>
              <p className={infoCardText}>
                ברכישות אונליין ובחופשות לחו״ל,
                <br />
                ללא דמי כרטיס
              </p>
          </>}
        />
        <VerticalInfoCard
          children={<>
              <img className={cardImage} src={pikadon} alt="" />
            <h3 className={infoCardHeader}>פיקדון שנתי בשיעור 4.5%</h3>
            <p className={infoCardText}>
              הפיקדון המשתלם בישראל,
              מתעדכן
              <br />
              
               בהתאם לשינוי
              {" "}
              הריבית במשק
            </p>
          </>}         
        />
        <VerticalInfoCard
          children={<>
            <img className={cardImage} src={Image1} alt="" />
            <h3 className={infoCardHeader}>
              מערכת מסחר אטרקטיבית
            </h3>
            <p className={infoCardText}>
              <span>
                עד $600 לפעולות בני״ע עלינו
              </span> <br />
              הטבה בלעדית למצטרפים עד
              <br />
               ה1.5.24 
              בכפוף <a className="underline" href="https://www.onezerobank.com/warehouse/userUploadFiles/Image/trading15.pdf" target="_blank">לתקנון המבצע</a>.
            </p>
          </>}
        />
      </div>
    </div>
  );
}
