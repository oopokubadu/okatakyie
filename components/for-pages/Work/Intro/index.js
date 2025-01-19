import React, { useRef, useState } from "react";
import Typewriter from "typewriter-effect";

function Intro() {
  const textRef = useRef(null);
  const [cursor, setCursor] = useState("|");

  return (
    <section className="py-[clamp(130px,16vh,165px)]">
      <p className="text-[clamp(22px,2.5vw,30px)] mb-9">
        Hi, I&apos;m Okatakyie
      </p>
      <h1
        ref={textRef}
        className="text-[clamp(54px,6vw,67px)] leading-[clamp(67px,5vw,81px)] min-h-[203px] sm:min-h-[134px] xl:min-h-fit"
      >
        <Typewriter
          options={{ delay: 100, cursor }}
          onInit={(typewriter) => {
            typewriter
              .typeString("<span>A product designer by day...</span>")
              .pauseFor(700)
              .typeString("<br/><span>Batman by night.</span>")
              .start();
          }}
        />
      </h1>
    </section>
  );
}

export default Intro;
