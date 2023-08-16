
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiJavascript } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col  gap-6 lg:gap-4 justify-between mb-36 lg:mb-0 xl:mb-0">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
            <a href="https://www.facebook.com/ras1k/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          </span>
          <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
            <a href="https://twitter.com/ras1k_" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </span>
          <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
            <a href="https://github.com/ras1k" target="_blank" rel="noreferrer"><FaGithub /></a>
          </span>
          <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
            <a href="https://www.linkedin.com/in/ras1k/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap  gap-4">
          <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
            <SiJavascript />
          </span>
          <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
            <FaReact />
          </span>
          <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
            <FaNodeJs />
          </span>
          <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
            <SiMongodb />
          </span>
          <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
            <SiExpress />
          </span>
          <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
            <SiTailwindcss />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media