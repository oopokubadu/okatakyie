import Head from "next/head";
import React from "react";
import Container from "../../components/Container";
import Details from "../../components/for-pages/SmartInsurance/Details";
import Intro from "../../components/for-pages/SmartInsurance/Intro";

function SmartInsurance() {
  return (
    <>
      <Head>
        <title>Okatakyie | Smart Insurance</title>
      </Head>
      <Container className="mb-[92px]">
        <Intro />
      </Container>

      <Details />
    </>
  );
}

export default SmartInsurance;
