import React from "react";
import Avatar from "../Ui/Avatar";

type Props = {
  src: string;
  children: React.ReactNode;
  className?: string;
};

export default function HorizontalInfoCard({
  children,
  src,
  className,
}: Props) {
  return (
    <div className={`flex gap-2 w-full  ${className}`}>
      <Avatar
        src={src}
        className="w-[72px] h-[72px] object-contain rounded-full"
      />
      <div>{children}</div>
    </div>
  );
}
