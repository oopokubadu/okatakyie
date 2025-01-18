/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card from "../Card";

function StatsSection({ title, items, className = "" }) {
  return (
    <section>
      <h3 className="font-display uppercase mb-9 font-bold leading-[1.375rem] text-[0.9375rem]">
        {title}
      </h3>
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
            <div className="px-[2.8125rem] py-[2rem]">
              <div className="flex justify-between items-center">
                <img src={item.mainImg} alt="item image" />
                <p className="ml-[1.875rem] text-[0.875rem] leading-6">
                  {item.text}
                </p>
              </div>
              {item.bottomImg.length > 0 && (
                <img className="mt-5" src={item.bottomImg} alt="item image" />
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
