import Head from "next/head";
import Container from "../components/Container";
import Contacts from "../components/for-pages/AboutMe/Contacts";
import Intro from "../components/for-pages/AboutMe/Intro";

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>Okatakyie | About Me</title>
      </Head>
      <Container className="mb-[70px]">
        <Intro />
      </Container>
      <div className="mb-[93.9px]">
        {/* <Contacts /> */}
      </div>
    </>
  );
}

// Home.getLayout = function getLayout(page) {
//   return <MainLayout>{page}</MainLayout>;
// };
