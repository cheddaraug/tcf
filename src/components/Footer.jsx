import LinkComponent from "./LinkComponent";
import footerImage from "../assets/images/footer-image.svg";
import fullLogo from "../assets/images/full-logo-horizontal.svg";

const links = [
  { title: "Behind The Curtains", to: "/about" },
  { title: "What We Actually Do", to: "/services" },
  { title: "How the Magic Happens", to: "/process" },
  { title: "Get In Touch", to: "/contact" },
  { title: "Legal Blah Blah", to: "/legal" },
];

const Footer = () => {
  return (
    <>
      <div className="bg-tan">
        <div className="font-primary px-6 pt-12  lg:px-20 lg:py-10">
          <div className="flex gap-12 flex-col lg:flex-row lg:justify-between lg:items-start">
            <p className="text-xl font-medium lg:w-[50%]">
              We build websites like it’s our job… because it totally is. The
              kind that make people stop scrolling. The kind that makes your
              brand unforgettable. We’re here to turn your vision into pixels,
              and trust us, we do it right. <br />{" "}
              <span className="text-sm text-gray">
                {" "}
                &copy; {new Date().getFullYear()} The Code Factory{" "}
              </span>
            </p>
            <div className="uppercase font-medium text-lg flex flex-col gap-2 text-brown w-max">
              {links.map((link, index) => (
                <LinkComponent key={index} to={link.to} title={link.title} />
              ))}
            </div>
          </div>
          <img
            src={fullLogo}
            alt=""
            className="mt-24 lg:mt-40"
            title="Photo by Murad Swaleh on Unsplash"
          />
        </div>
        <img src={footerImage} alt="" width={"100%"} />
      </div>
    </>
  );
};

export default Footer;
