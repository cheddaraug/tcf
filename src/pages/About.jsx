import { useEffect } from "react";
import Button from "../components/Button";
import GradientText from "../components/GradientText";
import StatsCard from "../components/StatsCard";

const stats = [
  {
    title: "Websites",
    fun: "Each one handcrafted, caffeinated, and slightly overengineered.",
    value: "103",
  },
  {
    title: "On-time delivery",
    fun: "Because we hate “Sorry for the delay” emails too.",
    value: "96%",
  },

  {
    title: "Satisfaction ",
    fun: ' We assume the other 3% may not know how to say “thank you"',
    value: "97%",
  },
  {
    title: "Support ",
    fun: "Yes, even when your nephew deletes the homepage at 2AM.",
    value: "24/7",
  },
  {
    title: "Years of growth",
    fun: " And no plans to slow down, retire, or touch grass.",
    value: "4+",
  },
  {
    title: "Clients Who Came Back.",
    fun: "Because once you’ve seen the difference, there’s no going back.",
    value: "72%",
  },
];

const About = () => {
  useEffect(() => {
    document.title = "About Us - The Code Factory";
  }, []);

  return (
    <>
      <div className="">
        <div className=" px-6 lg:px-12 pt-12 pb-8 bg-gradient-to-b from-tan to-primary">
          <p className="font-primary font-bold text-primary text-5xl lg:w-[80%] lg:text-8xl lg:mb-24">
            The Code Factory - Where brands come in raw and leave dangerously
            polished.
          </p>

          <div className="flex justify-between items-start mt-8">
            <h2 className="hidden lg:block font-secondary text-white text-2xl font-bold uppercase">
              About Us
            </h2>
            <p className="font-secondary text-white font-semibod text-lg lg:text-xl lg:w-[60%]">
              We’re in this because most websites suck. They’re slow,
              uninspired, and forgotten the moment you close the tab. That’s not
              what we do here. We build digital arsenals. Not just websites. If
              your brand wants to show up, stand out, and make an impression
              that sticks — pull up a chair. We’ve got work to do.
            </p>
          </div>
        </div>

        <div className="bg-primary">
          <div className=" p-6 lg:px-12 font-primary font-bold text-2xl lg:text-5xl  pt-12 lg:pt-24  ">
            <h2 className=" text-white text-3xl lg:text-5xl lg:w-[80%] mb-2">
              Our Philosophy
            </h2>
            <p className="text-xl text-white lg:text-2xl">
              Code with precision. Design with intent. Deliver without ego.
            </p>
            <p className="font-secondary text-light-yellow text-lg mt-4 lg:w-[60%]">
              {" "}
              We believe in collaboration, not dictatorship. In brutal
              simplicity, not design fluff. In clean code that doesn’t need to
              be rebooted every full moon. Behind the screens? We're just a team
              of digital craftsmen who take your business very seriously — even
              if we don’t take ourselves that way.
            </p>
          </div>

          <div className=" p-6 lg:px-12 font-primary font-bold text-2xl lg:text-5xl  pt-12 lg:pt-24  ">
            <h2 className=" text-white text-3xl lg:text-5xl lg:w-[80%] mb-2">
              The Stats (That Actually Matter)
            </h2>
            <p className="text-xl text-white lg:text-2xl">
              We could give you a founding date… but this is way more
              interesting.
              <span className="text-base"> (Which is 2020, by the way)</span>.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8 font-primary ">
              {stats.map((stat, index) => (
                <StatsCard stat={stat} key={index} />
              ))}
            </div>
          </div>
        </div>

        <div className=" bg-primary p-6 lg:px-12 font-primary font-bold text-2xl lg:text-5xl  pt-12 lg:pt-24  ">
          <h2 className=" text-white text-3xl lg:text-5xl lg:w-[80%] mb-2">
            The Humans Behind The Code
          </h2>
          <p className="text-xl text-white lg:text-2xl">
            We’re not robots. Yet.
          </p>
          <p className="font-secondary text-light-yellow text-lg mt-4 lg:w-[60%] border-2 px-4 py-2 rounded-xl">
            {" "}
            We were going to show you our faces… but the camera broke from all
            the awesomeness. Photos coming soon. In the meantime, just imagine a
            team of dangerously good-looking developers building dangerously
            good websites.
          </p>
        </div>

        <div className="text-center pt-12 flex flex-col gap-4 pb-12 bg-gradient-to-b from-primary to-tan px-6 lg:px-12 py-12 lg:py-24">
          <p className="font-primary font-bold text-3xl lg:text-5xl text-white ">
            This is where you scroll away… or reach out.
          </p>
          <Button title="Let’s Build Something" to="/contact" style={{padding: '', fontSize: "1.25rem"}}/>
        </div>
      </div>
    </>
  );
};

export default About;
