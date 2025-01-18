import Head from "next/head";
import Container from "../components/Container";
import Featured from "../components/for-pages/Work/Featured";
import Intro from "../components/for-pages/Work/Intro";

export default function Home() {
  return (
    <>
      <Head>
        <title>Okatakyie | Work</title>
      </Head>
      <Container className="mb-[70px]">
        <Intro />
      </Container>
      <Container className="mb-[93.9px]">
        <Featured />
      </Container>
    </>
  );
}

// Home.getLayout = function getLayout(page) {
//   return <MainLayout>{page}</MainLayout>;
// };
