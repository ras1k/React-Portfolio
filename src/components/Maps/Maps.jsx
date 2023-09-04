import { motion } from "framer-motion";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import MapsExample from "./MapsExample";
// import { useState } from "react"

const Maps = () => {

    // const [hue, setHue] = useState(0)
    // const color = `hsl(${hue % 360}deg 39% 70%)`

    return (
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
            <div
                className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>Find</p>
                    <h2 className={styles.sectionHeadText}>Me Here_</h2>
                </motion.div>
            </div>
            <div className={`-mt-20 pb-14 ${styles.paddingX} gap-7`}>
                <div className="">
                    <MapsExample />
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Maps, "");