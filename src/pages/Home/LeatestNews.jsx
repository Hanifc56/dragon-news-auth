import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const LeatestNews = () => {
  return (
    <div className="flex gap-1 p-4 bg-[#F3F3F3] my-8">
      <button className="px-6 py-2  font-medium text-white bg-[#D72050] text-xl">
        Latest
      </button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-5" to="/">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className="mr-5" to="/">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className="mr-5" to="/">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default LeatestNews;
