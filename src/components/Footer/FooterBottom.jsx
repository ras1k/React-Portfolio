import moment from "moment/moment";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const FooterBottom = () => {
  return (
    <div className="w-full pb-10">
      <p className=" text-gray-500 text-base flex items-center justify-center gap-2">
        <span>
          <FaPhoneAlt />
        </span>
        <span><a href="tel:+8801633027613" target="_blank" rel="noreferrer">Call Now</a></span>
      </p>
      <p className=" text-gray-500 text-base flex items-center justify-center gap-2">
        <span>
          <TfiEmail />
        </span>
        <span>
        <a href="mailto:rasikabdullah@gmail.com" target="_blank" rel="noreferrer">rasikabdullah@gmail.com</a>
        </span>
      </p>
      <p className="text-center text-gray-500 text-base">
        © {moment().format('YYYY')}. All rights reserved by <a href="https://t.me/ras1k" target="_blank" rel="noreferrer" className="text-[#915eff]">Rasik Abdullah</a>
      </p>
    </div>
  );
}

export default FooterBottom