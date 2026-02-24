import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { testimonials } from "../../constants";
import { useState } from "react";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  company_link,
  image,
  portfolio,
}) => {
  // 2. Local state to handle toggle
  const [isExpanded, setIsExpanded] = useState(false);

  // 3. Define character limit
  const characterLimit = 150;
  const isLongText = testimonial.length > characterLimit;

  return (
    <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full h-full"
      >
        <p className="text-white font-black text-[48px]">&quot;</p>

        <div className="mt-1">
          <p className="text-white tracking-wider text-[18px]">
            {/* 4. Logic to show truncated or full text */}
            {isExpanded || !isLongText
              ? testimonial
              : `${testimonial.substring(0, characterLimit)}...`}

            {/* 5. Toggle Button */}
            {isLongText && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="ml-2 text-blue-400 text-[14px] font-semibold hover:underline"
              >
                {isExpanded ? " Show Less" : " Read More"}
              </button>
            )}
          </p>

          <div className="mt-7 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">@</span>&nbsp;
                <a href={portfolio} target="_blank" rel="noreferrer">
                  {name}
                </a>
              </p>
              <p className="mt-1 text-secondary text-[12px]">
                {designation} <br />
                <a href={company_link} target="_blank" rel="noreferrer">
                  {company}
                </a>
              </p>
            </div>

            <img
              src={image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default FeedbackCard;
