import { color, motion } from "framer-motion"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from '../../styles'
import { experiences } from '../../constants'
import { SectionWrapper } from '../../hoc'
import { textVariant } from '../../utils/motion'

const ExperienceCard = ({ experience }) => {
    <VerticalTimelineElement 
        contentStyle={{ 
            background: '#1d1836',
            color: '#fff'
        }}
        contentArrowStyle={{
            borderRight: '7px solid #1d18136'
        }}
        >
            {experience.date}
    </VerticalTimelineElement>
}

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Work Experience</p>
                <h2 className={styles.sectionHeadText}>What I have done so far</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work")