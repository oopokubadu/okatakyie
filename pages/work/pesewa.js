import Head from "next/head";
import React from "react";
import Container from "../../components/Container";
import Details from "../../components/for-pages/Pesewa/Details";
import Intro from "../../components/for-pages/Pesewa/Intro";

function Pesewa() {
  return (
    <>
      <Head>
        <title> Okatakyie | Pessewa</title>
      </Head>
      <Container className="mb-[92px]">
        <Intro />
      </Container>

      <Details />
    </>
  );
}

export default Pesewa;
