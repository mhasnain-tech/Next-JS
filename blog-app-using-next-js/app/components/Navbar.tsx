"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {ToastContainer , toast } from "react-toastify";
import Button2 from './Buttoncomp';


const Navbar = () => {
  const router = useRouter();

  const homeHandler = () => {
    router.push("/")
  }
  const blogsHandler = () => {
    router.push("/blog")
  }

 const createBlogsHandler = (message:string) => {
  console.log("Main chalah")
   toast.warning(message)
 } 
const aboutHandler = () => {
  router.push("/about")
}
  const list = [{name:"Home" , handler : () => homeHandler()}, {name:"Blogs" , handler : () => blogsHandler()}, {name:"Create Blog" , handler: () => createBlogsHandler("Please Login / Signup First!")}, {name :"About" , handler : () => aboutHandler()}];




  return (
    <>
    <div className="p-2 flex justify-between items-center bg-purple-950">
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

      <div className="p-1 flex gap-4 ">
      <Link href={"/Signup"}><Button2 title={"SignUp"}/></Link>
      <Link href={"/Login"}><Button2 title={"Login"}/></Link>
       
      </div>
    </div>
    <ToastContainer />
    </>
  );
};

export default Navbar;
