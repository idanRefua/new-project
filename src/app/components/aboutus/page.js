import Image from "next/image";
import idan from "../../../imgs/idan11.jpg";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <motion.div>
      <div className="about-box">
        <div className="row box-about-image">
          <div className="col-md-6">
            <Image
              src={idan}
              className="image-idan"
              width={350}
              height={400}
              alt="idan image"
            />
          </div>
          <div className="col-md-6 ">
            <h2 className="about-title">Hello ! My name is Idan</h2>
            <div className="about-section">
              I am 27 Years Old,
              <br />I am Full Stack Developer , Looking for my first challenge
              in the world of development. I am a person who likes to
              research,learn new subjects,hardworking. Likes to work in a
              team,to express opinions.
              <br />I know how to work in a team,and good comonicaton with
              people.
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
