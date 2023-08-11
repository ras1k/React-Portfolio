import { motion } from "framer-motion"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from '../../styles'
import { educations } from '../../constants'
import { SectionWrapper } from '../../hoc'
import { textVariant } from '../../utils/motion'

const EducationCard = ({ education }) => (
    <VerticalTimelineElement
        contentStyle={{
            background: '#1d1836',
            color: '#fff'
        }}
        contentArrowStyle={{
            borderRight: '7px solid #1d18136'
        }}
        date={education.date}
        iconStyle={{ background: education.iconBg }}
        icon={
            <div className="flex justify-center items-center h-full w-full">
                <img src={education.icon}
                    alt={education.icon}
                    className="w-[60%] h-[60%] object-contain"
                />
            </div>
        }
    >
        <div>
            <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
            <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{education.school_name}</p>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
            {education.points.map((point, index) => (
                <li key={index} className="text-white-100 text-[14px] pl-1 tracking-wider">
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
)

const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Work Education</p>
                <h2 className={styles.sectionHeadText}>Schools I have attended</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {educations.map((education, index) => (
                        <EducationCard
                            key={index}
                            education={education}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Education, "work")