import { Link } from "react-router-dom";
import { motion } from "motion/react";

const LinkComponent = ({ to, title, styles }) => {
  return (
    <>
      <div
        style={styles}
        className="hover:text-primary  transition-all duration-500 ease-in-out"
      >
        <Link to={to} className="relative group font-primary">
          {title}
          <motion.span className="block h-[2px] bg-primary mt-[.1px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </Link>
      </div>
    </>
  );
};

export default LinkComponent;
