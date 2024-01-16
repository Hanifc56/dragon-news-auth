import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto md:pt-12 pb-5" src={logo} alt="" />
      <p className="pb-2 text-xl text-[#706F6F]">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl text-[#706F6F] font-medium">
        <span className="text-[#403F3F]">{moment().format("dddd,")}</span>{" "}
        {moment().format(" MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
