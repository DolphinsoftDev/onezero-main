import oneZeroLogo from '../../assets/onezero-logo.svg';
import IconButton from '../Ui/IconButton';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import header from '../../assets/w_image header.png';
import { useState } from 'react';
import { MIN_DESKTOP_WIDTH } from '../../constants/constants';
import { openAppStore } from '../../utils/openAppStore';
import QrDialog from '../QrDialog/QrDialog';
import starsLtr from '../../assets/icons/stars-ltr.png';
import starsRtl from '../../assets/icons/stars-rtl.png';
import heroMobile from '../../assets/bg-mobile.png';
import heroDesktop from '../../assets/hero-desktop.png';
import leftArrow from '../../assets/icons/arrow-left.svg';

type Props = {};
export default function FirstScreen({}: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleClick() {
    window.dataLayer.push({
      // redirect to app store
      event: "Click2app",
    });
    if (window.screen.width >= MIN_DESKTOP_WIDTH) {
      setIsDialogOpen(true);
      return;
    }
    openAppStore();
  }
  return (
    <div
      className={`first-section-container w-full h-[178.78vw] md:h-[45.069vw] flex flex-col md:gap-[unset]  text-white  px-6 pb-0 md:px-[5.556vw] md:py-6 md:pb-0 md:items-stretch md:pt-[2.708vw] `}
    >
      <img
        className="md:self-end object-contain w-26 h-[1.4rem] mb-[44.032vw] md:mb-[5.972vw] mt-[11.671vw] md:mt-0  md:w-30 md:h-7"
        src={oneZeroLogo}
        alt="לוגו"
      />
      <div className="max-w-[100vw] mt-[unset]  md:justify-between  md:flex md:flex-col md:mt-0 md:gap-[unset]  2xl:justify-between">
        <div className="flex flex-col w-full items-center text-center  md:gap-[unset] md:text-start">
          <p className="mt-[0px] mb-[2.653vw] tracking-[-0.05em] md:tracking-[-0.02em] md:mb-[unset] text-[25.676vw] leading-[30.812vw] md:text-[16.344vw] md:leading-[19.613vw] font-Apparat-Light">
            100,000
          </p>
          {/* <p className='hidden md:block text-center md:text-[1.806vw] md:leading-[1.914vw] font-Apparat-Book'>
            בנק ONE ZERO חוגג 100,000 לקוחות תוך שנה
            <br />{" "}
            אז למה להישאר בבנק של פעם?

          </p> */}
          <p className=' text-center text-[5.305vw] leading-[6.366vw] md:text-[1.806vw] md:leading-[1.914vw] font-Apparat-Book'>
            בנק ONE ZERO חוגג 100,000 לקוחות 
            <br />{" "}
            אז למה להישאר בבנק של <span className='font-Apparat-Bold text-[5.305vw] leading-[6.366vw] md:text-[1.806vw] md:leading-[1.914vw]'>פעם</span>?



          </p>
          
          {/* <ul className=" flex flex-col items-center md:items-start list-none">
            <li className="text-white text-[16px] md:text-[24px] leading-[19.2px] md:leading-[33.6px] md:flex md:items-center md:gap-[15px]">
              <span className="hidden md:block">
                <svg className="w-4 h-4 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
              </span>
              הפיקדונות הטובים בישראל
            </li>
            <li className="text-white text-[16px] md:text-[24px] leading-[19.2px] md:leading-[33.6px] md:flex md:items-center md:gap-[15px]">
              <span className="hidden md:block">
                <svg className="w-4 h-4 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
              </span>
              0% עמלת המרת מט״ח
            </li>
            <li className="text-white text-[16px] md:text-[24px] leading-[19.2px] md:leading-[33.6px] md:flex md:items-start md:gap-[15px]">
              <span className="hidden md:block md:mt-[8px]">
                <svg className="w-4 h-4 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
              </span>
              מערכת מסחר עם המלצות אנליסטים <br />
              מבוססות AI
            </li>
          </ul> */}
          <IconButton
            onClick={handleClick}
            iconPosition="end"
            icon={
              <img
                src={leftArrow}
                className="md:w-[1.319vw] h-4 align-baseline"
                alt="חץ שמאלה"
              />
            }
            className="self-center justify-center mt-[11.936vw] md:mt-[1.875vw] md:self-center md:flex bg-white text-blue font-Digibank-Medium md:w-[13.819vw] md:py-[0.833vw] md:px-[unset] md:text-[1.111vw] leading-[unset] md:mt-[1.875vw] "
            text="להתנסות ופתיחת חשבון"
          ></IconButton>
        </div>


        
        {/* <img
          className="md:hidden mt-[25px] mx-auto h-[233.25px] w-[284.14]"
          src={header}
          alt="המחשה מסך ראשון"
        />
        <div className="hidden md:flex justify-center w-[50%]">
          <img
            className="hidden md:flex w-[533.36px] h-[543px]"
            src={heroDesktop}
            alt="המחשה מסך ראשון"
          />
        </div> */}

        
        {/* <p className="md:hidden mt-[29px] text-center font-OneZero-Apparat-Light text-[10px] leading-[11px]">
        ריבית משתנהP-2% , מתואמת 4%, לתקופה של שנה. <br /> בכפוף לתנאי הבנק והפיקדון.
        </p> */}
        <QrDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
      </div>
      <p className='font-Apparat-Book text-center pt-[39.788vw] md:text-right md:pt-[2.292vw] md:text-[0.972vw] md:leading-[1.031vw] md:mr-[-2.153vw]'>
            בכפוף לתנאי הבנק 
        </p>
    </div>
  );
}
