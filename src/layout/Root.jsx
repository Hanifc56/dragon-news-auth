import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-6xl font-popins mx-auto">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
