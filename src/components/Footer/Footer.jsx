import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { logo } from "../../assets"
import { SectionWrapper } from "../../hoc";
import { Link } from "react-router-dom";
import { navLinks } from '../../constants'

const Footer = () => {
  return (
    <div className="w-full h-auto border-b-[1px] border-b-black flex lg:flex-row flex-col items-center justify-around gap-10">
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
      <div className="w-full h-full lg:ms-48 text-center lg:text-left">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Links
        </h3>
        <ul className='flex flex-col gap-4 font-medium py-6 overflow-hidden'>
          {
            navLinks.map((link) => (
              <li key={link.id}
                className={'hover:text-[#915eff] text-xl font-medium cursor-pointer'}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
          <a href="https://drive.google.com/file/d/1QyyNUnaj3dhWjjlnxV_awH4kMLJR4fBp/view?usp=sharing" target='_blank' rel='noreferrer' className='text-white text-xl font-medium cursor-pointer'>Resume</a>
        </ul>
      </div>
      <div className="w-full h-full text-center lg:text-left">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Terms of Service
              {/* <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> */}
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Authentication
              {/* <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> */}
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              System Status
              {/* <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> */}
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Over Right
              {/* <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> */}
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Pricing
              {/* <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> */}
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full text-center lg:text-left">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          DEVELOPERS
        </h3>
        <ul className="flex flex-col gap-4 font-medium overflow-hidden py-6">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Documentation
              {/* <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> */}
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Authentication
              {/* <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> */}
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              API Reference
              {/* <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> */}
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Open Source
              {/* <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> */}
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Support
              {/* <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> */}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SectionWrapper(Footer, "");