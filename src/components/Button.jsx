import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Button = ({ title, to, style }) => {
  return (
    <div>
      <motion.button
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
        className="text-white bg-primary px-6 py-2 text-base rounded-full cursor-pointer border-primary border hover:bg-tan hover:text-primary hover:border-primary hover:border transition-background duration-500 ease-in-out text-center"
        style= {style}
      >
        <Link to={to} className="font-primary">{title}</Link>
      </motion.button>
    </div>
  );
};

export default Button;
