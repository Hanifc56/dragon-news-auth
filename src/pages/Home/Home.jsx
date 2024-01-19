import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideBar from "../Shared/Leftsidebar/leftSideBar";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";
import LeatestNews from "./LeatestNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <LeatestNews></LeatestNews>
      <Navbar></Navbar>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
        <div>
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="md:col-span-2 ">
          <h2 className="text-xl font-semibold pb-5">Dragon News Home</h2>
          <div className="grid gap-5">
            {news.map((aNews) => (
              <NewsCard key={aNews._id} news={aNews}></NewsCard>
            ))}
          </div>
        </div>
        <div>
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default Home;
