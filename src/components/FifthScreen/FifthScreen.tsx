import React, { CSSProperties, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Pagination, Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import Link from "../Ui/Link";
import galleryOne from "../../assets/mobile-imgs/gallery-one.png";
import galleryOnePlus from "../../assets/mobile-imgs/gallery-one-plus.png";
import galleryZero from "../../assets/mobile-imgs/gallery-zero.png";
import { generateURLWithSearchParams } from "../../utils/urlUtils";
type Props = {};

function SlideHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[45px]  md:leading-none absolute bottom-[13rem] md:bottom-[15rem] font-Digibank-Apparat-Book">
      {children}
    </h2>
  );
}
function SlideParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-[22.5px] font-OneZero-Apparat-Book ">
      {children}
    </p>
  );
}

function SlideCard({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: CSSProperties | undefined;
}) {
  return (
    <div
      className="flex flex-col justify-end text-start text-white w-full rounded-[10px] bg-no-repeat  bg-center bg-cover py-4 px-[1.15rem] h-[25rem] md:w-[21rem]	"
      style={style}
    >
      {children}
    </div>
  );
}
const slideFooterStyle =
  "text-[18px] leading-[22.5px] pt-[4px] text-right font-OneZero-Apparat-Book text-darkGrey p-3";

const activeButtonStyle = "text-white bg-black";
export default function FifthScreen({}: Props) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType>();
  function handleGalleryButtonClick(index: number) {
    setActiveSlideIndex(index);
    swiperInstance?.slideTo(index);
  }
  return (
    <div className="flex flex-col items-center justify-center place-content-center pt-[48px]  pb-[70px] md:pb-[usnet] md:py-14 px-0 gap-8 text-center">
      <h2 className="font-OneZero-Apparat-Book  text-2xl leading-[26.4px] md:text-[2.5rem] md:leading-4">
        איזה מסלול הכי <br className="md:hidden" />
        מתאים לך?
      </h2>
      <Link target="_blank" href={generateURLWithSearchParams("https://www.onezerobank.com/plans/")} className="md:text-[22px] font-OneZero-Apparat-Book">לפירוט המסלולים המלא</Link>

      <div className="hidden md:flex justify-between lg:w-11/12 xl:w-5/6 3xl:w-4/6">
        <div className="relative">
          <SlideCard style={{ backgroundImage: `url(${galleryZero})` }}>
            <SlideHeader>Zero</SlideHeader>
            <SlideParagraph>
              פטור מורחב מעמלות עו״ש ודמי
              <br />
              כרטיס. תשלום לפי שימוש, 
              <br />
              ללא בנקאות פרטית.
            </SlideParagraph>
          </SlideCard>
          <div className="text-right px-3 my-3">
            {/* <h3 className="invisible text-[18px] leading-[22.5px] font-OneZero-Apparat-Medium text-darkGrey">
              .
            </h3> */}
            <p className={`${slideFooterStyle} px-0 py-0`}>
              תשלום לפי שימוש
            </p>
          </div>

          {/* <p className={slideFooterStyle}>תשלום לפי שימוש</p> */}
        </div>

        <div className="relative">
          <SlideCard style={{ backgroundImage: `url(${galleryOne})` }}>
            <SlideHeader>One</SlideHeader>
            <SlideParagraph>
              בנקאות פרטית עם מנהלי כספים אישיים, 
              <br />
              מענה אנושי 24/6, פטור מורחב מעמלות 
              <br />
              ומסחר משתלם בניירות ערך.
            </SlideParagraph>
          </SlideCard>
          <div className="text-right px-3 my-3">
            <h3 className="text-[18px] leading-[22.5px] font-OneZero-Apparat-Medium text-darkGrey">
              חודשיים התנסות
            </h3>
            <p className={`${slideFooterStyle} px-0 py-0`}>
            לאחר מכן ₪49 / חודש בסיום התקופה 
            <br />
            ₪59 / חודש לחשבון משותף
            </p>
          </div>
        </div>

        <div className="relative">
          <SlideCard style={{ backgroundImage: `url(${galleryOnePlus})` }}>
            <SlideHeader>+One</SlideHeader>
            <SlideParagraph>
              חבילת מסחר חודשית בניירות ערך, כלי
              <br />
              AI תומכי החלטה, מעטפת שירותים 
              <br />
              אישית, הנחות והטבות בלעדיות, סקירות 
              <br />
              כלכליות מותאמות וייעוץ פנסיוני מתמשך 
              
            </SlideParagraph>
          </SlideCard>
          <div className="text-right px-3 my-3">
            {/* <h3 className="invisible text-[18px] leading-[22.5px] font-OneZero-Apparat-Medium text-darkGrey">
              .
            </h3> */}
            <p className={`${slideFooterStyle} px-0 py-0`}>
            ₪119 / חודש לחשבון יחיד
            <br />
            ₪139 / חודש לחשבון משותף
            </p>
          </div>
          {/* <p className={slideFooterStyle}>
            ₪119 / חודש לחשבון יחיד
            <br />
            ₪139 / חודש לחשבון משותף
          </p> */}
        </div>
      </div>

      <div className="flex gap-8 font-Digibank-Apparat-Book text-base md:hidden ">
        <button
          onClick={() => {
            handleGalleryButtonClick(0);
          }}
          className={`px-4 py-2 rounded-[3rem] ${
            activeSlideIndex === 0 && activeButtonStyle
          }`}
        >
          Zero
        </button>
        <button
           onClick={() => {
            handleGalleryButtonClick(1);
          }}
          className={`px-4 py-2 rounded-[3rem] ${
            activeSlideIndex === 1 && activeButtonStyle
          }`}
        >
          One
        </button>
        <button
           onClick={() => {
            handleGalleryButtonClick(2);
          }}
          className={`px-4 py-2 rounded-[3rem] ${
            activeSlideIndex === 2 && activeButtonStyle
          }`}
        >
          +One
        </button>
      </div>

      <Swiper
      //  pagination={{
      //   enabled: true,
      //   bulletActiveClass: "swiper-pagination-bullet-active bg-black",
      // }}
      modules={[Pagination, Controller]}
      className="w-11/12 h-[31rem] md:hidden"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
      controller={{ control: swiperInstance }}
      onSwiper={(swiper) => {
        swiper.slideTo(1);
        setActiveSlideIndex(1);
        setSwiperInstance(swiper);
      }}
      >
        <SwiperSlide>
          <SlideCard style={{ backgroundImage: `url(${galleryZero})` }}>
            <SlideHeader>Zero</SlideHeader>
            <SlideParagraph>
              פטור מורחב מעמלות עו״ש ודמי 
              <br />
              כרטיס. תשלום לפי שימוש,
              <br />
              ללא בנקאות פרטית.
            </SlideParagraph>
          </SlideCard>
          <p className={`${slideFooterStyle} pt-[18px]`}>תשלום לפי שימוש</p>
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard style={{ backgroundImage: `url(${galleryOne})` }}>
            <SlideHeader>One</SlideHeader>
            <SlideParagraph>
              בנקאות פרטית עם מנהלי כספים אישיים,
              <br />
              מענה אנושי 24/6, פטור מורחב מעמלות
              <br />
              ומסחר משתלם בניירות ערך.
            </SlideParagraph>
          </SlideCard>
          <div className="text-right px-3 my-3">
            <h3 className="text-[18px] leading-5 font-Apparat-Medium  text-darkGrey">
              חודשיים התנסות
            </h3>
            <p className={`${slideFooterStyle} px-0 py-0`}>
              לאחר מכן ₪49 / לחודש בסיום התקופה
              <br />
              ₪59 / לחודש לחשבון משותף
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard style={{ backgroundImage: `url(${galleryOnePlus})` }}>
            <SlideHeader>+One</SlideHeader>
            <SlideParagraph>
              חבילת מסחר חודשית בניירות ערך, כלי
              <br />
              AI תומכי החלטה, מעטפת שירותים 
              <br />
              אישית, הנחות והטבות בלעדיות, סקירות 
              <br />
              כלכליות מותאמות וייעוץ פנסיוני מתמשך  
            </SlideParagraph>
          </SlideCard>
          <p className={`${slideFooterStyle} pt-[18px]`}>
            ₪119 / חודש לחשבון יחיד
            <br />
            ₪139 / חודש לחשבון משותף
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
