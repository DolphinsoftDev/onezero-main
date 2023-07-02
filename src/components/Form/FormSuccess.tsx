import Link from "../Ui/Link";
import successIcon from "../../assets/icons/success.svg";
import qrCode from "../../assets/qr-code.png";
type Props = {};

export default function FormSuccess({}: Props) {
  const handleClick = () => {
    window.open(
      "https://onezero.onelink.me/kAPm?af_js_web=true&af_ss_ver=2_2_0&pid=direct&c=not%20set&af_channel=not%20set&af_ad=not%20set&af_adset=not%20set&af_ss_ui=true&af_ss_qr=true",
      "target=_blank"
    );
  };
  return (
    <div className="flex flex-col items-center  text-center gap-8 md:items-start md:text-start">
      <img
        className="w-[35px] h-[35px] md:w-[53px] h-[53px]"
        src={successIcon}
        alt="אייקון הצלחה"
      />
      <h2 className="font-Digibank-Regular text-2xl md:leading-[1.25]  md:text-[2.5rem] 2xl:text-[2.5rem] whitespace-nowrap">
        מצוין! הפנייה שלך נשלחה
        <br />
        וניצור קשר בהקדם.
      </h2>
      <p className="md:hidden font-Digibank-Regular opacity-70 leading-5 text-base md:leading-[1.25] md:text-xl 2xl:text-xl">
        ניתן להוריד את האפליקציה ולפתוח
        <br />
        חשבון תוך כ -10 דק׳
      </p>
      <div className="hidden md:flex flex-col gap-[40px] mt-[60px]">
        <p className="font-Digibank-Regular text-2xl">
          סריקה לפתיחת חשבון תוך כ-10 דק׳
        </p>
        <img className="w-[150px] h-[150px]" src={qrCode} alt="קוד Qr" />
      </div>
      <button
      onClick={handleClick}
        type="button"
        className={`md:hidden flex font-Digibank-Medium self-center text-white bg-blue rounded-3xl py-2 px-6 w-fit text-sm font-medium md:text-base md:self-start }`}
      >
        להורדה
      </button>
    </div>
  );
}
