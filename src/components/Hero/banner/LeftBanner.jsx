
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import { styles } from "../../../styles";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder_", "MERN Stack Developer_", "UI Designer_", "Content Writer_"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2500,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        {/* <h1 className="text-6xl font-bold text-white">
          Hi, I&apos;m <span className="text-designColor capitalize">Rasik Abdullah</span>
        </h1> */}
        <h1 className={`${styles.heroHeadText}`}>Hi, I&apos;m <span className="text-[#915eff]">Rasik_</span></h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a front-end web developer specializing in React.js. With <br /> a strong foundation in HTML, CSS, and JavaScript.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner