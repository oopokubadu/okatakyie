import Image from "next/image";
import Link from "next/link";
import React from "react";
import pesewaPic from "../../../../public/images/projects/one.png";
import smartInsurance from "../../../../public/images/projects/two.png";
import FeaturedImage from "./FeaturedImage";

function Featured() {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-8 space-y-28 md:space-y-0">
      <div className="w-full">
        <Link href="/work/pesewa" passHref>
          <a>
            <FeaturedImage
              src={pesewaPic}
              alt="pesewa project"
              description="A mobile payment integration and collection solution."
            />
            <div className="flex items-center mt-6">
              <Image
                quality={100}
                src="/images/projects/pesewa-logo.svg"
                alt="pesewa logo"
                width="129.12"
                height="26.09"
                fill="responsive"
              />
            </div>
          </a>
        </Link>
        <p className="mt-8 md:hidden">
          A mobile payment integration and collection solution.
        </p>
      </div>
      <div>
        <Link href="/work/smart-insurance" passHref>
          <a>
            <FeaturedImage
              src={smartInsurance}
              alt="smart insurance project"
              description="An insurance platform to help users find affordable insurance policy rates"
            />
            <div className="flex items-center mt-6">
              <Image
                quality={100}
                src="/images/projects/smart-insurance-logo.svg"
                alt="smart insurance logo"
                width="116.18"
                height="32.93"
              />
            </div>
          </a>
        </Link>
        <p className="mt-8 md:hidden">
          An insurance platform to help users find affordable insurance policy
          rates.
        </p>
      </div>
    </div>
  );
}

export default Featured;
