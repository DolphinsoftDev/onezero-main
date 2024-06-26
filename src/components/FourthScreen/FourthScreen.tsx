import React, { useState } from "react";
import IconButton from "../Ui/IconButton";
import leftArrow from "../../assets/icons/arrow-left.svg";
import QrDialog from "../QrDialog/QrDialog";
import { MIN_DESKTOP_WIDTH } from "../../constants/constants";
import { openAppStore } from "../../utils/openAppStore";
type Props = {};

// TODO: Fix height of text not 100% center
export default function FourthScreen({}: Props) {
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

    //TODO: redirect to app store
  }

  return (
    <div className="bg-blue flex flex-col pb-12 pt-[4.815rem] px-5 gap-7 text-center text-white items-center md:pb-[6.75rem] md:pt-[5.625rem]">
      <h2 className="font-Digibank-Regular text-[1.5rem] leading-[26.4px] md:leading-[1.1] md:text-[2.5rem]">
        7 דקות ויש לך חשבון 
        <br className="hidden md:flex" /> עם <br className="flex md:hidden" />
        חודשיים התנסות ללא עלות.
      </h2>
      <IconButton
        id="7_min_open_acc_btn"
        onClick={handleClick}
        iconPosition="end"
        icon={
          <img
            src={leftArrow}
            className="w-4 h-4 align-baseline"
            alt="חץ שמאלה"
          />
        }
        className="bg-white text-blue font-Digibank-Medium md:text-base leading-[1.1875rem]"
        text="להתנסות ופתיחת חשבון"
      ></IconButton>
      <QrDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </div>
  );
}
