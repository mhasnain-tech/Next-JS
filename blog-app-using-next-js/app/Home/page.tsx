"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import Button from "../components/Buttoncomp";


const page = () => {
  const router = useRouter();
  const [user,setUser] = useState(true);


  const homeHandler = () => {
    router.push("/Home")
  }
  const blogsHandler = () => {
    router.push("/blog")
  }

 const createBlogsHandler = () => {
  router.push("/createBlog")
 } 
const aboutHandler = () => {
  router.push("/about")
}

const logoutHandler = async () => {
 toast.success("User Logout Successfully!");
 
 setTimeout(() => {
 router.push("/Signup")
 },2000)



}



  const list = [{name:"Home" , handler : () => homeHandler()}, {name:"Blogs" , handler : () => blogsHandler()}, {name:"Create Blog" , handler: () => createBlogsHandler()}, {name :"About" , handler : () => aboutHandler()}];



  return (
  <>
    <div className="h-screen bg-white w-full ">
      {/* Navbar */}
      <div className="p-2 flex justify-evenly items-center bg-purple-950">
      <h1 className="text-white text-2xl font-semibold">BLOG APP</h1>

      <div>
        <ul className="flex gap-10 ">
          {list
            ? list.map((li,idx) => (
                <li key={idx} onClick={li.handler} className="hover:cursor-pointer hover:text-purple-400">
                  {li.name}
                </li>
              ))
            : ""}
        </ul>
      </div>
      <div>
      </div>
        <Button title={"Logout"} handler={logoutHandler} icon={""}/>
    </div>

    <div className="p-3 ">
      <h1 className="text-black text-3xl font-bold text-center">Welcome To Our Blog Website</h1>
      <p className="text-black text-center">Here YOU Can Post Or See Blogs as many as you can!</p>
    </div>
    </div>
    <ToastContainer />
    </>
  )
}

export default page