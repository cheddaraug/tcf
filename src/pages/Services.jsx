import React, { useEffect } from "react";
import Card from "../components/ServiceCard";

import logoOutline from "../assets/images/tcf-outline-logo.svg";
import webDev from "../assets/images/web-dev.png";
import precence from "../assets/images/precence.png";
import intergration from "../assets/images/intergration.png";
import ecommerce from "../assets/images/ecommerce.png";
import WhoServeCard from "../components/WhoServeCard";
import Button from "../components/Button";

const services = [
  {
    title: "Website Development",
    desc: "We architect digital spaces where your brand thrives. Whether it's a startup landing page, a school portal, or an online menu that makes your customers hungry, we turn ideas into interactive experiences. Clean code, responsive design, zero fluff.",
    image: webDev,
  },
  {
    title: " Digital Presence",
    desc: "We make sure your business shows up where it matters—Google, maps, search, and beyond. From domain setup to custom business emails and SEO basics, we handle the invisible parts that make you visible.",
    image: precence,
  },
  {
    title: " E-Commerce Solutions",
    desc: "We bring your store to screens—TikTok, WhatsApp, or your own site. M-Pesa integration? Done. Smooth product management? Built-in. Your customers shop easier. You sell smarter. Everyone wins.",
    image: ecommerce,
  },
  {
    title: "Smart Integrations",
    desc: "Why waste time on repetitive tasks when we can build systems that think for you? From auto-sending school announcements to WhatsApp order confirmations, we wire up tools that talk to each other—so you can focus on running your business, not your inbox.",
    image: intergration,
  },
];

const whoWeServe = [
  "Ambitious startups",
  "Growing restaurants & lounges",
  "Private and public schools",
  " TikTok & Instagram sellers",
  " Local stores going digital",
  "Hotels & guesthouses",
  "Service-based businesses",
];

const Services = () => {
  useEffect(() => {
    document.title = "Services | What We Do - The Code Factory";
  }, []);
  return (
    <>
      <div className="">
        <div className=" px-6 lg:px-12 pt-12 pb-8 bg-gradient-to-b from-tan to-white">
          <p className="font-primary font-bold text-primary text-5xl lg:w-[80%] lg:text-7xl">
            We Build More Than Just Websites. We Engineer Your Entire Digital
            Presence
          </p>

          <div className="flex justify-between items-start mt-8">
            <h2 className="hidden lg:block font-secondary text-brown text-2xl font-bold uppercase">
              Services
            </h2>
            <p className="font-secondary text-brown font-semibold lg:text-lg lg:w-[60%]">
              We don’t make online brochures. We craft conversion
              engines—tailored for your business, your audience, and your goals.
              Whether you're selling chicken, running a school, or making waves
              on TikTok, we build with one outcome in mind: results.
            </p>
          </div>
        </div>

        <div className="bg-white px-6 lg:px-12 font-primary font-bold text-2xl lg:text-5xl  py-12 lg:py-24  ">
          <h2 className=" text-dark-brown text-3xl lg:text-5xl lg:w-[80%] mb-8">
            Everything Your Business Needs to Go Digital—Without the Guesswork
            or the Gimmicks.
          </h2>
          <div className="flex  mt-6 lg:mt-24 gap-12 items-start justify-between ">
            <img src={logoOutline} alt="" className="hidden lg:block pl-12 " />
            <div className="flex flex-wrap gap-8 lg:mx-auto   justify-end">
              {services.map((service, index) => (
                <Card
                  image={service.image}
                  title={service.title}
                  desc={service.desc}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 lg:px-12">
          <h2 className="font-primary text-3xl lg:text-5xl font-bold text-dark-brown">
            Our Favorite Targets
          </h2>
          <div className="mt-8 flex flex-wrap flex-col lg:flex-row gap-6">
            {whoWeServe.map((target, index) => (
              <WhoServeCard title={target} key={index} />
            ))}
            <WhoServeCard
              title={"Anyone tired of “meh” websites"}
              style={{
                border: "dotted, 2px #ed5726",
                background: "transparent",
                borderColor: "#ed5726",
              }}
              textStyle={{ color: "#6c6354" }}
            />
          </div>
          <div className="mt-6">
            <h2 className="font-primary font-bold text-xl lg:text-2xl mb-4">
              {" "}
              Need something different?
            </h2>
            <p className="font-bold text-brown text-lg lg:text-xl lg:w-[60%]">
              We also build landing pages, portfolio sites, event sites,
              internal dashboards—you name it. If it's on the web, we can
              probably build it. And if we can’t, we’ll tell you straight.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 flex flex-col gap-4 pb-12 bg-gradient-to-b from-white to-tan px-6 lg:px-12 py-12 lg:py-24" >
          <p className="font-primary font-bold text-3xl lg:text-5xl text-dark-brown ">Still reading? Nice. Let’s make something.</p>
          <Button title="Claim Your Spot Online" to='/contact' />
        </div>
      </div>
    </>
  );
};

export default Services;
