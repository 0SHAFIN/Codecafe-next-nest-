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
         <div>
            Get started by creating an account or logging in.
             <div className="flex justify-center ">
              <div className="bg-indigo-500 w-fit px-5 py-1 rounded mt-2 tranformer hover:scale-105 transition duration-500">
                <Link href="/login" className="text-white">Login</Link>
              </div>
             </div>
         </div>
      </div>
    </div>
  );
}