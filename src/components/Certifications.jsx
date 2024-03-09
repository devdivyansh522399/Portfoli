import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { linkC } from "../assets";
import { SectionWrapper } from "../hoc";
import { certification, projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, icon, link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.5)}>
      <Tilt
        options={{
          max: 5,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] bg-gray-300 rounded-lg">
          <img
            src={icon}
            alt={""}
            className="w-full h-full object-cover rounded-xl p-2"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(link, "_blank")}
              className="bg-[#474747] w-12 h-12 rounded-full flex justify-center items-center cursor-pointer "
            >
              <img src={linkC} alt="github" className="object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[16px]">{name}</h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My certifications</p>
        <h2 className={styles.sectionHeadText}>Certification.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of certification that I have.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {certification.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "");
