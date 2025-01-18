import React from "react";
import ContactItem from "../../../ContactItem";
import Container from "../../../Container";
import { CONTACTS } from "./data";

function Contacts() {
  return (
    <section>
      <Container className="mb-[clamp(77px,3vw,149px)]">
        <h3 className="flex font-serif">
          Some awesome people I’ve worked with
          <span
            role="presentation"
            className="hidden md:inline-block ml-4 h-[1px] flex-1 bg-[#707070]/[.15] self-center"
          />
        </h3>
      </Container>
      <Container className="relative">
        <div className="absolute z-10 top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent" />
        <ul className="w-100 scroll-smooth overflow-scroll flex gap-[clamp(40px,5vw,52px)] no-scrollbar px-[clamp(18px,5vw,80px)]">
          {CONTACTS.map((item) => (
            <li key={item.avatar} className="w-[190px] flex-shrink-0">
              <ContactItem
                avatar={item.avatar}
                name={item.name}
                role={item.role}
                companyLogo={item.companyLogo}
                company={item.company}
              />
            </li>
          ))}
        </ul>
        <div className="absolute z-10 top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />
      </Container>
    </section>
  );
}

export default Contacts;
