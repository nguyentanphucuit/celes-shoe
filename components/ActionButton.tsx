import Image from "next/image";
import Link from "next/link";
import React from "react";

const ActionButton = () => {
  return (
    <div className="fixed bottom-6 left-6 group  ">
      <div className="relative">
        <div className="absolute -z-10 animate-ping bg-blue-600 w-10 h-10 rounded-full bottom-2 left-2"></div>
        <div className=" ">
          <Link href={"https://zalo.me/0905075588"} target="_blank">
            <Image
              src="/zalo.icon.png"
              width={56}
              className="rounded-full bg-white "
              height={56}
              alt="zalo-icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActionButton;
