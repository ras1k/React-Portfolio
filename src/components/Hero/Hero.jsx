import { motion } from "framer-motion"
import { styles } from '../../styles'
import LeftBanner from "./banner/LeftBanner";
import RightBanner from "./banner/RightBanner";
// import { ComputersCanvas } from "../canvas";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient rounded-full bg-[#915eff]" />
                </div>

                {/* <div>
                    <h1 className={`${styles.heroHeadText}`}>Hi, I&apos;m <span className="text-[#915eff]">Rasik</span></h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
                        I&apos;m a Front-End Web Developer
                    </p>
                </div> */}
                <section className="w-full pb-20 flex flex-col gap-10 lg:flex-row items-center justify-between border-b-[1px] font-titleFont border-b-black">
                    <LeftBanner />
                    <div className="hidden lg:block">
                        <RightBanner />
                    </div>
                </section>
            </div>

            {/* <ComputersCanvas /> */}



            <div className='absolute xs:bottom-10 bottom-32 hidden w-full lg:flex justify-center items-center'>
                <a href="#about" className=''>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>

        </section>
    );
};

export default Hero;