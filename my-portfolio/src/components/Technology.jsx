import { motion } from "framer-motion";
import { FaCss3Alt, FaHtml5, FaJava, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiCplusplus, SiFirebase, SiGlitch, SiMongodb, SiMysql } from "react-icons/si";
import "./Technology.css";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
  hover: {
    scale: 1.1,
    y: 0,
    boxShadow: "0 0 20px rgba(0, 255, 255, 0.7)",
    transition: { duration: 0.3 }
  }
});

const Technology = () => {
  return (
    <div className="technology-container">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        className="technology-title"
      >
        TECHNOLOGIES
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="technology-icons"
      >
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="icon-box"
        >
          <FaHtml5 className="icon html" />
          <motion.span className="icon-name">HTML5</motion.span>
        </motion.div>

        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="icon-box"
        >
          <FaCss3Alt className="icon css" />
          <motion.span className="icon-name">CSS3</motion.span>
        </motion.div>

        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="icon-box"
        >
          <FaJs className="icon javascript" />
          <motion.span className="icon-name">JavaScript</motion.span>
        </motion.div>

        <motion.div 
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="icon-box"
        >
          <FaReact className="icon react" />
          <motion.span className="icon-name">React</motion.span>
        </motion.div>

        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="icon-box"
        >
          <SiMysql className="icon mysql" />
          <motion.span className="icon-name">MySQL</motion.span>
        </motion.div>

        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="icon-box"
        >
          <FaNodeJs className="icon nodejs" />
          <motion.span className="icon-name">Node.js</motion.span>
        </motion.div>

        <motion.div 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="icon-box"
        >
          <SiMongodb className="icon mongodb" />
          <motion.span className="icon-name">MongoDB</motion.span>
        </motion.div>

        <motion.div 
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="icon-box"
        >
          <FaJava className="icon java" />
          <motion.span className="icon-name">Java</motion.span>
        </motion.div>

        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="icon-box"
        >
          <SiCplusplus className="icon cplusplus" />
          <motion.span className="icon-name">C++</motion.span>
        </motion.div>

        <motion.div 
          variants={iconVariants(6.5)}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="icon-box"
        >
          <SiGlitch className="icon glitch" />
          <motion.span className="icon-name">Glitch</motion.span>
        </motion.div>

        <motion.div 
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="icon-box"
        >
          <SiFirebase className="icon firebase" />
          <motion.span className="icon-name">Firebase</motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;