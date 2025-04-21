import React, { useEffect, useState } from "react";
import BouncingArrowDown from "../components/BouncingArrowDown";
import Button from "../components/Button";
import GradientText from "../components/GradientText";
import ServiceCard from "../components/ServiceCard";
import Card from "../components/Card";
import WhatWeDoCard from "../components/WhatWeDoCard";

import CircularText from "../components/CircularText";
import logoOutlineWhite from "../assets/images/tcf-outline-white.svg";
import CompaniesCard from "../components/CompaniesCard";
import { color, frame } from "motion/react";
import heroNoiseImage from "../assets/images/hero-noise-image.svg";
import frame1 from "../assets/images/Frame1.svg";
import frame2 from "../assets/images/Frame2.svg";
import frame3 from "../assets/images/Frame3.svg";
import frame4 from "../assets/images/Frame4.svg";
import frame5 from "../assets/images/Frame5.svg";
import frame6 from "../assets/images/Frame6.svg";
import FAQCard from "../components/FAQCard";

// const companies = [
//   {
//     icon: <AcademicCapIcon className="size-10" />,
//     value: "Education & Institutions",
//     desc: "We skipped class to build better systems.",
//   },
//   {
//     icon: <RocketLaunchIcon className="size-10" />,
//     value: "Startups",
//     desc: "Your ambition deserves a proper liftoff.",
//   },
//   {
//     icon: <BuildingOffice2Icon className="size-10" />,
//     value: "Enterprises",
//     desc: "Size matters. So does good design.",
//   },
//   {
//     icon: <ShoppingBagIcon className="size-10" />,
//     value: "E-commerce Brands",
//     desc: "A smooth checkout is just the beginning.",
//   },
//   {
//     icon: <UserGroupIcon className="size-10" />,
//     value: "Agencies",
//     desc: "Collaboration without headaches.",
//   },
//   {
//     icon: <MapPinIcon className="size-10" />,
//     value: "Hospitality & Tourism",
//     desc: "Put your destination on the digital map.",
//   },
//   {
//     icon: <BriefcaseIcon className="size-10" />,
//     value: "Professional Services",
//     desc: "Professional doesn’t have to mean boring.",
//   },
//   {
//     icon: <ChartBarIcon className="size-10" />,
//     value: "SMEs",
//     desc: "Punch up, not sideways.",
//   },
//   {
//     icon: <HeartIcon className="size-10" />,
//     value: "Nonprofits & NGOs",
//     desc: "Doing good, looking great.",
//   },
// ];

// const servidces = [
//   {
//     title: "Website Development",
//     desc: "We architect digital spaces where your brand thrives. Whether it's a startup landing page, a school portal, or an online menu that makes your customers hungry, we turn ideas into interactive experiences. Clean code, responsive design, zero fluff.",
//     image: webDev,
//   },
//   {
//     title: " Digital Presence",
//     desc: "We make sure your business shows up where it matters—Google, maps, search, and beyond. From domain setup to custom business emails and SEO basics, we handle the invisible parts that make you visible.",
//     image: precence,
//   },
//   {
//     title: " E-Commerce Solutions",
//     desc: "We bring your store to screens—TikTok, WhatsApp, or your own site. M-Pesa integration? Done. Smooth product management? Built-in. Your customers shop easier. You sell smarter. Everyone wins.",
//     image: ecommerce,
//   },
//   {
//     title: "Smart Integrations",
//     desc: "Why waste time on repetitive tasks when we can build systems that think for you? From auto-sending school announcements to WhatsApp order confirmations, we wire up tools that talk to each other—so you can focus on running your business, not your inbox.",
//     image: intergration,
//   },
// ];

const services = [
  { title: "Website Development" },
  { title: "eCommerce Solutions" },
  { title: "UI/UX & Responsive Design" },
  { title: "CMS & Content Management" },
  { title: "Integrations & Automation" },
  { title: "Hosting & Ongoing Support" },
];

const companies = [
  { title: "Startups", image: frame1 },
  { title: "SMBs", image: frame2 },
  { title: "Enterprises", image: frame3 },
  { title: "Agencies", image: frame4 },
  { title: "Non-Profits", image: frame5 },
  { title: "", image: frame6 },
];

const colors = [
  ["tan", "black"],
  ["dark-brown", "white"],
  ["light-yellow", "dark-primary"],
  ["white", "brown"],
  ["accent", "white"],
  ["dark-tan", "black"],
];

const faqs = [
  {
    title: 'How long does a typical project take?',
    desc: 'Project timelines depend on the scope and complexity of the work. A standard website usually takes 2–4 weeks, while larger or custom projects may take longer. Clear communication and timely feedback help keep everything on track.'
  },
  {
    title: 'What do you need to get started?',
    desc: 'We’ll need a brief overview of your goals, any existing assets (like logos, content, or brand guidelines), and a quick onboarding call to clarify expectations. From there, we’ll handle the roadmap and walk you through every step.'
  },
  {
    title: 'Do you offer ongoing support?',
    desc: 'Yes. We provide post-launch support, routine maintenance, and content updates to ensure your site stays secure, fast, and up-to-date. Ongoing support can be one-time, monthly, or part of a broader service package.'
  },
  {
    title: 'Can you work with my existing website or system?',
    desc: 'Absolutely. Whether it’s a small update, full redesign, or integration with third-party systems, we can work with your existing infrastructure and recommend the best path forward.'
  },
  {
    title: 'What kind of businesses do you work with?',
    desc: 'We collaborate with startups, small and medium-sized businesses, enterprise teams, schools, nonprofits, and creative professionals. If you have a digital vision, we’re here to bring it to life—regardless of your size or industry.'
  },
  {
    title: 'Do you build eCommerce sites?',
    desc: 'Yes. We build eCommerce solutions that are fast, secure, and designed to convert—complete with product listings, payment gateways (like M-Pesa, PayPal, and Stripe), cart functionality, and order management tools.'
  },
  {
    title: 'Is SEO included in the build?',
    desc: 'Every site is built with on-page SEO best practices in mind—from clean code and mobile responsiveness to optimized meta tags and site speed. For more advanced SEO strategy, we offer optional add-ons or partner recommendations.'
  },
  {
    title: 'How is pricing structured?',
    desc: 'Pricing is based on the size, complexity, and features of your project. After an initial consultation, we’ll provide a custom quote outlining the deliverables, timeline, and cost breakdown—no surprises, no hidden fees.'
  }
];


const Home = () => {
  const [isHovered, setIsHovered] = useState(0);
  useEffect(() => {
    document.title = "The Code Factory | Your Website Built RIght";
  }, []);

  const setHovered = (num) => {
    setIsHovered(num);
  };

  return (
    <>
      <div>
        <div
          className="h-[95vh]"
          style={{
            backgroundImage: `url(${heroNoiseImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className=" px-6 lg:px-12 flex flex-col justify-end h-[90vh]">
            <div className="flex flex-col gap-2 lg:w-[60%] w-[90%]">
              <h2 className="font-bold text-whifte text-4xl lg:text-6xl text-primary">
                Your Brand Deserves Better Than a Template
              </h2>
              <p className="font-secondary text-lg lg:text-xl text-dark-brown hidden lg:block">
                We don’t just build websites—we engineer experiences. Crafted
                from strategy, sharpened with design, and powered by clean code,
                every site we ship is a digital flagship. If your brand’s future
                lives online, we’re the ones who’ll build it a home worth
                showing off.
              </p>
              <p className="font-secondary text-lg lg:text-xl text-dark-brown  lg:hidden">
                We craft digital experiences that blend function, beauty, and
                performance.
              </p>
            </div>
            <div className="flex justify-between items-end mt-6 lg:mb-12">
              <div className="hidden lg:block">
                <Button
                  title="Get Started"
                  to={"/contact"}
                  style={{ fontSize: "1.25rem " }}
                />
              </div>
              <div className=" lg:hidden">
                <Button
                  title="Get Started"
                  to={"/contact"}
                  style={{ fontSize: "1rem " }}
                />
              </div>
              <div className="lg:flex items-end lg:gap-4 hidden lg:block">
                <a
                  href="#explore"
                  className="border-b-2  font-primary text-white text-lg lg:text-xl hover:text-dark-brown transition-all duration-500"
                >
                  Explore
                </a>
                <BouncingArrowDown color={"white"} />
              </div>
            </div>

            <div className="lg:hidden ">
              <BouncingArrowDown color={"white"} />
            </div>
          </div>
        </div>

        <div
          className="flex flex-col justify-center items-center  text-center text-4xl  lg:text-6xl px-6 lg:px-12 pt-12 py-18 pb-8 h-[50vh] lg:h-[80vh]"
          id="explore"
        >
          <div className="flex gap-2 mb-6">
            <div className="bg-light-yellow text-xs lg:text-base text-primary rounded-full px-3 py-1">
              Trusted by top brands
            </div>
            <div className="bg-light-yellow text-xs lg:text-base text-primary rounded-full px-3 py-1">
              Creating digital success stories
            </div>
          </div>
          <h2 className="font-primary text-dark-brown">
            Purposeful design
            <br />
            <span className="text-black"> Empowering brands to thrive</span>
          </h2>
        </div>

        <div className="px-6 lg:px-12 pb-8 bg-white flex mt-12 lg:mt-18">
          <div className="lg:w-[50%] hidden lg:block"></div>
          <div className="lg:w-[60%]">
            <div>
              <h2 className="font-primary text-dark-brown font-medium text-lg lg:text-xl uppercase">
                Inside The Factory
              </h2>
              <p className="font-primary text-2xl lg:text-5xl mt-4 lg:mt-6">
                From startups to scale-ups, we combine expertise, creativity,
                and precision to craft websites that leave a mark.
              </p>

              <div className="mt-8">
                <Card
                  desc="We’re a team of thinkers, builders, and digital craftsmen who thrive on turning complex problems into clean, impactful solutions. From strategy to code, design to deployment, we bring together a diverse group of specialists who are as obsessed with functionality as they are with aesthetics. Whether it’s your brand’s first digital footprint or the hundredth iteration of your product, we approach every project with the same mindset: build it smart, build it fast, and make it look damn good while we’re at it."
                  bg="primary"
                  title={"The Team"}
                />

                <div className="flex flex-col lg:flex-row gap-4 mt-6">
                  <Card
                    desc="We’re not here to follow trends — we’re here to set them. Our vision is a digital world where brands don’t just exist, they dominate. From bold startups to growing empires, we build the platforms that power real impact and leave a mark online."
                    title="Our Vision"
                    bg="tan"
                  />
                  <Card
                    desc="Clean code. Sharp design. Brutal honesty. We believe in doing the work, doing it right, and never settling for “good enough.” At TCF, precision isn’t a goal — it’s the baseline. Collaboration, creativity, and chaos-taming are how we get it done."
                    title="Our Values"
                    bg="tan"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`bg-primary mt-12 px-6 lg:px-12 pt-12 pb-8`}>
          <div className="lg:w-1/2">
            <h2 className="font-primary text-tan font-medium text-lg lg:text-xl uppercase">
              Services
            </h2>
            <p
              className={`text-white font-primary text-2xl lg:text-5xl mt-4 lg:mt-6`}
            >
              Crafting user-centric web solutions, that are built to drive
              growth and elevate businesses.
            </p>
          </div>

          <div className="flex gap-2 lg:gap-4 mt-6 lg:mt-8 flex-wrap justify-between">
            {services.map((service, index) => (
              <ServiceCard
                setHovered={setHovered}
                hovered={isHovered}
                title={service.title}
                key={index}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="">
          <div className="lg:w-1/2 mt-12 px-6 lg:px-12 pt-12 pb-8">
            <h2 className="font-primary text-brown font-medium text-lg lg:text-xl uppercase">
              Who It's All For
            </h2>
            <p
              className={`text-black font-primary text-2xl lg:text-5xl mt-4 lg:mt-6`}
            >
              From fresh ideas to established names, this is for anyone ready to
              make an impact online. Startups, growing brands, schools,
              creatives, and everything in between — if there's a vision,
              there's a way to build it.
            </p>
          </div>

          <div className="flex mt-6 lg:mt-12 flex-col lg:flex-row flex-wrap lg:flex-nowrap gap-4 lg:gap-0 px-4 lg:px-0">
            {companies.map((company, index) => (
              <WhatWeDoCard
                image={company.image}
                key={index}
                title={company.title}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 px-6 lg:px-12 pt-12 pb-8">
          <div className="lg:w-1/2 ">
            <h2 className="font-primary text-brown font-medium text-lg lg:text-xl uppercase">
              Answers to Common Questions
            </h2>
            <p
              className={`text-black font-primary text-2xl lg:text-5xl mt-4 lg:mt-6`}
            >
              Got a question? Here are the ones people ask the most — and yes,
              we actually answered them. No fluff, no filler, just the stuff you
              need to know.
            </p>
          </div>

            <div className="mt-12 flex flex-col gap-4">
           {faqs.map((faq, index )=> <FAQCard key={index} title={faq.title} desc={faq.desc} index={index} />)}
            </div>

        </div>

        <div className="text-center mt-12 flex flex-col gap-4 pb-12 bg-gradient-to-b from-white to-tan px-6 lg:px-12 py-12 lg:py-24">
          <p className="font-primary font-bold text-3xl lg:text-5xl text-dark-brown ">
            You’re Here. Your Competition Isn’t. Let’s Keep It That Way.
          </p>
          <Button title="Get Started" to="/contact" />
        </div>
      </div>
    </>
  );
};

export default Home;
