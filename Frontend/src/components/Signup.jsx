import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
 


const Signup = () => {
  return (
    <>
      <div className="flex h-screen items-center  justify-center ">
      <div className="w-[600px] ">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg">Signup</h3>
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type=""text
              placeholder="Enter Your Full Name"
              className="w-80 px-3 border rounded-md outline-none"
            />
          </div>
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-80 px-3 border rounded-md outline-none"
            />
          </div>
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-80 px-3 border rounded-md outline-none"
            />
          </div>
          <div className="flex justify-around mt-4 ">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
            Signup
            </button>
            <p className="text-MD">
              Have account?{" "}
              <button
                className="underline  text-blue-500 cursor-pointer"
                onClick={()=>document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>{" "}
              <Login/>            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Signup;
