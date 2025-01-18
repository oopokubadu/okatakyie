import Image from "next/image";
import Link from "next/link";
import React from "react";

function DrawerItem({ label, href = "#", onClick, ...props }) {
  return (
    <Link href={href}>
      <a
        className="flex justify-between h-[60px] items-center"
        onClick={onClick}
        {...props}
      >
        <span className="text-[25px] pl-[13px]">{label}</span>
        <Image
          quality={100}
          src="/images/right-arrow.svg"
          alt="arrow-right"
          role="presentation"
          height="15.56"
          width="16"
        />
      </a>
    </Link>
  );
}

export default DrawerItem;
