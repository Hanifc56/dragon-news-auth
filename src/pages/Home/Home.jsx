import Header from "../Shared/Header/Header";
import LeftSideBar from "../Shared/Leftsidebar/leftSideBar";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";
import LeatestNews from "./LeatestNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <LeatestNews></LeatestNews>
      <Navbar></Navbar>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
        <div>
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-3xl">News Coming soon...</h2>
        </div>
        <div>
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default Home;
