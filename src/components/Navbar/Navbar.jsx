import { styles } from '../../styles'
import { navLinks } from '../../constants'
import { logo, menu, close } from '../../assets'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from 'react-icons/tfi';

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
            }`}>
            <div className='flex w-full justify-between items-center max-w-7xl mx-auto'>
                <Link to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}>
                    <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                        Rasik&nbsp;<span className='sm:block hidden'>Abdullah</span>
                    </p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row items-center gap-10'>
                    {
                        navLinks.map((link) => (
                            <li key={link.id}
                                className={`${active === link.title ? 'text-[#915eff]' : 'text-secondary'
                                    } hover:text-[#915eff] text-[18px] font-medium cursor-pointer`}
                                onClick={() => setActive(link.title)}
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))
                    }
                    <a href="https://drive.google.com/file/d/1M4K6q4PqrRJWdtib1iFLzwi6rDncelvt/view?usp=sharing" target='_blank' rel='noreferrer' className='text-secondary text-[18px] font-medium cursor-pointer'>Resume</a>
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />

                    <div className={`${!toggle ? 'hidden' : 'flex'}`}>

                        {/* <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            {
                                navLinks.map((link) => (
                                    <li key={link.id}
                                        className={`${active === link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                                        onClick={() => {
                                            setToggle(!toggle);
                                            setActive(link.title);
                                        }}
                                    >
                                        <a href={`#${link.id}`}>{link.title}</a>
                                    </li>
                                ))
                            }
                            <a href="https://drive.google.com/file/d/1QyyNUnaj3dhWjjlnxV_awH4kMLJR4fBp/view?usp=sharing" target='_blank' rel='noreferrer' className='text-secondary text-[18px] font-medium cursor-pointer'>Resume</a>
                        </ul> */}


                        <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
                            <div className="flex flex-col gap-8 py-2 relative">
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
                                        <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                                            Rasik&nbsp;<span className=''>Abdullah</span>
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-400 mt-2">
                                        I am a front-end web developer specializing in React.js. With a strong foundation in HTML, CSS, and JavaScript.
                                    </p>
                                </div>
                                <ul className='list-none flex justify-end items-start flex-col gap-4'>
                                    {
                                        navLinks.map((link) => (
                                            <li key={link.id}
                                                className={`${active === link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                                                onClick={() => {
                                                    setToggle(!toggle);
                                                    setActive(link.title);
                                                }}
                                            >
                                                <a href={`#${link.id}`}>{link.title}</a>
                                            </li>
                                        ))
                                    }
                                    <a href="https://drive.google.com/file/d/1M4K6q4PqrRJWdtib1iFLzwi6rDncelvt/view?usp=sharing" target='_blank' rel='noreferrer' className='text-secondary text-[18px] font-medium cursor-pointer'>Resume</a>
                                </ul>
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-base uppercase font-titleFont mb-4">
                                        Find me in
                                    </h2>
                                    <div className="flex gap-4">
                                        <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-lg inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                                            <a href="https://www.facebook.com/ras1k/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                                        </span>
                                        <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-lg inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                                            <a href="https://twitter.com/ras1k_" target="_blank" rel="noreferrer"><FaTwitter /></a>
                                        </span>
                                        <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-lg inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                                            <a href="https://github.com/ras1k" target="_blank" rel="noreferrer"><FaGithub /></a>
                                        </span>
                                        <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-lg inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                                            <a href="https://www.linkedin.com/in/ras1k/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                                        </span>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <p className=" text-gray-500 text-lg flex items-center gap-2">
                                        <span>
                                            <FaPhoneAlt />
                                        </span>
                                        <span><a href="tel:+8801633027613" target="_blank" rel="noreferrer">Call Now</a></span>
                                    </p>
                                    <p className=" text-gray-500 text-lg flex items-center  gap-2">
                                        <span>
                                            <TfiEmail />
                                        </span>
                                        <span>
                                            <a href="mailto:rasikabdullah@gmail.com" target="_blank" rel="noreferrer">rasikabdullah@gmail.com</a>
                                        </span>
                                    </p>
                                </div>
                                {/* <span
                                    onClick={() => setShowMenu(false)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                                >
                                    <MdClose />
                                </span> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;