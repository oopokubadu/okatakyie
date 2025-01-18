import Head from "next/head";
import Container from "../components/Container";
import Contacts from "../components/for-pages/AboutMe/Contacts";
import Intro from "../components/for-pages/AboutMe/Intro";
import ContactForm from "../components/for-pages/Contact/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Okatakyie | Contact Me</title>
      </Head>
      <Container className="mb-[70px]">
        <ContactForm />
      </Container>
    </>
  );
}

// Home.getLayout = function getLayout(page) {
//   return <MainLayout>{page}</MainLayout>;
// };
