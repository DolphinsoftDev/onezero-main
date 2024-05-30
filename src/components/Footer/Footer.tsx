import React from "react";
import onezeroLogoBlack from "../../assets/onezero-logo-black.svg";
type Props = {};
const termsAndConditionsLink =
  "https://www.onezerobank.com/warehouse/userUploadFiles/Image/%D7%AA%D7%A7%D7%A0%D7%95%D7%9F%20%D7%97%D7%95%D7%93%D7%A9%D7%99%D7%99%D7%9D%20%D7%9E%D7%AA%D7%A0%D7%94%20%D7%91%D7%9E%D7%A1%D7%9C%D7%95%D7%9C%20One%20(1)%5B79%5D.pdf";
export default function Footer({}: Props) {
  return (
    <footer className=" flex flex-col py-4 px-5 items-center  md:justify-between md:px-[4.5rem] ">
      <div className="flex flex-col md:flex-row-reverse md:justify-between  md:w-full ">
        <img
          className="w-[7.5rem] self-end mt-4 mb-4 md:w-40"
          src={onezeroLogoBlack}
          alt="לוגו onezero"
        />
        <p className="md:hidden text-[0.5rem] font-Digibank-Regular text-darkgrey leading-3 opacity-70 my-4 md:text-xs 2xl:text-sm">
        פיקדונות – פיקדון שנתי ריבית משתנה P-1.5% , מתואמת 4.5%, תעריפית 4.5%. בכפוף לתנאי הבנק והפיקדון לתקופה של שנה

        וללא הצמדה. ניתן לשבור את הפיקדון בכל עת ולקבל את הקרן עם 10% מהריבית המקורית של הפיקדון.

        בנקאות פרטית דיגיטלית- בכפוף לתנאי למסלולי One מפורט בתעריפון הבנק.

        0% עמלת המרת מט"ח בכרטיס- ניתן למסלולי One בלבד בכפוף לשימוש סביר כמפורט בתעריפון.

        חודשיים התנסות מתנה במסלול One - בכפוף לתנאי מסלול One {" "}
          <a
            className="underline"
            target="_blank"
            href={termsAndConditionsLink}
          >
            ולתקנון המבצע
          </a><br />
          {/* הטבת מערכת המסחר - ההטבה בגין עמלת קניה/מכירה ל-15 פעולות ב-30 הימים הראשונים לפתיחת חשבון. */}

          {/* <br /> */}
        </p>
        <p className="w-1/2 hidden md:block font-Digibank-Regular text-sm leading-[1.4] text-darkGrey ">
        פיקדונות – פיקדון שנתי ריבית משתנה P-1.5% , מתואמת 4.5%, תעריפית 4.5%. בכפוף לתנאי הבנק והפיקדון לתקופה של שנה
        <br />
        וללא הצמדה. ניתן לשבור את הפיקדון בכל עת ולקבל את הקרן עם 10% מהריבית המקורית של הפיקדון.
        <br />
        בנקאות פרטית דיגיטלית- בכפוף לתנאי למסלולי One מפורט בתעריפון הבנק.
        <br />
        0% עמלת המרת מט"ח בכרטיס- ניתן למסלולי One בלבד בכפוף לשימוש סביר כמפורט בתעריפון.
        <br />
        חודשיים התנסות מתנה במסלול One - בכפוף לתנאי מסלול One
        {/* <br /> */}
        {" "}
          <a
            target="_blank"
            className="underline"
            href={termsAndConditionsLink}
          >
            ולתקנון המבצע
          </a><br />
          {/* הטבת מערכת המסחר - ההטבה בגין עמלת קניה/מכירה ל-15 פעולות ב-30 הימים הראשונים לפתיחת חשבון. */}
          <br />

        </p>
      </div>
      <p className="font-Digibank-Regular text-[0.5rem] text-darkGrey md:text-sm text-start  self-start ">
        {" "}
        בית עובד 5, תל אביב.
      </p>
    </footer>
  );
}
