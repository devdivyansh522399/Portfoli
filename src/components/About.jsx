import { motion } from "framer-motion";
import { profile } from "../assets";
import { styles } from "../styles";
import { languages } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// const ServiceCard = ({ index, title, icon }) => {
//   return (
//     <Tilt className="p-2 w-">
//       <motion.div
//         variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//         className="w-full green-pink-gradient  rounded-[20px] shadow-card"
//       >
//         <div
//           options={{
//             max: 45,
//             scale: 1,
//             speed: 450,
//           }}
//           className="bg-tertiary rounded-[20px]  flex justify-evenly items-center flex-col"
//         >
//           <img src={icon} alt={title} className="w-16 h-16 object-contain" />
//           <h3 className="text-white text-[20px] font-bold text-center">
//             {title}
//           </h3>
//         </div>
//       </motion.div>
//     </Tilt>
//   );
// };

const About = () => {
  return (
    <>
      <motion.div className="flex flex-col md:flex-row md:justify-evenly space-x-5">
        <div>
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Hello! I'm Divyansh, an enthusiastic and dedicated computer science
            graduate with a passion for full-stack web development. My goal is
            to become a skilled Software Development Engineer by leveraging the
            power of the MERN stack. I am excited about crafting dynamic and
            user-friendly web applications that make a positive impact on
            users's lives.
          </motion.p>
        </div>
        <motion.div className="hidden lg:block w-80">
          <motion.img src={profile} alt="" className="rounded-lg h-72 w-72" />
        </motion.div>
      </motion.div>
      {/* <motion.div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
