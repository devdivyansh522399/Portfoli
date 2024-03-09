import { frameworksAndTech, languages } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const ServiceCard = ({ title, progress, colorCode }) => {
  const width = `${parseInt(progress)}%`;
  return (
    <motion.div className="my-4 space-y-2">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-white ">{title}</span>
        <span className="text-sm font-medium text-white">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full`}
          style={{ background: colorCode, width: width }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      <div className="flex flex-col md:flex-row justify-between mt-3">
        <div className="p-5 w-full md:w-[48%] bg-[#1d1836] rounded-xl">
          <div className="text-xl font-bold">Langauges</div>
          <hr className="my-1" />
          <div>
            {languages.map((item, index) => {
              return (
                <ServiceCard
                  key={index}
                  title={item.title}
                  progress={item.progress}
                  colorCode={item.colorCode}
                />
              );
            })}
          </div>
        </div>
        <div className="p-5 w-full md:w-[48%] bg-[#1d1836] rounded-xl boxShadow">
          <div className="text-xl font-bold">Framework and Tech Stack</div>
          <hr className="my-1" />
          <div>
            {frameworksAndTech.map((item, index) => {
              return (
                <ServiceCard
                  key={index}
                  title={item.title}
                  progress={item.progress}
                  colorCode={item.colorCode}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "");
