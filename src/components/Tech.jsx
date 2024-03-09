import { BallCanvas } from "./canvas";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies?.map((technology, index) => (
        <div className="w-28 h-28" key={technology.name}>
          <Link  onClick={() => window.open(technology.link, "_blank")} >
            <BallCanvas icon={technology.icon} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
