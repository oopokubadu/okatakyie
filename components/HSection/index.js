import React, { useMemo } from "react";
import { isLastItem } from "../../util/array";

function HSection({ title, description }) {
  const descriptionCmp = useMemo(
    () =>
      description.map((item, idx, arr) => {
        if (typeof item === "string") {
          return (
            <p
              className={
                "font-sans text-[1rem] leading-[2rem] " + !isLastItem(idx, arr)
                  ? "mb-6"
                  : ""
              }
              key={item}
            >
              {item}
            </p>
          );
        } else if (typeof item === "object" && item.length === 2) {
          if (item[0] === "UNORDERED_LIST") {
            return (
              <ul className="list-[square] space-y-7 mb-8" key={item[1]}>
                {item[1].map((text) => (
                  <li
                    className={"ml-5 font-sans text-[1rem] leading-[2rem] "}
                    key={text}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            );
          }
        }
      }),
    [description]
  );

  return (
    <section className="flex-col flex md:flex-row justify-between gap-[3.125rem] md:gap-14 ">
      <h2 className="text-[2.1875rem] leading-[2.8125rem] basis-full">
        {title}
      </h2>
      <div className="basis-full">{descriptionCmp}</div>
    </section>
  );
}

export default HSection;
