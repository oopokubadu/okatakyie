import Link from "next/link";
import React from "react";
import Container from "../../../Container";
import HSection from "../../../HSection";
import VSection from "../../../VSection";

function Details() {
  return (
    <>
      <div
        id="top"
        role="banner"
        className="mb-[clamp(150px,18vh,180px)] bg-[#e7e9ee] overflow-hidden"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="mx-auto w-[max(85.375rem,100%)] 2xl:max-w-[93.75rem] h-[clamp(31.4375rem,55vh,37.5rem)] object-cover object-center md:scale-[119%] scale-[150%]"
          src="/images/projects/pesewa-banner.png"
          alt="snapshots of pesewa project"
        />
      </div>
      <Container>
        <div className="mb-[clamp(150px,18vh,180px)]">
          <HSection
            title="Understanding the challenge"
            description={[
              `There are a number of hurdles that Ghanaian product developers must jump through to integrate their apps with traditional payment gateway providers. To begin with, communication with the providers via email takes a lot of time, API documentation is sometimes sent in PDF format and cannot be accessed from the providers' websites, and some developer portals are not quite user-friendly. Developers are thus left with a dreary experience, with no real alternative in sight.`,
              `Another issue is that a gateway account often only supports one application, so developers with more than one product must request multiple accounts and be charged per application. Additionally, developers have to ask for their endpoint URLs to be changed by providers every time a change is necessary. Flexibility is basically nonexistent.`,
            ]}
          />
        </div>
        <div className="mb-[clamp(150px,18vh,180px)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="object-cover object-center"
            src="/images/projects/pesewa-1.png"
            alt="snapshot of dashboard"
          />
        </div>
        <div className="mb-[120px] pb-[120px] border-b border-secondary[/.25]">
          <HSection
            title="Goals and Objectives"
            description={[
              `We wanted Pessewa to stand out from the crowd — Provide the most startup/developer-friendly payment gateway in Ghana by drastically reducing integration time, from online submission and validation of business documents within the shortest time, to easy access to API documentation even without registration. Additionally, we wanted to eliminate redundancy by allowing multiple application integrations using a single account and giving developers control over their integration settings using an intuitive user interface.`,
            ]}
          />
        </div>
        <div className="mb-[120px] pb-[120px] border-b border-secondary[/.25]">
          <HSection
            title="Users and Audience"
            description={[
              `Pessewa’s target users are individual developers and product managers in startups within the fintech space. They prioritize speed, automation and flexibility, as down time is costly to their goals and timelines. Communicating back and forth via emails and sharing API Docs in PDF format just doesn’t cut it anymore.`,
              `Users within this group use various tools within their stack and are therefore accustomed with industry-standard aesthetics and processes. They expect something simple and intuitive that just works right out of the box.`,
            ]}
          />
        </div>
        <div className="mb-[120px] pb-[120px] border-b border-secondary[/.25]">
          <HSection
            title="Team and Role"
            description={[
              `Having had the experience of working on quite a number of products from the ground up, I had no problem being the only designer on the team, I single-handedly worked on the design with occasional input from the product manager and two awesome developers.`,
              `I coordinated and led all facets of design including: information architecture, user journeys, visual and prototyping. I was also lucky to have many developer buddies in my network (some with startups) so I leveraged on that connection and conducted user research using methods such as interviews and surveys in order to iron out the scope of the entire project.`,
            ]}
          />
        </div>
        <div className="mb-[120px] pb-[120px] border-b border-secondary[/.25]">
          <HSection
            title="Identifying and addressing customer needs"
            description={[
              `Although a better payment gateway in Ghana was very needed and much overdue, we had to verify whether the product would be worth building as well as what it was supposed to accomplish. We began the process by conducting interviews and surveys with a focus group of developers, product owners, and entrepreneurs in Accra. After interviewing them and sifting through their feature requests, we were able to identify their key pain points, which aligned with some we had already noted.`,
              `They wanted to be in total control of their product settings, be able to integrate the gateway in multiple products with a single account and be ultimately be done within a short time frame. Our priority was shipping an MVP as fast as possible so we had to focus on the the users’ core needs, even though the we knew the product could be much larger and robust.`,
            ]}
          />
        </div>
        <div className="mb-[120px]">
          <HSection
            title="Brainstorming"
            description={[
              `We rapidly iterated on a variety of ideas as we began exploring the interface and visual design after identifying key specifications that had to be included in the MVP. As the core function of Pessewa is transaction processing, we wanted to push the boundaries of what a payment dashboard could look like while still keeping it simple enough that users wouldn’t be overwhelmed.`,
            ]}
          />
        </div>
        <div className="mb-[120px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="object-cover object-center"
            src="/images/projects/pesewa-2.png"
            alt="snapshot of dashboard"
          />
        </div>
        <div className="mb-[clamp(120px,20vh,180px)] pb-[120px] border-b border-secondary[/.25]">
          <VSection
            description={[
              `It was also fantastic to have some of our developer buddies (typical end users) participate in the wire framing process. Some of their ideal flows and layouts made their way into the final design.`,
            ]}
          />
        </div>
        <div className="mb-[120px]">
          <HSection
            title="We wanted the tone of Pessewa to be playful and informal, yet developer-friendly. "
            description={[
              `It was crucial to maintain a clean and intuitive user interface, this was well presented on the landing page and dashboard. The montonous Black-White colour scheme was carefully used and remained consistent throughout the design pattern to maximise brand recognition. The communication style was informal and casual as well.`,
            ]}
          />
        </div>
      </Container>
      <div role="banner" className="mb-[clamp(180px,18.4vh,189px)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="mx-auto w-[max(85.375rem,100%)] 2xl:max-w-[93.75rem] h-[clamp(34.5625rem,83vh,53.625rem)] object-cover object-top"
          src="/images/projects/pesewa-3.png"
          alt="snapshots of pesewa project"
        />
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3.125rem] md:gap-14 mb-[11.25rem]">
          <div>
            <VSection
              title="Authentication had to be simple. We didn’t try to reinvent the wheel here."
              description={[
                `We decided to keep things easy by using Email and Password with the option to enable 2-Factor Authentication later within the account settings. We also allowed users to reset their forgotten passwords, a simple feature that seem to be missing in competitors platforms.`,
              ]}
            />
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="mx-auto object-cover object-top"
              src="/images/projects/pesewa-4.png"
              alt="sign in screen of pesewa project"
            />
          </div>
        </div>
        <div className="mb-[70px]">
          <HSection
            title="A complex yet clean and simplified user-centric dashboard."
            description={[
              `The Application, admin, and merchant counter allow users to keep track of the number of sub admins and merchants they have as well as keep them updated on the number of integrations made.`,
              `The payments section informs users about all payments made and methods used, a simple line graph and pie chart  to visualise payment data of a specific time is also utilised, clicking on the time-range buttons allows them to view payment data of that period. `,
              `The transaction history page allows the user to see a list of the transactions with their respective details and enables them to search and filter the list for more specific results.`,
            ]}
          />
        </div>
        <div className="mb-[clamp(150px,18vh,180px)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="object-cover object-center"
            src="/images/projects/pesewa-1.png"
            alt="snapshot of dashboard"
          />
        </div>
        <div className="mb-[70px]">
          <HSection
            title="Pessewa had to be able to support multiple users per account in order enable multiple app integrations"
            description={[
              `Product managers are able to create account administrators with their respective authentication credentials and configure their account privileges.  This allows developers to work on multiple applications simultaneously within a single account. Users’ credentials are also automatically shared with administrators via SMS or email.`,
            ]}
          />
        </div>
        <div className="mb-[clamp(150px,18vh,180px)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="object-cover object-center"
            src="/images/projects/pesewa-5.png"
            alt="snapshot of administrators"
          />
        </div>
        <div className="mb-[70px]">
          <HSection
            title="Organize multiple merchants and their respective applications in one account."
            description={[
              `As part of the integration process, product managers set up business profiles on Pessewa using their legal business registration information. Business owners also receive access credentials for authentication.`,
            ]}
          />
        </div>
        <div className="mb-[clamp(150px,18vh,180px)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="object-cover object-center"
            src="/images/projects/pesewa-6.png"
            alt="snapshot of administrators"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[2rem] gap-x-[2rem] md:gap-x-8 mb-[11.25rem]">
          <div>
            <VSection
              title="Purposely interruptive but unambiguous dialogs."
              description={[
                `We were able to alert users about critical tasks, such as suspending an administrator’s account or changing the status of an application, by providing simple text with clear actions in dialog boxes. Occasionally, we also made it possible for users to input data, such as forwarding account credentials to stakeholders or product owners after creating an account.`,
                `In addition, we also used dialogs to acknowledge key changes made within certain profiles within the account, giving the user additional assurance`,
              ]}
            />
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <video
              className="mx-auto object-cover object-center"
              autoPlay
              loop
              muted
            >
              <source
                src="/video/merchant-created-dialog.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="mx-auto object-cover object-center"
              src="/images/projects/pesewa-8.png"
              alt="discard changes"
            />
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="mx-auto object-cover object-center"
              src="/images/projects/pesewa-9.png"
              alt="changes saved"
            />
          </div>
        </div>
        <div className="mb-[70px]">
          <HSection
            title="Enabling multiple application integration from a single account, providing users with vital payments details and total control over the application’s configurations."
            description={[
              `The ability to integrate multiple applications from one account was one of the most requested features by our focus group during interviews and the survey.`,
              `The data showed that users had a hard time requesting new accounts every time they wanted to integrate a new product - a problem common to most gateway providers in the country. A button that allows users to easily set up applications had to be clearly delineated on the page. `,
              `Applications are listed on the page in date order, but we also included filters and a search functionality so developers can easily find apps in a long list. A detailed summary of the application is partly displayed on the application card, along with the API credentials so that developers can quickly access them. Clicking on the card opens the user’s application profile, which displays data about all payments transactions made through the app. The app’s settings page allows users to alter various configurations such as the end-point URL, white-listed IP addresses, debit and credit percentages, etc.`,
            ]}
          />
        </div>
        <div className="mb-[clamp(150px,18vh,180px)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="object-cover object-center"
            src="/images/projects/pesewa-10.png"
            alt="snapshot of dashboard"
          />
        </div>
        <div className="mb-[70px]">
          <HSection
            title="Mini API documentation reference right within the dashboard."
            description={[
              `Although we aimed to ship a minimum viable product, we didn’t hesitate to include an API documentation, where developers could easily find information that will enable them integrate their products with Pessewa.`,
            ]}
          />
        </div>
        <div className="mb-[clamp(150px,18vh,180px)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="object-cover object-center"
            src="/images/projects/pesewa-11.png"
            alt="snapshot of dashboard"
          />
        </div>{" "}
        <div className="mb-[70px]">
          <VSection
            title="Outcome"
            description={[
              `The private beta which we rolled out to a handful of developers was very well received. They were able to easily integrate Pessewa in to their applications within a relatively short time using the API documentation we provided, with very little to no communication with us. Additionally, Pessewa integrated a live USSD balloting application, which handled multiple payments smoothly and provided very helpful analytics about payments.`,
              `While Pessewa was in its MVP phase and we had addressed most of the project’s objectives, there were a few that weren’t as straightforward as we initially thought, such as the online document submission and verification part; A clear solution to automating the validation of users’ business registration documents was not available at the early stage and the only reasonable option would have been to hire moderators to manually review the documents, until we’ve attended to the problem properly and shipped a robust solution.`,
              `Due to this experience, I have learned how involving the engineering team early in the development process reduces friction later in the project.`,
            ]}
          />
        </div>
        <div className="flex justify-between mb-[72.5px] transition-all">
          <Link href="/work/smart-insurance" passHref>
            <a className="font-serif text-[1.75rem] hover:text-accent">
              Next Project
            </a>
          </Link>
          <Link href="#top">
            <a className="font-serif text-[1.75rem] hover:text-accent">Up</a>
          </Link>
        </div>
      </Container>
    </>
  );
}

export default Details;
