import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    // create User

    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="mb-12">
      <Navbar></Navbar>
      <div className="lg:w-1/2 md:w-3/4 mx-auto p-8 bg-gray-100 rounded-lg">
        <h2 className="text-4xl text-center font-semibold">
          Register you account
        </h2>
        <hr className="bg-black my-8" />
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter you name"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter you photo URl"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
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
            <div className="flex mt-2">
              <label className="label cursor-default ">
                <input type="checkbox" className="checkbox my- items-center" />
                <span className="label-text pl-2">
                  Accept Term & Conditions
                </span>
              </label>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline text-white bg-[#403F3F]">
              Register
            </button>
          </div>
        </form>
        <p className="text-center">
          Already Have An Account ?
          <Link to="/login" className="text-[#F75B5F] font-bold pl-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
