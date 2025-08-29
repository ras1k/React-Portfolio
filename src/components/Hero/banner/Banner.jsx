import { motion } from "framer-motion";
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import { SectionWrapper } from "../../../hoc";

const Banner = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-8 md:pt-10 pb-16 md:pb-20 flex flex-col gap-8 lg:gap-12 xl:gap-16 lgl:flex-row items-center justify-between border-b-[1px] font-titleFont border-b-black"
    >
      {/* Left Banner with entrance animation */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2"
      >
        <LeftBanner />
      </motion.div>

      {/* Right Banner with entrance animation */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-1/2 flex justify-center lg:justify-end"
      >
        <RightBanner />
      </motion.div>
    </motion.section>
  );
}

export default SectionWrapper(Banner, "home");