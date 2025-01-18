import React from "react";
import Container from "../../../Container";
import Social from "../../../Social";

function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex justify-between py-10 border-t border-secondary/[.15]">
          <div>
            <p>opokubadu18@gmail.com</p>
            <div className="sm:hidden mt-6 flex items-center gap-4">
              <Social
                href="https://www.linkedin.com/in/okatakyieopokubadu/"
                quality={100}
                src="/images/icons/linkdin.svg"
                activeSrc="/images/icons/linkdin-active.svg"
                alt="linked in"
              />
              
              {/* <Social
                href="https://dribbble.com/"
                quality={100}
                src="/images/icons/social.svg"
                activeSrc="/images/icons/social-active.svg"
                alt="Social"
              />

              <Social
                href="https://twitter.com/"
                quality={100}
                src="/images/icons/twitter.svg"
                activeSrc="/images/icons/twitter-active.svg"
                alt="Twitter"
              /> */}

            </div>
          </div>
          <div className="hidden sm:flex items-center justify-center gap-4">
            <Social
              href="https://www.linkedin.com/in/okatakyieopokubadu/"
              quality={100}
              src="/images/icons/linkdin.svg"
              activeSrc="/images/icons/linkdin-active.svg"
              alt="linked in"
            />

          </div>
          <p>(233) 55-519-0488</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
