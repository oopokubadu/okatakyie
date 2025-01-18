import Image from "next/image";
import React from "react";

function ContactItem({ avatar, name, role, companyLogo, company }) {
  return (
    <>
      <div>
        <Image
          quality={100}
          height={100}
          width={100}
          layout="intrinsic"
          objectFit="fixed"
          objectPosition="top left"
          src={avatar}
          alt={name}
        />
      </div>
      <h4>{name}</h4>
      <p className="text-[14px] opacity-50">{role}</p>
      <div className="mt-[52px] flex items-center">
        <Image
          quality={100}
          height={28}
          width={120}
          objectFit="contain"
          objectPosition="top left"
          layout="intrinsic"
          src={companyLogo}
          alt={company}
        />
      </div>
    </>
  );
}

export default ContactItem;
