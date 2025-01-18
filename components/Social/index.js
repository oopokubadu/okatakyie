import Image from "next/image";
import Link from "next/link";
import React from "react";

function Social({ href, activeSrc, src, alt, width = 20, height = 20 }) {
  return (
    <Link href={href}>
      <a className="group transition-all relative">
        <div className="group-hover:opacity-0">
          <Image
            quality={100}
            width={width}
            height={height}
            src={src}
            alt={alt}
          />
        </div>
        <div className="group-hover:opacity-100 opacity-0 absolute top-0 left-0">
          <Image
            quality={100}
            width={width}
            height={height}
            src={activeSrc}
            alt={alt}
          />
        </div>
      </a>
    </Link>
  );
}

export default Social;
