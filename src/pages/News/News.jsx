import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";

const News = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>

      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-xl font-semibold pb-5">Dragon News Home</h2>
        </div>
        <div>
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default News;
