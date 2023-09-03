import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { logo } from "../../assets"
import { SectionWrapper } from "../../hoc";
import { Link } from "react-router-dom";
import { navLinks } from '../../constants'
import fanimation from '../../assets/animation.json';
import Lottie from "lottie-react";

const Footer = () => {
  return (
    <div className="w-full lg:ps-8 h-auto border-b-[1px] border-b-black flex lg:flex-row flex-col items-center justify-center gap-10">
      <div className="w-full h-full flex lg:flex-col items-center gap-8">
        <Link to='/'><img className="w-1/2" src={logo} alt="logo" /></Link>
        <div className="flex gap-4">
          <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
            <a href="https://www.facebook.com/ras1k/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          </span>
          <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl hidden lg:inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
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
      <div className="lg:ml-24">
        <Lottie animationData={fanimation} loop={true} />
      </div>
      <div className="w-full h-full lg:ml-48">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Links
        </h3>
        <ul className='flex flex-col gap-4 font-medium text-secondary py-6 overflow-hidden '>
          {
            navLinks.map((link) => (
              <li key={link.id}
                className={'hover:text-[#915eff] text-lg cursor-pointer'}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  );
}

export default SectionWrapper(Footer, "");