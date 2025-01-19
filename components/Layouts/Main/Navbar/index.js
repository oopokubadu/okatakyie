import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Container from "../../../Container";
import Drawer from "./Drawer";
import styles from "./styles.module.css";

function Navbar() {
  const [showDrawer, setShowDrawer] = useState(false);
  const { route } = useRouter();

  return (
    <div className={styles.navbar}>
      <Container className="h-full">
        <div className="flex justify-between h-full items-center">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <Image
                  quality={100}
                  src="/images/navbrand.svg"
                  alt="Logo"
                  width="46"
                  height="26"
                />
              </a>
            </Link>
          </div>
          <nav className="hidden sm:flex sm:gap-5 md:gap-6 lg:gap-7 xl:gap-[35px] font-display font-light">
            <Link href="/">
              <a
                className={
                  route === "/" || route.includes("/work")
                    ? " hover:text-accent"
                    : "text-[#8B919B] hover:text-accent"
                }
              >
                Work
              </a>
            </Link>
            <Link href="https://read.cv/okatakyieopokubadu">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={"text-[#8B919B] cursor-alias hover:text-accent"}
              >
                Resumé
              </a>
            </Link>

            <Link href="/about-me">
              <a
                className={
                  route === "/about-me"
                    ? " hover:text-accent"
                    : "text-[#8B919B] hover:text-accent"
                }
              >
                About Me
              </a>
            </Link>
            {/* <Link href="/contact">
              <a
                className={
                  route === "/contact"
                    ? " hover:text-accent"
                    : "text-[#8B919B] hover:text-accent"
                }
              >
                Say Hello
              </a>
            </Link> */}
          </nav>
          <div
            onClick={() => setShowDrawer(true)}
            className="sm:hidden cursor-pointer flex items-center"
          >
            <Image
              quality={100}
              src="/images/menu.svg"
              alt="menu"
              width="18"
              height="14"
            />
          </div>
        </div>
      </Container>
      <Drawer show={showDrawer} onClose={() => setShowDrawer(false)} />
    </div>
  );
}

export default Navbar;
