import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const RightSideBar = () => {
  return (
    <div>
      <div className="pb-5">
        <h2 className="py-2 text-xl font-semibold ">Login With </h2>

        <div className="my-2 p-4 space-y-4 border rounded-lg">
          <button className="btn btn-outline w-full">
            <FaGoogle></FaGoogle>Login With Google
          </button>
          <button className="btn btn-outline w-full">
            <FaGithub></FaGithub>Login With Github
          </button>
        </div>
      </div>
      <div className="pb-4">
        <h2 className="py-2 text-xl font-semibold ">Find Us On</h2>

        <div className="my-2  border rounded-lg">
          <a className="block p-4 text-center " href="">
            <FaFacebook className="inline-block"></FaFacebook> Facebook
          </a>
          <hr />
          <a className="block p-4 text-center" href="">
            <FaTwitter className="inline-block"></FaTwitter> Twitter
          </a>
          <hr />
          <a className="block p-4 text-center" href="">
            <FaInstagram className="inline-block"></FaInstagram> Instagram
          </a>
        </div>
      </div>
      <div className="bg-[#F3F3F3] p-4 rounded-lg my-4">
        <h2 className="py-2 text-xl font-semibold ">Q-Zone</h2>
        <div className="my-2">
          <img src={qzone1} alt="" />
          <img src={qzone2} alt="" />
          <img src={qzone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
