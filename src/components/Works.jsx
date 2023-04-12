import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { youtube } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] sm:min-h-[500px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={youtube}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Videos</p>
        <h2 className={`${styles.sectionHeadText}`}>Content.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Welcome to my interssting project! If you're looking for informative,
          engaging, and entertaining content, you've come to the right place. my
          videos cover a wide range of topics, from how-to tutorials and
          motivationals tips. Whether you're looking to learn something new, be
          inspired, or simply have a good laugh, my channel has something for
          everyone. So hit that subscribe button and join our community of
          passionate and curious viewers. Don't miss out on the fun, excitement,
          and valuable insights that await you on Nahla Laribi youtube channel.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="flex flex-row justify-center justify-items-center mt-[50px]">
        <button
          type="button"
          class="focus:outline-none text-white bg-amber-400 hover:bg-amber-300 focus:ring-4 focus:bg-amber-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-tertiary dark:focus:ring-purple-900"
        >
          <a
            href="https://www.youtube.com/@nahlalaribi8123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-[10px] items-center"
          >
            <img
              src="img/youtube.png"
              className="w-[30px] h-[30px]"
              alt="youtube-link"
            />
            See More
          </a>
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "content");
