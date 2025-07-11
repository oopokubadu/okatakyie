// import Image from "next/image";
import React from "react";

function FeaturedImage({ src, alt, description }) {
  console.log("src", src)
  return (
    <div className="group relative">
      <div className="group-hover:blur-sm transition-all">
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "auto",
            objectPosition: "top",
            objectFit: "cover", // mimics layout="responsive"
          }}
        />
      </div>
      <div className="absolute inset-0 bg-slate-200 flex items-center text-center opacity-0 group-hover:opacity-80 transition-all" />
      <h2 className="font-serif text-[25px] leading-[37px] absolute top-1/2 -translate-y-1/2 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-all px-8">
        {description}
      </h2>
    </div>
  );
}

export default FeaturedImage;
