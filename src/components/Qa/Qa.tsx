import React from "react";
import Accordion from "./Accordion";

type Props = {};

export default function Qa({}: Props) {
  return (
    <div className="flex flex-col px-5 py-4 md:px-[4.5rem] md:mt-[4.75rem] md:pt-0">
      <h2 className="font-Digibank-Medium text-2xl md:font-Digibank-Regular md:text-[2.5rem] md:mb-[2.75rem]">
        שאלות תשובות
      </h2>
      <Accordion
        details={
          <>
            <p className="md:hidden">
              מדובר במסלול בסיסי שמציע שירות בנקאות
              <br />
              דיגיטלית עם זמינות 24/6 ללא עמלות עו"ש (ובכלל זה
              <br />
              ללא עמלות מוזרות כמו עמלת הקצאת אשראי או
              <br />
              עמלת פתיחת תיק הלוואה) ופטור מדמי כרטיס ויתר
              <br />
              העמלות בהתאם לשימוש ובכפוף לתעריפון הוגן.
              <br />
              מסלול ZERO יתווסף בינואר 2023 ובינתיים כאמור כל המצטרפים יהנו
              ממסלול ONE ללא עלות.
            </p>
            <p className="hidden md:block">
              מדובר במסלול בסיסי שמציע שירות בנקאות דיגיטלית עם זמינות 24/6 ללא
              עמלות עו"ש (ובכלל זה ללא עמלות
              <br />
              מוזרות כמו עמלת הקצאת אשראי או עמלת פתיחת תיק הלוואה) ופטור מדמי
              כרטיס ויתר העמלות בהתאם לשימוש
              <br />
              ובכפוף לתעריפון הוגן. מסלול ZERO יתווסף בינואר 2023 ובינתיים כאמור
              כל המצטרפים יהנו ממסלול ONE ללא עלות.
            </p>
          </>
        }
        summary={"איך פותחים חשבון ב-ONE ZERO? "}
      />
      <Accordion
        details={
          <>
            <p className="md:hidden">
              מדובר במסלול בסיסי שמציע שירות בנקאות
              <br />
              דיגיטלית עם זמינות 24/6 ללא עמלות עו"ש (ובכלל זה
              <br />
              ללא עמלות מוזרות כמו עמלת הקצאת אשראי או
              <br />
              עמלת פתיחת תיק הלוואה) ופטור מדמי כרטיס ויתר
              <br />
              העמלות בהתאם לשימוש ובכפוף לתעריפון הוגן. מסלול ZERO יתווסף בינואר
              2023 ובינתיים כאמור כל המצטרפים יהנו ממסלול ONE ללא עלות.
            </p>
            <p className="hidden md:block">
              מדובר במסלול בסיסי שמציע שירות בנקאות דיגיטלית עם זמינות 24/6 ללא
              עמלות עו"ש (ובכלל זה ללא עמלות
              <br />
              מוזרות כמו עמלת הקצאת אשראי או עמלת פתיחת תיק הלוואה) ופטור מדמי
              כרטיס ויתר העמלות בהתאם לשימוש
              <br />
              ובכפוף לתעריפון הוגן. מסלול ZERO יתווסף בינואר 2023 ובינתיים כאמור
              כל המצטרפים יהנו ממסלול ONE ללא עלות.
            </p>
          </>
        }
        summary={"מה כולל מסלול ZERO?"}
      />

      <Accordion
        details={
          <>
            <p className="md:hidden">
              שתי סיבות:
              <br />
              כדי ליישר אינטרסים ביניכם לבין מנהל הכספים שלכם – תשלום קבוע משמעו
              שאנחנו לא מרוויחים מכל עצה או פעולה.
              <br />
              כדי שתדעו, אולי בפעם הראשונה, כמה בדיוק עולה הבנק כל חודש. בלי
              הפתעות, בלי אותיות קטנות ועמלות נסתרות.
            </p>
            <p className="hidden md:block">
              שתי סיבות:
              <br />
              כדי ליישר אינטרסים ביניכם לבין מנהל הכספים שלכם – תשלום קבוע משמעו
              שאנחנו לא מרוויחים מכל עצה או פעולה.
              <br />
              כדי שתדעו, אולי בפעם הראשונה, כמה בדיוק עולה הבנק כל חודש. בלי
              הפתעות, בלי אותיות קטנות ועמלות נסתרות.
            </p>
          </>
        }
        summary={"למה בחרתם במודל דמי מסלול ולא בתשלום לפי פעולה?"}
      />

      <Accordion
        details={
          <>
            <p className="md:hidden">
              תשלום דמי מנוי חודשי אחד קבוע ושקוף מחליף
              <br />
              מאות עמלות הנמצאות היום בתעריפוני הבנקים
              <br />
              ובכלל זה עמלות המרת מט"ח בכרטיס, עמלות
              <br />
              רכישות מט"ח והעברות מט"ח בחשבון, עמלת ערבות
              <br />
              בנקאית, עמלת שינוי או פירעון מוקדם של הלוואה,
              <br />
              עמלת דמי ניהול חשבון ני"ע, עמלת צ׳ק בנקאי ועוד,
              <br />
              הכל כמפורט בתעריפון הבנק ובכפוף למגבלות שימוש
              <br />
              סביר שהלקוח הסביר לא יגיע אליהן. למשל, עמלת המרת המט"ח בכל בנק אחר
              על שתי חופשות
              <br />
              משפחתיות בחו"ל בעלות של כ-30 אלף שקל מגיעה
              <br />
              לעד שנה וחצי דמי מנוי (כ-900 שקלים).
            </p>
            <p className="hidden md:block">
              תשלום דמי מנוי חודשי אחד קבוע ושקוף מחליף מאות עמלות הנמצאות היום
              בתעריפוני הבנקים ובכלל זה עמלות
              <br />
              המרת מט"ח בכרטיס, עמלות רכישות מט"ח והעברות מט"ח בחשבון, עמלת
              ערבות בנקאית, עמלת שינוי או פירעון
              <br />
              מוקדם של הלוואה, עמלת דמי ניהול חשבון ני"ע, עמלת צ׳ק בנקאי ועוד,
              הכל כמפורט בתעריפון הבנק ובכפוף
              <br />
              למגבלות שימוש סביר שהלקוח הסביר לא יגיע אליהן. למשל, עמלת המרת
              המט"ח בכל בנק אחר על שתי חופשות
              <br />
              משפחתיות בחו"ל בעלות של כ-30 אלף שקל מגיעה לעד שנה וחצי דמי מנוי
              (כ-900 שקלים).
            </p>
          </>
        }
        summary={"אילו עמלות נכללות בדמי המנוי?"}
      />
      <Accordion
        details={
          <>
            <p className="md:hidden">
              בקלות. לאחר פתיחת החשבון, יוצרים איתנו קשר,
              <br />
              וצוות הניוד שלנו ישמח לסייע בהעברת פעילות,
              <br />
              מוצרים ושירותים מכל בנק אחר אלינו – בראש שקט ובמינימום מאמץ.
            </p>
            <p className="hidden md:block">
              בקלות. לאחר פתיחת החשבון, יוצרים איתנו קשר, וצוות הניוד שלנו ישמח
              לסייע בהעברת פעילות, מוצרים ושירותים
              <br />
              מכל בנק אחר אלינו – בראש שקט ובמינימום מאמץ.
            </p>
          </>
        }
        summary={"אתם בנק חדש, למה שאסמוך עליכם?"}
      />
      <Accordion
        details={
          <>
            <p className="md:hidden">
              אבל אין צורך לחכות – אתם יכולים להוריד כבר עכשיו
              <br />
              את האפליקציה ולפתוח חשבון בכמה דקות.
              <br />
              הכל מהנייד, בלי צורך בנציג.
            </p>
            <p className="hidden md:block">
              בקלות. לאחר פתיחת החשבון, יוצרים איתנו קשר, וצוות הניוד שלנו ישמח
              לסייע בהעברת פעילות, מוצרים ושירותים
              <br />
              מכל בנק אחר אלינו – בראש שקט ובמינימום מאמץ.
            </p>
          </>
        }
        summary={"איך מניידים אליכם פעילות?"}
      />

      <Accordion
        details={
          <>
            <p className="md:hidden">
              פרופ' אמנון שעשוע הוא ממייסדי הבנק, ובעל
              <br />
              השליטה בבנק. פרופ' שעשוע, מייסד ומנכ״ל חברת
              <br />
              מובילאיי, הוא ממובילי חזון הבינה המלאכותית בארץ
              <br />
              ובעולם, ושותף מוביל בבניית האסטרטגיה העסקית
              <br />
              והטכנולוגית של הבנק, במטרה להביא את מהפכת
              <br />
              האוטומציה וה- AI לעולם הבנקאות ולספק שרותי בנקאות פרטית איכותית
              לקהלים רחבים, ולא רק
              <br />
              לבעלי ממון.
            </p>
            <p className="hidden md:block">
              פרופ' אמנון שעשוע הוא ממייסדי הבנק, ובעל השליטה בבנק. פרופ' שעשוע,
              מייסד ומנכ״ל חברת מובילאיי, הוא
              <br />
              ממובילי חזון הבינה המלאכותית בארץ ובעולם, ושותף מוביל בבניית
              האסטרטגיה העסקית והטכנולוגית של הבנק,
              <br />
              במטרה להביא את מהפכת האוטומציה וה- AI לעולם הבנקאות ולספק שרותי
              בנקאות פרטית איכותית לקהלים
              <br />
              רחבים, ולא רק לבעלי ממון.
            </p>
          </>
        }
        summary={"מי עומד מאחורי הבנק?"}
      />
      <Accordion
        details={
          <>
            <p className="md:hidden">
              הבנק הוא באפליקציה הדורשת טלפון חכם, אין לנו
              <br />
              כרגע אתר אינטרנט. כרגע מתאים רק לתושבי ישראל,
              <br />
              ללא תושבות מס זרה (צפוי להיפתר לקראת סוף השנה) ומעבר לזה, אנחנו לא
              מתאימים לכל אחד, באנו
              <br />
              לתת פתרון חכם לאנשים שאין להם זמן, רצון או הידע
              <br />
              המתאים לנהל לעצמם את הכסף – שירות בנקאות
              <br />
              פרטית דיגיטלית. אתם כאלה? נראה שיש כאן התאמה.
            </p>
            <p className="hidden md:block">
              הבנק הוא באפליקציה הדורשת טלפון חכם, אין לנו כרגע אתר אינטרנט.
              כרגע מתאים רק לתושבי ישראל, ללא
              <br />
              תושבות מס זרה (צפוי להיפתר לקראת סוף השנה) ומעבר לזה, אנחנו לא
              מתאימים לכל אחד, באנו לתת פתרון חכם
              <br />
              לאנשים שאין להם זמן, רצון או הידע המתאים לנהל לעצמם את הכסף –
              שירות בנקאות פרטית דיגיטלית. אתם
              <br />
              כאלה? נראה שיש כאן התאמה.
            </p>
          </>
        }
        summary={"כל אחד יכול להיות לקוח שלכם?"}
      />
      <Accordion
        details={
          <>
            <p className="md:hidden">
              אם מי מהלקוחות שלנו לא יהיה מרוצה מהחוויה, אז
              <br />
              כנראה לא עשינו עבודה מספיק טובה ונדאג להתאמץ
              <br />
              הרבה יותר. בינתיים נסייע לנייד כל לקוח או לקוחה
              <br />
              כאלו חזרה לכל בנק שיבחרו.
            </p>
            <p className="hidden md:block">
              אם מי מהלקוחות שלנו לא יהיה מרוצה מהחוויה, אז כנראה לא עשינו עבודה
              מספיק טובה ונדאג להתאמץ הרבה
              <br />
              יותר. בינתיים נסייע לנייד כל לקוח או לקוחה כאלו חזרה לכל בנק
              שיבחרו.
            </p>
          </>
        }
        summary={"ואם אני לא מרוצה ולא מעוניין גם במסלול אחר?"}
      />
      <Accordion
        details={
          <>
            <p className="md:hidden">
              <b>One</b>
              <br />
              בנקאות פרטית דיגיטלית, ליווי אישי וניהול הכסף שלך במקום אחד, במחיר
              חודשי קבוע של 49 שקלים, שמחליף חיוב של עשרות סוגי עמלות שונות.
              בכפוף לתעריפון הבנק ולמגבלות השימוש הסביר כמפורט בתעריפון.
              <br />
              <br />
              <b>+One</b>
              <br />
              מסלול מותאם ללקוחות פרטיים שפועלים בניירות ערך, כשבנוסף ליתרונות
              של מסלול One כולל גם מסחר בניירות ערך (עד 15 פעולות קניה/מכירה
              בחודש ללא עלות) ושירותי ייעוץ מתקדמים נוספים. בכפוף לתעריפון הבנק
              ולמגבלות השימוש הסביר כמפורט בתעריפון.
              <br />
              <br />
              <b>Zero</b>
              <br />
              הבסיסי שכולל פטור מעמלות עו"ש, פטור מדמי כרטיס וכולל מתן שירות
              24/6, אך אינו כולל את שירות הבנקאות הפרטית הדיגיטלית. בכפוף
              לתעריפון הבנק ולמגבלות השימוש הסביר כמפורט בתעריפון.
            </p>
            <p className="hidden md:block">
              <b>One</b>
              <br />
              בנקאות פרטית דיגיטלית, ליווי אישי וניהול הכסף שלך במקום אחד, במחיר
              חודשי קבוע של 49 שקלים, שמחליף חיוב של עשרות סוגי עמלות שונות.
              בכפוף לתעריפון הבנק ולמגבלות השימוש הסביר כמפורט בתעריפון.
              <br />
              <br />
              <b>+One</b>
              <br />
              מסלול מותאם ללקוחות פרטיים שפועלים בניירות ערך, כשבנוסף ליתרונות
              של מסלול One כולל גם מסחר בניירות ערך (עד 15 פעולות קניה/מכירה
              בחודש ללא עלות) ושירותי ייעוץ מתקדמים נוספים. בכפוף לתעריפון הבנק
              ולמגבלות השימוש הסביר כמפורט בתעריפון.
              <br />
              <br />
              <b>Zero</b>
              <br />
              הבסיסי שכולל פטור מעמלות עו"ש, פטור מדמי כרטיס וכולל מתן שירות
              24/6, אך אינו כולל את שירות הבנקאות הפרטית הדיגיטלית. בכפוף
              לתעריפון הבנק ולמגבלות השימוש הסביר כמפורט בתעריפון.
            </p>
          </>
        }
        summary={"אילו מסלולים יש בבנק? "}
      />
    </div>
  );
}
