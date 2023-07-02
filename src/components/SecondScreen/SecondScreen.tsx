import phone from "../../assets/mobile-imgs/onezero-phone.png";
import pen from "../../assets/mobile-imgs/onezero-pen.png";
import card from "../../assets/mobile-imgs/onezero-card.png";
import HorizontalInfoCard from "./HorizontalInfoCard";
type Props = {};

const infoCardHeader =
  "leading-none font-Digibank-Medium text-xl mb-1 pr-2 -2xl 3xl:text-3xl";
const infoCardText =
  "font-Digibank-Regular text-black opacity-70 text-base leading-snug pr-2 ";
const link = "font-Digibank-Regular text-link text-[16px]  leading-tight pr-2";
export default function SecondScreen({}: Props) {
  return (
    <div className=" bg-white text-black px-5 pt-[34px] pb-10 flex flex-col gap-12 ">
      <HorizontalInfoCard src={card}>
        <h3 className={infoCardHeader}>הכרטיס שלך בדרך</h3>
        <p className={infoCardText}>
          בימים הקרובים חברת השליחויות
          <br />
          תיצור איתך קשר לצורך תיאום
          <br />
          מסירת הכרטיס. כל המידע לגבי
          <br />
          ההטבות בכרטיס
        </p>
        <a className={link} href="" target="_blank">
          ממש כאן
        </a>
      </HorizontalInfoCard>
      <HorizontalInfoCard src={phone}>
        <h3 className={infoCardHeader}>אישור ניהול חשבון</h3>
        <p className={infoCardText}>
          עם פתיחת החשבון הנפקנו עבורך
          <br />
          מסמך אישור ניהול החשבון, שיוכל
          <br />
          לשמש אותך לכל עניין. המסמך ממתין לך בתיבת ״מסמכים והודעות״, בעמוד
          <br />
          הפרופיל האישי באפליקציה
        </p>
        <a className={link} href="" target="_blank">
          ממש כאן
        </a>
      </HorizontalInfoCard>
      <HorizontalInfoCard src={pen}>
        <h3 className={infoCardHeader}>פנקס צ׳קים</h3>
        <p className={infoCardText}>
          אם ברצונך להזמין פנקס או לבצע
          <br />
          פעולות נוספות, יש להיכנס ללשונית
          <br />
          ״צ׳קים״ בעמוד ״החשבון שלי״, במסך
          <br />
          הראשי באפליקציה
        </p>
      </HorizontalInfoCard>
    </div>
  );
}
