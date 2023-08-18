import { motion } from "framer-motion";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";
import GitHubCalendar from "react-github-calendar";
import { SectionWrapper } from "../../hoc";

const GithubCalender = () => {
    // const selectLastHalfYear = contributions => {
    //     const currentYear = new Date().getFullYear();
    //     const currentMonth = new Date().getMonth();
    //     const shownMonths = 6;

    //     return contributions.filter(activity => {
    //         const date = new Date(activity.date);
    //         const monthOfDay = date.getMonth();

    //         return (
    //             date.getFullYear() === currentYear &&
    //             monthOfDay > currentMonth - shownMonths &&
    //             monthOfDay <= currentMonth
    //         );
    //     });
    // };

    return (
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
            <div
                className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>Works</p>
                    <h2 className={styles.sectionHeadText}>Github Contribution_</h2>
                </motion.div>
            </div>
            <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
                <div className="flex items-center justify-center lg:w-[1000px]">
                    <GitHubCalendar
                        username="ras1k"
                        // transformData={selectLastHalfYear}
                    />
                </div>
            </div>
        </div>



    );
};

export default SectionWrapper(GithubCalender, "");