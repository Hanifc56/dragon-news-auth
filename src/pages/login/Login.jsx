import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { singIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // Login With email and password
    singIn(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:w-1/2 md:w-3/4 mx-auto p-8 bg-gray-100 rounded-lg">
        <h2 className="text-4xl text-center font-semibold">
          Login you account
        </h2>
        <hr className="bg-black my-8" />
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter you email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline text-white bg-[#403F3F]">
              Login
            </button>
          </div>
        </form>
        <p className="text-center">
          Do not Have An Account ?
          <Link to="/register" className="text-[#F75B5F] font-bold pl-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
