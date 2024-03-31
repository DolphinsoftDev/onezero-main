import Accordion from "./Accordion";


export default function Qa() {
  return (
    <div className="flex flex-col px-5 py-4 md:px-[4.5rem] md:mt-[4.75rem] md:pt-0">
      <h2 className="font-Digibank-Medium text-2xl md:font-Digibank-Regular md:text-[2.5rem] md:mb-[2.75rem]">
        שאלות תשובות
      </h2>
      <Accordion
        details={
          <p>
            פשוט מאוד, מורידים את אפליקציית ONE ZERO בחנות האפליקציות שבמכשירך,
            עונים על כמה שאלות (לא לשכוח להכין תעודת זהות מראש) ותוך 10 דקות יש
            לך חשבון בנק חדש. אתם גם יכולים להשאיר פרטים באתר ונציג יצור איתכם
            קשר ויסייע לכם בפתיחת החשבון. חשוב להדגיש שפתיחת החשבון והעמדת מסגרת
            אשראי בחשבון כפופים לשיקול דעתו של הבנק. תוך כ-7 ימים יגיע אליך
            באמצעות שליח עד הבית כרטיס אשראי של ONE ZERO וניתן יהיה להתחיל לחוות
            את שירות הבנקאות הפרטית שעובדת בשבילך באופן מלא.
          </p>
        }
        summary={"איך פותחים חשבון ב ONE ZERO?"}
      />
      <Accordion
        details={
          <p>
            מדובר במסלול בסיסי שמציע שירות בנקאות דיגיטלית עם זמינות 24/6 ללא
            עמלות עו"ש (ובכלל זה ללא עמלת הקצאת אשראי או עמלת פתיחת תיק הלוואה)
            ופטור מדמי כרטיס ויתר העמלות בהתאם לשימוש ובכפוף לתעריפון הוגן.
          </p>
        }
        summary={"מה כולל מסלול ZERO?"}
      />

      <Accordion
        details={
          <p>
            שתי סיבות:
            <br />
            כדי ליישר אינטרסים ביניכם לבין מנהל הכספים שלכם – תשלום קבוע משמעו
            שאנחנו לא מרוויחים מכל עצה או פעולה. כדי שתדעו, אולי בפעם הראשונה,
            כמה בדיוק עולה הבנק כל חודש. בלי הפתעות, בלי אותיות קטנות ועמלות
            נסתרות.
          </p>
        }
        summary={"למה בחרתם במודל דמי מנוי ולא בתשלום לפי פעולה?"}
      />

      <Accordion
        details={
          <p>
            תשלום דמי מנוי חודשי אחד קבוע ושקוף מחליף מאות עמלות הנמצאות היום
            בתעריפוני הבנקים ובכלל זה עמלות המרת מט"ח בכרטיס, עמלות רכישות מט"ח
            והעברות מט"ח בחשבון, עמלת ערבות בנקאית, עמלת שינוי או פירעון מוקדם
            של הלוואה, עמלת דמי ניהול חשבון ני"ע, עמלת צ׳ק בנקאי ועוד, הכל
            כמפורט בתעריפון הבנק ובכפוף למגבלות שימוש סביר שהלקוח הסביר לא יגיע
            אליהן. למשל, עמלת המרת המט"ח בכל בנק אחר על שתי חופשות משפחתיות
            בחו"ל בעלות של כ-30 אלף שקל מגיעה לעד שנה וחצי דמי מנוי (כ-900
            שקלים).
          </p>
        }
        summary={"אילו עמלות נכללות בדמי מנוי?"}
      />
      <Accordion
        details={
          <p>
            אנחנו מפוקחים ע״י בנק ישראל כמו כל בנק אחר. הבנק נמצא בשליטת פרופ'
            אמנון שעשוע, ממייסדי מובילאיי ומוביל חזון הרכב האוטונומי, ומגובה
            בשורה של משקיעים בינלאומיים איתנים ומבוססים ובכללם הבנק השלישי
            בגודלו בשוויץ (יוליוס בר), ובנק צרפתי חדשני (My Money Bank).
          </p>
        }
        summary={"אתם בנק חדש, למה שאסמוך עליכם?"}
      />
      <Accordion
        details={
          <p>
            בקלות. לאחר פתיחת החשבון, יוצרים איתנו קשר, וצוות הניוד שלנו ישמח
            לסייע בהעברת פעילות, מוצרים ושירותים מכל בנק אחר אלינו – בראש שקט
            ובמינימום מאמץ.
          </p>
        }
        summary={"איך מניידים אליכם פעילות?"}
      />

      <Accordion
        details={
          <p>
            פרופ' אמנון שעשוע הוא ממייסדי הבנק, ובעל השליטה בבנק. פרופ' שעשוע,
            מייסד ומנכ״ל חברת מובילאיי, הוא ממובילי חזון הבינה המלאכותית בארץ
            ובעולם, ושותף מוביל בבניית האסטרטגיה העסקית והטכנולוגית של הבנק,
            במטרה להביא את מהפכת האוטומציה וה- AI לעולם הבנקאות ולספק שרותי
            בנקאות פרטית איכותית לקהלים רחבים, ולא רק לבעלי ממון.
          </p>
        }
        summary={"מי עומד מאחורי הבנק?"}
      />
      {/* <Accordion
        details={
          <p>
            הבנק הוא באפליקציה הדורשת טלפון חכם, אין לנו כרגע אתר אינטרנט. כרגע
            מתאים רק לתושבי ישראל, ללא תושבות מס זרה (צפוי להיפתר לקראת סוף
            השנה) ומעבר לזה, אנחנו לא מתאימים לכל אחד, באנו לתת פתרון חכם לאנשים
            שאין להם זמן, רצון או הידע המתאים לנהל לעצמם את הכסף – שירות בנקאות
            פרטית דיגיטלית. אתם כאלה? נראה שיש כאן התאמה.
          </p>
        }
        summary={"כל אחד יכול להיות לקוח שלכם?"}
      /> */}
      <Accordion
        details={
          <p>
            אם מי מהלקוחות שלנו לא יהיה מרוצה מהחוויה, אז כנראה לא עשינו עבודה
            מספיק טובה ונדאג להתאמץ הרבה יותר. בינתיים נסייע לנייד כל לקוח או
            לקוחה כאלו חזרה לכל בנק שיבחרו.
          </p>
        }
        summary={"ואם אני לא מרוצה ולא מעוניין גם במסלול אחר?"}
      />
      <Accordion
        details={
          <p>
            <b>One</b>
            <br />
            בנקאות פרטית שעובדת בשבילכם, ליווי אישי וניהול הכסף שלך במקום אחד,
            במחיר חודשי קבוע של 49 שקלים, שמחליף חיוב של עשרות סוגי עמלות שונות.
            בכפוף לתעריפון הבנק ולמגבלות השימוש הסביר כמפורט בתעריפון.
            <br />
            <br />
            <b>+One</b>
            <br />
            מסלול מותאם ללקוחות פרטיים שפועלים בניירות ערך, כשבנוסף ליתרונות של
            מסלול One כולל גם מסחר בניירות ערך (עד 15 פעולות קניה/מכירה בחודש
            ללא עלות) ושירותי ייעוץ מתקדמים נוספים. בכפוף לתעריפון הבנק ולמגבלות
            השימוש הסביר כמפורט בתעריפון.
            <br />
            <br />
            <b>Zero</b>
            <br />
            הבסיסי שכולל פטור מעמלות עו"ש, פטור מדמי כרטיס וכולל מתן שירות 24/6,
            אך אינו כולל את שירות הבנקאות הפרטית הדיגיטלית. בכפוף לתעריפון הבנק
            ולמגבלות השימוש הסביר כמפורט בתעריפון.
          </p>
        }
        summary={"אילו מסלולים יש בבנק?"}
      />
    </div>
  );
}
