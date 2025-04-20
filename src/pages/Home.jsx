import React, { useEffect } from "react";
import BouncingArrowDown from "../components/BouncingArrowDown";
import Button from "../components/Button";
import GradientText from "../components/GradientText";


import CircularText from "../components/CircularText";
import logoOutlineWhite from "../assets/images/tcf-outline-white.svg";
import CompaniesCard from "../components/CompaniesCard";
import heroNoiseImage from "../assets/images/hero-noise-image.svg";


import {
  RocketLaunchIcon,
  ChartBarIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  ShoppingBagIcon,
  AcademicCapIcon,
  MapPinIcon,
  BriefcaseIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import webDev from "../assets/images/web-dev.png";
import precence from "../assets/images/precence.png";
import intergration from "../assets/images/intergration.png";
import ecommerce from "../assets/images/ecommerce.png";
import WhoServeCard from "../components/WhoServeCard";
import ServiceCard from "../components/ServiceCard";

const companies = [
  {
    icon: <AcademicCapIcon className="size-10" />,
    value: "Education & Institutions",
    desc: "We skipped class to build better systems.",
  },
  {
    icon: <RocketLaunchIcon className="size-10" />,
    value: "Startups",
    desc: "Your ambition deserves a proper liftoff.",
  },
  {
    icon: <BuildingOffice2Icon className="size-10" />,
    value: "Enterprises",
    desc: "Size matters. So does good design.",
  },
  {
    icon: <ShoppingBagIcon className="size-10" />,
    value: "E-commerce Brands",
    desc: "A smooth checkout is just the beginning.",
  },
  {
    icon: <UserGroupIcon className="size-10" />,
    value: "Agencies",
    desc: "Collaboration without headaches.",
  },
  {
    icon: <MapPinIcon className="size-10" />,
    value: "Hospitality & Tourism",
    desc: "Put your destination on the digital map.",
  },
  {
    icon: <BriefcaseIcon className="size-10" />,
    value: "Professional Services",
    desc: "Professional doesn’t have to mean boring.",
  },
  {
    icon: <ChartBarIcon className="size-10" />,
    value: "SMEs",
    desc: "Punch up, not sideways.",
  },
  {
    icon: <HeartIcon className="size-10" />,
    value: "Nonprofits & NGOs",
    desc: "Doing good, looking great.",
  },
];

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

const Home = () => {
  useEffect(() => {
    document.title = "The Code Factory | Your Website Built RIght";
  }, []);

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
            <div className="flex flex-col gap-2 lg:w-[60%]">
            <h2 className="font-bold text-whifte text-4xl lg:text-6xl text-primary">Your Brand Deserves Better Than a Template</h2>
            <p className="font-secondary text-lg lg:text-xl text-dark-brown">We don’t just build websites—we engineer experiences. Crafted from strategy, sharpened with design, and powered by clean code, every site we ship is a digital flagship. If your brand’s future lives online, we’re the ones who’ll build it a home worth showing off.</p>
            </div>
            <div className="flex justify-between items-end mt-6">
              <Button title='Get Started' to={'/contact'} style={{fontSize: '1.25rem ', }}/>
              <div className="lg:flex items-end lg:gap-4 hidden lg:block">
                <p className="border-b-2  font-primary text-white text-lg lg:text-xl ">Explore</p>
                <BouncingArrowDown color={'white'}/>
              </div>
            </div>

            <div className="lg:hidden ">
            <BouncingArrowDown color={'white'} />
            </div>
          </div>
        </div>

        <div className="px-6 lg:px-12 pt-12 pb-8 bg-tan"></div>

        <div className="bg-tan pt-12 flex flex-col gap-4 lg:mt-24 mt-6 text-center">
          <p className="text-dark-brown font-primary text-xl font-semibold lg:text-2xl">
            What We Do
          </p>
          <p className="font-primary font-bold text-brown text-3xl lg:text-5xl text-brown">
            At The Code Factory, we don’t just build websites—we engineer
            digital experiences that get results. From sleek designs to seamless
            functionality, everything we create is tailored to help your
            business stand out, scale up, and stay ahead..
          </p>
        </div>

        <div className="bg-tan pt-12 flex flex-col gap-4 lg:mt-12 mt-6 text-center">
          <p className="text-dark-brown font-primary text-xl font-semibold lg:text-2xl">
            Companies We Serve
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {companies.map((company, index) => (
              <CompaniesCard key={index} company={company} />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-b from-tan to-primary pt-12 flex flex-col gap-4   px-6 lg:px-12">
          <p className="text-dark-brown font-primary text-xl font-semibold lg:text-2xl text-center">
            Our Services
          </p>
          <div className="flex flex-col lg:flex-row gap-8 lg:flex-wrap  justify-center">
            {services.map((service, index) => (
              <ServiceCard
                image={service.image}
                title={service.title}
                desc={service.desc}
                key={index}
              />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-b from-primary to-white pt-12 flex flex-col gap-4  px-6 lg:px-12">
          <p className="text-dark-brown font-primary text-xl font-semibold lg:text-2xl">
            Who We Are
          </p>
          <p className="font-primary font-bold text-brown text-3xl lg:text-5xl ">
            We are The Code Factory — a team of makers, shapers, and digital
            schemers. We don’t just build websites; we craft online powerhouses
            built to perform, scale, and look damn good doing it. Fueled by
            strategy, design, and a touch of caffeine-induced brilliance, we
            turn ideas into sleek, high-performing platforms. While others build
            websites, we build what they wish they had.{" "}
          </p>
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
