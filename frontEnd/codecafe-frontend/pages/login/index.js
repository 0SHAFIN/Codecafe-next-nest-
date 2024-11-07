import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from 'react';
import Link from "next/link";
export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className=" bg-gray-800 px-8 py-4 rounded-lg shadow-lg text-white w-1/4">
          <h1 className=" flex justify-center mt-2 mb-4 font-bold text-2xl">Login Page</h1>
          <hr></hr>
          <form className="mt-4">
            <input type="text" placeholder="Username" className="w-full p-2 my-2 rounded-lg bg-gray-700"></input>
            <div className="relative">
             <input type={showPassword ? 'text' : 'password'} placeholder="Password" className='w-full p-2 my-2 rounded-lg bg-gray-700'></input>
             
              <span onClick={handleShowPassword} className="absolute right-0 top-0 mr-2 mt-2  mt-4 cursor-pointer mr-5">
                {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20}/>}
              </span>
            </div>
            <div className="flex justify-between">
              <div>
                <input type="checkbox" className="mr-2 rounded-lg"></input>
                <label>Remember me</label>
              </div>
              <a href="#" className="text-indigo-500">Forgot Password?</a>
            </div>
            <button className="w-full bg-indigo-500 text-white p-2 my-2 rounded-lg transform hover:scale-105 transition duration-500">Login</button>
            <div className="flex justify-center">
              Dont have an account? <Link href="/signup" className="text-indigo-500 ml-3">Signup</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}