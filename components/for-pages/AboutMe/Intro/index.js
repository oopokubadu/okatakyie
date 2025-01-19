import Image from "next/image";
import React from "react";
import Button from "../../../Button";
import styles from "./styles.module.css";
import maxx from "../../../../public//images/maxx.png";
import { useRouter } from "next/router";

function Intro() {
  const { push } = useRouter();
  return (
    <section
      className={
        styles.intro +
        " lg:grid grid-cols-12 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16"
      }
    >
      <div className="col-span-5">
        <div className="max-w-[clamp(191px,27vw,322px)]  mx-auto lg:mt-28 lg:mb-0 mb-[clamp(80px,10vw,138px)] ">
          <Image
            quality={100}
            height={322}
            width={322}
            layout="responsive"
            src={maxx}
            alt="Maxx"
            placeholder="blur"
            priority
          />
        </div>
      </div>
      <div className="col-span-7">
        <h2 className="text-left sm:text-center lg:text-left mb-6">
          Hello, I&apos;m Okatakyie.
        </h2>
        <div className=" xl:w-[64ch] lg:w-[58ch] space-y-6">
          <p>
          Proven problem-solver with a successful track record in delivering 
          innovative solutions across Fintech, Healthtech, Insuretech, Lawtech, 
          Paytech, Edtech, E-commerce, Digital Marketing, and Media.
          </p>

          <p>
          Demonstrated success in delivering thriving products that have impacted over a million users globally.
          </p>
          <p>
          Adept at leading digital transformation and crafting user-centric products 
          in fast-paced industries. Proficient in creative ideation, SCRUM, strategic 
          direction, effective design and management, utilizing a wide range of design 
          and management tools.
          </p>
        </div>
        <div className="mt-[51px]">
        <Button
  onClick={() =>
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=opokubadu18@gmail.com", "_blank")
  }
  className="w-full lg:w-auto"
>
  Get in touch with me
</Button>

        </div>
      </div>
    </section>
  );
}

export default Intro;
