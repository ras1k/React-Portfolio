
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import { styles } from "../../../styles";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Programmer", "MERN Stack Developer", "Web Designer", "Content Writer", "Tech Enthusiast"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2500,
  });
  return (
    <div className="w-full flex flex-col gap-20 mb-0">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        {/* <h1 className="text-6xl font-bold text-white">
          Hi, I&apos;m <span className="text-designColor capitalize">Rasik Abdullah</span>
        </h1> */}
        <h1 className={`${styles.heroHeadText}`}>Hi, I&apos;m <span className="text-[#915eff]">Rasik_</span></h1>
        <h2 className="text-3xl font-bold text-white">
          <span className="font-light">&lt;</span> a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          /> &nbsp;
          <span className="font-light">/&gt;</span>

        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a Computer Science Graduate & a Front-end web developer specializing in React.js. With a strong foundation in HTML, CSS, and JavaScript.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner