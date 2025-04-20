import { useEffect } from "react";
import Button from "../components/Button";
import ProcessCard from "../components/ProcessCard";

import discoveryImage from "../assets/images/discovery-image.jpg";
import designImage from "../assets/images/design-image.jpg";
import developmentImage from "../assets/images/development-image.jpg";
import launchImage from "../assets/images/launch-image.jpg";
import postImage from "../assets/images/post-image.jpg";
import reviewImage from "../assets/images/review-image.jpg";

const process = [
  {
    image: discoveryImage,
    title: "Discovery & Research",
    desc: {
      title: "We ask the right questions, then question the answers.",
      desc: "Before a single pixel is placed, we tear through your goals, dissect your competition, and figure out exactly what your users want—even if they don’t know it yet.",
    },
    steps: [
      {
        sub: "Interrogation (Initial Consultation):",
        desc: "You talk. We listen. And yes, we’re taking notes.",
      },
      {
        sub: "Competitive Intel (Market Analysis):",
        desc: "We find out what your rivals are doing. Then outdo them.",
      },
      {
        sub: "User Profiling (User Research):",
        desc: "We get inside your users’ heads—legally, mostly.",
      },
    ],
  },
  {
    image: designImage,
    title: "Design & Wireframing",
    desc: {
      title: "Pretty is easy. Smart is rare.",
      desc: "This is where ideas become structure. We sketch out sleek layouts that not only look amazing but guide users like mind control (the ethical kind).",
    },
    steps: [
      {
        sub: "Blueprint Mode (Wireframing):",
        desc: "Boxes, grids, logic. Not sexy, but essential.",
      },
      {
        sub: "Visual Strategy (Design Direction):",
        desc: "Your brand, but turned up to 11.",
      },
      {
        sub: "UX Thinking:",
        desc: "Designed for humans, not committee meetings.",
      },
    ],
  },
  {
    image: developmentImage,
    title: "Development",
    desc: {
      title: "We turn caffeine into code. Beautiful, clean, scalable code.",
      desc: "No bloated templates. No spaghetti code. Just custom builds that load fast, work flawlessly, and impress your nerd friends.",
    },
    steps: [
      {
        sub: "Custom Code:",
        desc: "Built from scratch. Just like grandma’s lasagna.",
      },
      {
        sub: "Speed & Responsiveness:",
        desc: "Because no one waits for slow sites.",
      },
      {
        sub: "Cross-Device Testing:",
        desc: "It’ll look good everywhere—yes, even on that weird Android phone.",
      },
    ],
  },
  {
    image: reviewImage,
    title: "Review & Revisions",
    desc: {
      title: "You nitpick. We optimize. Everyone wins.",
      desc: "We hand it over. You poke holes. We patch and polish. Feedback isn’t just welcome—it’s part of the process.",
    },
    steps: [
      {
        sub: "First Reveal:",
        desc: "Your first look. Prepare to be impressed.",
      },
      {
        sub: "Feedback Loop:",
        desc: "Tell us what you love and what you… don’t.",
      },
      {
        sub: "Refinements:",
        desc: "Better, sharper, tighter. We iterate until it’s elite.",
      },
    ],
  },
  {
    image: launchImage,
    title: "Launch & Go Live",
    desc: {
      title: "Cue dramatic music. Hit the big red button.",
      desc: "It’s time. We flip the switch, deploy your site, and watch the magic happen. Behind the scenes, we’re sweating so you don’t have to.",
    },
    steps: [
      {
        sub: "Deployment:",
        desc: "No crashes. No chaos. Just clean launches.",
      },
      {
        sub: "Domain & DNS:",
        desc: "Yes, we’ll handle that boring stuff too.",
      },
      { sub: "Live Testing:", desc: "Real-world ready. No surprises." },
    ],
  },
  {
    image: postImage,
    title: "Post-Launch Support",
    desc: {
      title: "We don’t ghost. We optimize.",
      desc: "Your site’s live, but we’re still here. Updates, tweaks, support—consider us your digital watchdogs.",
    },
    steps: [
      {
        sub: "Maintenance & Updates:",
        desc: "Keep it fresh, fast, and bug-free.",
      },
      { sub: "Support Requests:", desc: "Something broke? We’ll fix it." },
      {
        sub: "Growth Tracking:",
        desc: "Your site’s alive. Let’s help it evolve.",
      },
    ],
  },
];

const Process = () => {
  useEffect(() => {
    document.title = "How the Web Gets Made - The Code Factory";
  }, []);

  return (
    <>
      <div className="">
        <div className=" px-6 lg:px-12 pt-12 pb-8 bg-gradient-to-b from-tan to-white">
          <p className="font-primary font-bold text-primary text-5xl lg:w-[80%] lg:text-7xl">
            How the Magic Happens
          </p>

          <div className="flex justify-between items-start mt-8">
            <h2 className="hidden lg:block font-secondary text-brown text-2xl font-bold uppercase">
              Process
            </h2>
            <p className="font-secondary text-brown font-semibold lg:text-lg lg:w-[60%]">
              Behind every sleek website is a process—ours just happens to be
              smarter, faster, and slightly more obsessive than most. Here’s how
              we turn ideas into digital powerhouses.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 lg:px-12 font-primary font-bold text-2xl lg:text-5xl  pt-12 lg:pt-24  ">
          <h2 className=" text-dark-brown text-3xl lg:text-5xl lg:w-[80%] mb-8">
            We prioritize bold ideas, brutal honesty, and pixel-perfect
            execution — collaboration is just a bonus.
          </h2>
        </div>

        <div className=" px-6 lg:px-12 flex flex-col mt-6 gap-12 lg:gap-24">
          {process.map((item, index) => (
            <ProcessCard processData={item} key={index} index={index} />
          ))}
        </div>

        <div className="text-center mt-12 flex flex-col gap-4 pb-12 bg-gradient-to-b from-white to-tan px-6 lg:px-12 py-12 lg:py-24">
          <p className="font-primary font-bold text-3xl lg:text-5xl text-dark-brown ">
            Ready to see this process in action?
          </p>
          <Button title="Get Started" to="/contact" style={{padding: '', fontSize: "1.25rem"}}/>
        </div>
      </div>
    </>
  );
};

export default Process;
