import { motion } from "framer-motion";

import { styles } from "../styles";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row  items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5 md:block hidden">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="ml-[8px] w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Nahla</span>
          </h1>
          <p className={`${styles.heroSubText}  mt-2 text-white-100`}>
            10+ years IT exp, Scrum & testing,
            <br className="md:block hidden" /> Strong interpersonal skills,
            <br className="md:block hidden" />
            Teaching exp in math & Arabic.
          </p>
        </div>
        {/* <div class="relative"> */}
          <img
            className="md:w-[450px] md:h-[600px] h-[300px] w-[300px] rounded-full md:ml-[100px] self-center shadow-[3px_3px_20px_0px_#b794f4a2] "
            src="profile.jpeg"
            alt="profile"
          />
          {/* <img
            className="md:w-[450px] md:h-[600px] h-[200px] w-[200px] rounded-full md:ml-[100px] self-center shadow-[3px_3px_20px_0px_#b794f4a2] absolute top-0 left-0 opacity-0 hover:opacity-100 "
            src="profile2.jpeg"
            alt="profile"
          />
        </div> */}
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
