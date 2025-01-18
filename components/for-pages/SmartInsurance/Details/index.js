import Link from "next/link";
import React from "react";
import Container from "../../../Container";
import FeatureSection from "../../../FeatureSection";
import HSection from "../../../HSection";
import StatsSection from "../../../StatsSection";
import VSection from "../../../VSection";

function Details() {
  return (
    <>
      <div
        id="top"
        role="banner"
        className="mb-[clamp(150px,18vh,180px)]  bg-[#eff1f6] overflow-hidden"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="mx-auto md:px-28 w-[max(85.375rem,100%)] 2xl:max-w-[93.75rem] h-[clamp(20.4375rem,70vh,34.25rem)] md:pt-28 object-bottom  object-contain"
          src="/images/projects/smart-insurance-banner.png"
          alt="snapshots of pesewa project"
        />
      </div>
      <Container>
        <div className="mb-[clamp(150px,18vh,180px)]">
          <HSection
            title="The Problem"
            description={[
              `The insurance market in Ghana has a fairly wide variety of providers, from fairly new companies such as Serene Insurance to well-established multinational companies such as Allianz Insurance.`,
              `As dense as this market is with numerous companies offering competitive polices, budget-constrained buyers looking for the most affordable policies often don’t know how to compare and find quotes that meet their budget, they are often swayed by complex policy terms, leading to disputes later on. There’s also a lack of transparency in how many of these insurance companies calculate their premiums.`,
              `While some insurance companies in Ghana have well-designed websites and mobile apps with customer-focused experiences, a majority lack those - getting a quote requires a phone call, filing a claim requires you to submit physical forms, and canceling a policy is nearly impossible, they try very hard to persuade you to change your mind even when you’re not satisfied with the service; the sad reality is most users ultimately give up.`,
              `These factors highlight some of the core issues facing policy buyers in the country and as a result directly increases the bad perception people have about the insurance industry as a whole.`,
            ]}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[2rem] gap-x-[2rem] md:gap-x-8 mb-[11.25rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="object-cover object-center"
            src="/images/projects/smart-insurance-1.png"
            alt="snapshot of mobile app"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="object-cover object-center"
            src="/images/projects/smart-insurance-2.png"
            alt="snapshot of mobile app"
          />
        </div>

        <div className="mb-[120px] pb-[120px] border-b border-secondary[/.25]">
          <HSection
            title="What we had to achieve"
            description={[
              `Before hopping into our seats to start designing, quite a number of things had to be first taken care of, starting with the core objectives of Smart Insurance. To avoid complexities that will make the product too difficult to use, the goals and parameters also needed to be crystal clear. Here are the things we needed to achieve to make the product a success;`,
              [
                "UNORDERED_LIST",
                [
                  `Give buyers the ability to compare and buy policies from various insurance companies by establishing a partnership with an insurance brokerage.`,
                  `Provide a flexible and transparent system where buyers can configure policy add-ons, clarifying how their premiums are calculated.`,
                  `Enable customers to easily file claims, submit incidents details online and give them the ability to track the progress and status of their claims.`,
                  `Use simple language in policy agreements to help buyers to readily understand them, thus preventing confusions that could ultimately lead to claim disputes.`,
                  `Give customers the ability to cancel or renew their insurance policies right within the application, and increase visitor conversion and retention rates by providing a frictionless experience with an intuitive interface.`,
                ],
              ],
            ]}
          />
        </div>
        <div className="mb-[120px]">
          <VSection
            title="Understanding the Ghanaian insurance market and learning from existing research metrics"
            description={[
              `It’s well known that a majority of Ghanaians by default have a perception of the insurance industry that skews a little to the negative side, we needed to understand the reason for this sentiment and ultimately gain data-backed insight about the public’s understanding of insurance concepts, products and companies.`,
              `We were fortunate to get these data from an existing research between Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) and the National Insurance Commission (NIC) that had been conducted to assess the public’s perception, awareness, and confidence of Insurance in Ghana.`,
              `The insurance perception and awareness assessment was conducted in all sixteen (16) regions of Ghana with a total of one thousand and thirty-eight (1,038) individual respondents. These individual respondents comprised two hundred and sixty-one (261) current insurance policyholders, four hundred and seventeen (417) non-policyholders, and three hundred and sixty (360) previous insurance policyholders located in urban, peri-urban and rural localities. In addition to individual interviews, a total of twenty-five (25) Focus Group Discussions (FGDs) with one hundred and thirty-five (135) participants were conducted.`,
            ]}
          />
        </div>
        <div className="mb-[120px]">
          <StatsSection
            title="Insurance perception and attitude"
            items={[
              {
                mainImg: "/images/stats/circular-50.svg",
                text: `About 50% of all insurance respondents believe insurance is expensive`,
                bottomImg: "",
              },
              {
                mainImg: "/images/stats/circular-65.svg",
                text: `About 65% of all insurance respondents believe insurance is about helping each other`,
                bottomImg: "",
              },
              {
                mainImg: "/images/stats/circular-60.svg",
                text: `60% of insurance respondents believe insurance companies would try to delay or make it difficult for policyholders during payouts`,
                bottomImg: "",
              },
            ]}
          />
        </div>
        <div className="mb-[120px]">
          <StatsSection
            title="Insurance Confidence"
            items={[
              {
                mainImg: "/images/stats/circular-46.7.svg",
                text: `The confidence of Ghanaians in Insurance is at 46.7 out of 100`,
                bottomImg: "",
              },
              {
                mainImg: "/images/stats/graph-1.svg",
                text: `Current policyholders (54.33%) are more confident in the insurance industry than non-policyholders (45.07%).`,
                bottomImg: "/images/stats/graph-1-ind.svg",
              },
              {
                mainImg: "/images/stats/circular-42.45.svg",
                text: `Previous policyholders are least confident (42.45%) in the insurance industry possibly as a result of not too good experience encountered with insurance companies`,
                bottomImg: "",
              },
            ]}
          />
        </div>
        <div className="mb-[120px]">
          <StatsSection
            title="Insurance Demand"
            className="xl:grid-cols-2"
            items={[
              {
                mainImg: "/images/stats/ratio-1.svg",
                text: `More than three out of five (60%) urban households have short-term insurance policies`,
                bottomImg: "",
              },
              {
                mainImg: "/images/stats/circular-90.svg",
                text: `Almost 90% of urban households have people who hold a commercial or business policy. It further shows that 83.3% hold property policy and 77.4% hold vehicle or motor policy`,
                bottomImg: "",
              },
            ]}
          />
        </div>
        <div className="mb-[120px]">
          <StatsSection
            title="Complaints and Disputes Resolution"
            items={[
              {
                mainImg: "/images/stats/circular-88.svg",
                text: `88% of respondents know of their rights to make complaints about insane products/services`,
                bottomImg: "",
              },
              {
                mainImg: "/images/stats/graph-2.svg",
                text: `Key issues resulting in complaints are 34% unauthorised deduction, 14% claim dispute, 12% enquiry`,
                bottomImg: "/images/stats/graph-2-ind.svg",
              },
              {
                mainImg: "/images/stats/circular-48.svg",
                text: `48% indicated they never have their complaints resolved`,
                bottomImg: "",
              },
              {
                mainImg: "/images/stats/circular-22.svg",
                text: `22% of respondents indicated that it took more than 1 month to get their complaints resolved`,
                bottomImg: "",
              },
              {
                mainImg: "/images/stats/circular-15.svg",
                text: `15% indicated that their complaints were never resolved`,
                bottomImg: "",
              },
            ]}
          />
        </div>
        <div className="mb-[clamp(150px,18vh,180px)] pb-[120px] border-b border-secondary[/.25]">
          <VSection
            description={[
              "In addition to providing valuable insight into the public’s experience with the insurance industry, the assessment enabled us to make some adjustments to streamline our initial product goals.",
            ]}
          />
        </div>
        <div className="mb-[70px]">
          <HSection
            title="Balancing product goals by addressing customer needs"
            description={[
              `“So who are we designing for?” Perhaps one of the most important questions to ask when building a true user-centric product. Now was the time to put the research data to use. We narrowed our focus on the demographic that constitutes the majority of insurance policy buyers in the country. The data indicated that the older the demographic, the better their understanding of insurance and the more likely they are to sign on to a new product. `,
              `We decided to target and understand this group’s frustrations, concerns, and expectations in order to design a product that really addresses their core needs and provides a satisfying user experience.`,
            ]}
          />
        </div>
        <div className="mb-[clamp(150px,18vh,180px)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="object-cover object-top"
            src="/images/projects/smart-insurance-3.png"
            alt="snapshot of dashboard"
          />
        </div>
        <div className="mb-[70px]">
          <HSection
            title="Putting ourselves in our customers’ shoes to better understand their needs"
            description={[
              `We created an empathy map to help us visualise the thoughts and feelings of our customers to gain a holistic view of their world and problems. As we progressed further down the project, we often turned to this as a guide when unsure of certain decisions`,
            ]}
          />
        </div>
        <div className="mb-[clamp(150px,18vh,180px)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="object-cover object-top"
            src="/images/projects/smart-insurance-4.png"
            alt="snapshot of dashboard"
          />
        </div>
        <div className="mb-[clamp(150px,18vh,180px)]">
          <VSection
            title="Understand"
            description={[
              "Discussion and brainstorming sessions helped us to understand the user’s needs more through a variety of problems which could very likely lead to customer complaints and frustrations.",
            ]}
          />
        </div>
        <div className="mb-[clamp(150px,18vh,180px)] pb-[120px] border-b border-secondary[/.25]">
          <VSection
            title="Point of View (POV)"
            description={[
              "Defining the POV helped us during our ideation sessions to focus on solving our target user’s main problem. As with the persona, it was an actionable problem statement that was used in defining the right challenges to address and resolving them in an goal-oriented manner.",
            ]}
          />
          <div className="mt-[70px]">
            <FeatureSection
              items={[
                {
                  title: "User",
                  icon: "/images/icons/user.svg",
                  text: "Users in Ghana who downloaded the Smart Insurance app from the App Store, Playstore or visited the website after seeing a social media  advertisement or a friend’s recommendation",
                },
                {
                  title: "Needs",
                  icon: "/images/icons/user.svg",
                  text: "Users want to be able to compare the rates of multiple insurance providers and choose an option that meets their budget and needs.",
                },
                {
                  title: "Insight",
                  icon: "/images/icons/eye.svg",
                  text: "Purchasing and renewing policies, filing claims, and even paying premiums can be stressful when dealing with most insurance providers in Ghana.",
                },
              ]}
            />
          </div>
        </div>
        <div className="mb-[120px]">
          <HSection
            title="A frictionless user flow for purchasing insurance"
            description={[
              `We created a user flow to help visualise the ideal path a customer would take in order to complete a policy purchase.  Even though there could be alternative paths in the real world, we focused on a simple happy path that shows the steps a new user will navigate through or screens they will interact with when buying the policy. The goal was to ensure as little onboarding time as possible to increase conversion rate; prospects could become frustrated, lose interest, or leave if the process is too long.`,
            ]}
          />
        </div>
        <div className="mb-[120px] pb-[120px] border-b border-secondary[/.25]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="object-cover object-top"
            src="/images/projects/smart-insurance-5.png"
            alt="Flowchat"
          />
        </div>
        <div className="mb-[120px]">
          <HSection
            title="Wireframes"
            description={[
              `Once we laid out our user flows for the core services of Smart Insurance, it was time to work on schematic representations of what we wanted to see in the final design while having our POV as a compass in-hand.`,
              `I sketched out wireframes of the screens on plain sheets of paper (I personally prefer this to other methods) allowing us to visualize our ideas, quickly move contents and elements around, and in some instances make big changes within a relatively short timeframe. `,
              `We moved forward with creating high fidelity prototypes once the wireframes had been validated and approved by my teammates, ensuring that it passed heuristic tests before moving forward.`,
            ]}
          />
        </div>
        <div className="mb-[120px] pb-[120px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="object-cover object-top"
            src="/images/projects/smart-insurance-6.png"
            alt="Flowchat"
          />
        </div>
        <div className="mb-[70px]">
          <HSection
            title="A conversion-driven home page designed to provide utmost clarity about the product’s services."
            description={[
              `In addition to being a significant component of Smart Insurance, the home page served as the beginning of our customers’ journey, stimulating them into our conversion funnel. We kept the design simple with short and concise text so that it is easy for them to understand and interact with the page’s contents.`,
            ]}
          />
        </div>
      </Container>
      <div role="banner" className="mb-[clamp(180px,18.4vh,189px)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="object-cover object-top"
          src="/images/projects/smart-insurance-7.png"
          alt="snapshots of smart insurance project"
        />
      </div>
      <Container>
        <div className="mb-[clamp(150px,18vh,180px)]">
          <HSection
            title="A user-friendly authentication and onboarding experience."
            description={[
              `Most users are already accustomed to lightening fast authentication and smooth onboarding experiences, anything that doesn’t offer the same convenience could discourage them and affect return rates to a degree.`,
            ]}
          />
          <div className="grid grid-cols-1 gap-8 mt-[70px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="object-cover object-top"
              src="/images/projects/smart-insurance-8.png"
              alt="snapshots of smart insurance project"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="object-cover object-top"
              src="/images/projects/smart-insurance-9.png"
              alt="snapshots of smart insurance project"
            />
          </div>
        </div>
        <div className="mb-[clamp(150px,18vh,180px)]">
          <HSection
            title="A hassle-free way to buy and manage home, travel, and motor insurance policies."
            description={[
              `One of our primary goals was to make buying an insurance policy as easy and stress-free as possible, as most insurance policy buyers in Ghana aren’t used to the process. We gave customers the ability to compare quotes from a variety of providers and added the option to alter the rates by adding or removing policy add-ons.`,
            ]}
          />
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="object-cover object-top"
              src="/images/projects/smart-insurance-10.png"
              alt="snapshots of smart insurance project"
            />
          </div>
        </div>
        <div className="mb-[clamp(150px,18vh,180px)] grid grid-cols-1 md:grid-cols-2 gap-[2rem] ">
          <div>
            <VSection
              title="A natural and familiar navigation structure that guides users quickly to desired content or functionality"
              description={[
                `An app’s navigation is often not apparent to the user until it fails to meet their expectations. We used a tab based navigation UI and iOS’s flat navigation structure to highlight the most important section of our app as well as make it quicker for users to find their desired content.`,
              ]}
            />
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="mx-auto object-cover object-top"
              src="/images/projects/smart-insurance-11.png"
              alt="smart insurance snapshot"
            />
          </div>
          <div className="md:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="mx-auto object-cover object-top"
              src="/images/projects/smart-insurance-12.png"
              alt="smart insurance snapshot"
            />
          </div>
        </div>
        <div className="mb-[clamp(150px,18vh,180px)]">
          <HSection
            title="Providing invoices to help customers stay on top of their payments"
            description={[
              `Upon purchase of each policy on Smart Insurance, invoices are generated and sent to users as part of an effort to facilitate transparency and avoid misunderstandings. They provide information such as dates of transactions, amounts paid, and modes of payment, and show more details when the user taps on an invoice.`,
            ]}
          />
          <div className="grid grid-cols-1 gap-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="object-cover object-top"
              src="/images/projects/smart-insurance-14.png"
              alt="snapshots of smart insurance project"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="object-cover object-top"
              src="/images/projects/smart-insurance-15.png"
              alt="snapshots of smart insurance project"
            />
          </div>
        </div>
        <div className="mb-[clamp(150px,18vh,180px)] grid grid-cols-1 md:grid-cols-2 gap-[2rem] ">
          <div>
            <VSection
              title="Notifications and reminders"
              description={[
                `Being charged a penalty for forgetting to renew a policy before its expiration was one of the pain point we sought out to address with our notifications feature. We kept our customers informed of any developments related to their accounts and purchases, as well as reminders of time-sensitive items.`,
              ]}
            />
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="mx-auto object-cover object-top"
              src="/images/projects/smart-insurance-16.png"
              alt="smart insurance snapshot"
            />
          </div>
        </div>
        <div className="mb-[clamp(150px,18vh,180px)]">
          <HSection
            title="Streamlining the process of filing, managing, and tracking claims"
            description={[
              `We wanted to give customers a better claim experience than they are used to. Instead of commuting to the providers’ offices and filling out paper forms, they could file for claims from their homes. Additionally, we let them track the progress of their claims and notified them regularly about its status.`,
            ]}
          />
          <div className="mt-[60px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="mx-auto object-cover object-top"
              src="/images/projects/smart-insurance-17.png"
              alt="smart insurance snapshot"
            />
          </div>
        </div>
        <div className="mb-[clamp(150px,18vh,180px)] grid grid-cols-1 md:grid-cols-2 gap-[2rem] ">
          <div>
            <VSection
              title="Ensuring that customers can easily access information about their insurance policies."
              description={[
                `For account-related inquiries, most insurance providers require their customers to visit their offices. A significant percentage of customers are unable to access their policy information on their own. `,
                `In addition to letting our customers view their policies and its details, we also provided them with certain control options such as canceling, renewing, and purchasing a new policy.`,
              ]}
            />
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="mx-auto object-cover object-top"
              src="/images/projects/smart-insurance-18.png"
              alt="smart insurance snapshot"
            />
          </div>
        </div>
        <div className="mb-[clamp(150px,18vh,180px)]">
          <HSection
            title="Insightful overview of account activity on the dashboard"
            description={[
              `On the dashboard, customers are able to quickly monitor high priority activities such as the progress of their claims as well as receive minimal analytical information about their account.`,
            ]}
          />
          <div className="mt-[60px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="mx-auto object-cover object-top"
              src="/images/projects/smart-insurance-19.png"
              alt="smart insurance snapshot"
            />
          </div>
        </div>
        <div className="mb-[clamp(150px,18vh,180px)]">
          <VSection
            title="Conclusion"
            description={[
              `As a result of using the design thinking process, we were able to efficiently solve the key issues we outlined at the beginning of the project, including;`,
              [
                "UNORDERED_LIST",
                [
                  ` Helping budget-constrained insurance policy buyers find great and affordable rates by giving them the option of choosing from a various providers.`,
                  `Eliminating the dreadful stress users experience while filing or managing their claims.`,
                  `Keeping the customer informed about any account-related developments and being transparent about finance-related issues.`,
                ],
              ],
              `Despite knowing the product we had built had the potential of meeting up to the demands of most insurance policy buyers in Ghana, we still had plans to further improve its general user experience in order to transform it into an even superior product, setting the standard of what a basic insurance service should be.`,
            ]}
          />
        </div>
        <div className="mb-[clamp(150px,18vh,180px)]">
          <VSection
            title="Retrospective"
            description={[
              ["HEADING", `Challenges`],
              `One problem that kept bugging me throughout the UI design process had to do with the frequent use of dummy text at certain places. There wasn’t a copywriter on the team so I had fill in and wear that cap, exciting as it was initially, it became a torn in my flesh as I had to constantly pause designing when in the “flow” and shift focus to copywriting. Being design-biased often resulted in short and unrealistically concise titles and labels to make the design prettier, I also often spent some time pondering about text properties under certain conditions such as text overflow and dynamic font sizing. `,
              ["HEADING", `What could have been improved?`],
              `As a standard requirement, first time policy buyers are required to provide a lot personal information, including details they provided when they registered for their accounts. Repetitive as it may seem, we’re compelled by our Insurance brokerage to collect such information as part of our compliance with their policy. This was a recurring complaint amongst a majority of our early beta testers.  We could benefit greatly if we are able to tackle this issue, as small as it may seem.`,
              ["HEADING", `What’s next?`],
              `We kept iterating and improving the overall design and experience feedback-after-feedback from our testers, chipping away certain features that were deemed a little to sophisticated for a beta product, and ones that didn’t necessarily address the core needs of our target audience.`,
            ]}
          />
        </div>
        <div className="flex justify-between mb-[72.5px] transition-all">
          <Link href="/work/pesewa" passHref>
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
