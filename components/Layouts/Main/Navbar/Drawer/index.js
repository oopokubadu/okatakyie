import Image from "next/image";
import Link from "next/link";
import React from "react";
import Portal from "../../../../ReusablePortal";
import DrawerItem from "./DrawerItem";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

function Drawer({ show = false, onClose }) {
  return (
    <Portal rootId={"drawer"}>
      <motion.div
        className="fixed z-[60] inset-0"
        style={{ x: "100%" }}
        animate={show ? "open" : "closed"}
        variants={variants}
        transition={{ type: "spring", bounce: 0.25 }}
      >
        {/* backdrop */}
        <div
          onClick={onClose}
          role="button"
          className="absolute bg-[#2837416E] cursor-pointer inset-0"
        />

        {/* drawer content */}
        <div className={styles.drawer}>
          <div
            onClick={onClose}
            className="absolute top-7 cursor-pointer right-5 px-1"
          >
            <Image
              quality={100}
              alt="close"
              src="/images/times.svg"
              height="14.1"
              width="14.1"
            />
          </div>

          {/* drawer items */}
          <div className="absolute top-[50%] space-y-[5px] -translate-y-1/2 px-5 w-full">
            <DrawerItem onClick={onClose} label="Work" href="/" />
            <DrawerItem
              onClick={onClose}
              label="Resume"
              href="https://read.cv/okatakyieopokubadu"
              target="_blank"
              rel="noopener noreferrer"
            />
            <DrawerItem onClick={onClose} label="About Me" href="/about-me" />
            {/* <DrawerItem onClick={onClose} label="Contact" href="/contact" /> */}
          </div>
        </div>
      </motion.div>
    </Portal>
  );
}

export default Drawer;
