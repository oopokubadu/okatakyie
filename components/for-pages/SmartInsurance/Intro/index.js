import Image from "next/image";
import React from "react";

function Intro() {
  return (
    <>
      <section className="py-[clamp(106px,17vh,115px)]">
        <h1 className="text-[clamp(2.425rem,6.5vw,3.8125rem)] leading-[clamp(2.8125rem,7.8vw,5.0625rem)]">
          <span className="flex items-center mb-[clamp(30px,3.5vw,44px)]">
            <Image
              quality={100}
              src="/images/projects/smart-insurance-logo.svg"
              alt="pesewa logo"
              width="115.31"
              height="23.3"
              fill="responsive"
            />
          </span>
          An insurance product that helps users find the cheapest home, car and
          travel insurance policy rates.
        </h1>
      </section>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-7 sm:gap-x-8">
        <li className="flex flex-col pb-7 sm:pb-0 border-b border-secondary[/.2] sm:border-b-0">
          <div>
            <Image
              fill="responsive"
              width="18.51"
              height="18.51"
              src="/images/icons/star.svg"
              alt="image of star"
            />
          </div>
          <div className="flex-1 sm:border-r border-secondary[/.20]">
            <h3 className="uppercase mb-2 text-[0.75rem] font-bold leading-5">
              My role
            </h3>
            <p className="leading-5 w-[min(37ch,90%)] text-[0.875rem]">
              User research, UI design, Prototyping
            </p>
          </div>
        </li>
        <li className="flex flex-col pb-7 sm:pb-0 border-b border-secondary[/.2] sm:border-b-0">
          <div>
            <Image
              fill="responsive"
              width="18.51"
              height="18.51"
              src="/images/icons/people.svg"
              alt="people"
            />
          </div>
          <div className="flex-1 sm:border-r border-secondary[/.20]">
            <h3 className="uppercase mb-2 text-[0.75rem] font-bold leading-5">
              Team
            </h3>
            <p className="leading-5 w-[min(37ch,90%)] text-[0.875rem]">
              1 Designer (me), 3 Developers, 2 Product Managers
            </p>
          </div>
        </li>
        <li className="flex flex-col pb-7 sm:pb-0 sm:border-b-0">
          <div>
            <Image
              fill="responsive"
              width="18.51"
              height="18.51"
              src="/images/icons/calendar.svg"
              alt="image of star"
            />
          </div>
          <div>
            <h3 className="uppercase mb-2 text-[0.75rem] font-bold leading-5">
              Date
            </h3>
            <p className="leading-5 w-[min(37ch,90%)] text-[0.875rem]">
              January - April 2020
            </p>
          </div>
        </li>
      </ul>
    </>
  );
}

export default Intro;
