/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card from "../Card";

function FeatureSection({ items, className = "" }) {
  return (
    <section>
      <div
        className={
          "grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3 " + className
        }
      >
        {items.map((item) => (
          <Card
            key={item.text}
            className="grid place-content-start lg:place-content-center"
          >
            <div className="px-[2.375rem] py-[2.1875rem]">
              <div className="flex items-center">
                <img src={item.icon} alt="item icon" />
                <h4 className="uppercase font-display text-[1rem] ml-4 font-bold">
                  {item.title}
                </h4>
              </div>
              <p className="text-[0.875rem] mt-[2.8125rem] leading-6">
                {item.text}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
