import moment from "moment/moment";

const FooterBottom = () => {
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        © {moment().format('YYYY')}. All rights reserved by <a href="https://t.me/ras1k" target="_blank" rel="noreferrer" className="text-[#915eff]">Rasik Abdullah</a>
      </p>
    </div>
  );
}

export default FooterBottom