import {motion } from "motion/react"
import { useEffect, useState } from "react";

const links = [
  {title: 'Phone', path: 'tel:254778478242' },
  {title: 'Email', path: 'mailto:info@thecodefactory.tech' },
  {title: 'Whatsapp', path: 'https://wa.me/254778478242?.' },
]

const Contact = () => {
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    document.title = 'Summon Us | We don’t bite. Unless provoked - The Code Factory';
  }, []);

  return (
    <>
      <div className="px-6 pt-8 lg:px-12 ">
       <div className="flex flex-col gap-4 lg:w-[50%] ">
       <p className="font-primary font-bold text-primary text-5xl upper lg:text-7xl">Contact</p>
       <p className="font-semibold text-gray text-lg lg:text-xl">We know—this is the part where you “reach out.” Whether it’s a question, a quote, or a late-night existential crisis about your digital presence, go ahead. Hit us up. Just don’t send “hi” and ghost.</p>
       </div>
       {/* <div className="font-primary flex flex-col gap-4 my-12">
        <a href="" className="text-4xl uppercase font-bold text-primary ">Phone</a>
        <a href="" className="text-4xl uppercase font-bold text-primary ">Email</a>
        <a href="" className="text-4xl uppercase font-bold text-primary ">Whatsapp</a>
       </div> */}
       <div className="font-primary flex flex-col gap-4 py-12 perspective-[1000px] ">
      {links.map((link, index) => (
        <motion.a
          key={index}
          href={link.path}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={`text-4xl uppercase font-bold transition-colors duration-300 origin-center inline-block ${
            hovered === null || hovered === index
              ? "text-primary"
              : "text-[#6c6354]"
          }`}
          style={{ display: 'inline-block' }} // Needed for 3D transform
          animate={
            hovered === index
              ? { rotateY: -2 }
              : { rotateY: 0 }
          }
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
        >
          {link.title}
        </motion.a>
      ))}
      </div>
      </div>
    </>
  );
};

export default Contact;
