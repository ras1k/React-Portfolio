import { styles } from '../../styles'
import { navLinks } from '../../constants'
import { logo, menu, close } from '../../assets'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
                    <a href="https://drive.google.com/file/d/1QyyNUnaj3dhWjjlnxV_awH4kMLJR4fBp/view?usp=sharing" target='_blank' rel='noreferrer' className='text-secondary text-[18px] font-medium cursor-pointer'>Resume</a>
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />

                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>

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
                            <a href="https://drive.google.com/file/d/1QyyNUnaj3dhWjjlnxV_awH4kMLJR4fBp/view?usp=sharing" target='_blank' rel='noreferrer' className='text-secondary text-[18px] font-medium cursor-pointer'>Resume</a>

                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;