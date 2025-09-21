import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const NavLink = ({ href, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const underlineVariants = {
    default: { width: 0 },
    active: { width: "100%" },
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white transition-colors duration-300"
      >
        {title}
      </Link>
      <motion.div
        animate={isHovered ? "active" : "default"}
        variants={underlineVariants}
        transition={{ duration: 0.3 }}
        className="h-1 bg-primary-500 mt-1"
      ></motion.div>
    </div>
  );
};

export default NavLink;
