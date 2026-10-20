"use client";

import GoogleIcon from "@mui/icons-material/Google";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "../components/Buttoncomp";
import Input from "../components/Input";
import { auth } from '../firebase/config.js';

import { GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import { log } from "firebase/firestore/pipelines";
let isUserLogin:boolean = false;
const provider = new GoogleAuthProvider();

const page = () => {
  const router = useRouter()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // console.log(form);

  const LoginHandler = async () => {
    if (
      form.email.trim() == "" ||
      form.password.trim() == ""
    ) {
      return toast.warning("Please Enter Fields");
    
    }
    try{
    const response = await signInWithEmailAndPassword(auth, form.email, form.password)
    console.log(response.user);
    if(response.user){
      toast.success("User Login Successfully!")
      isUserLogin = true;
    if(isUserLogin){
      setTimeout(() => {
     router.push("/Home")
      },2000)
    }
      
    }
    
    }catch(error) {
  if(error.message == "Firebase: Error (auth/invalid-credential)." || error.code == "auth/invalid-credential"){
    toast.error("Invalid Credentials")
  }
    // console.log(error.message);
    // console.log(error.code);
   
    
    }
    
  };
  
  const LoginWithGoogleHandler = async () => {
   try {
    const response = await  signInWithPopup(auth, provider);
    console.log(response.user);

    if(response.user) {
      toast.success("User Login SuccessFully!")
      isUserLogin = true
      if(isUserLogin){
        console.log(isUserLogin)
        router.push("/Home")
      }
    }
   } catch (error) {
    console.log(error.code);
    console.log(error.message);
    
    toast.error("Invalid Credntials")
    
    
   }

  
  }



  const handleInputChange = (key, value:string) => {
    console.log(key, value);
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="h-screen bg-white text-black flex justify-center items-center flex-col gap-3">
      <div className="bg-white p-2 border rounded w-[350px] flex gap-4 flex-col p-3 items-center">
        <h1 className=" text-4xl font-semibold text-center ">Login</h1>
        <div className="">
          <Input
            title={"Enter Your Email"}
            type={"email"}
            handler={handleInputChange}
            id={"email"}
            value={form.email}
          />
          <Input
            title={"Enter Your Password"}
            type={"password"}
            handler={handleInputChange}
            id={"password"}
            value={form.password}
          />
          <div className="flex justify-center p-2 gap-4 flex-col items-center">
            <Button icon={""} title={"Login"} handler={LoginHandler} />
            <Button
              icon={<GoogleIcon />}
              title={"Login With Google"}
              handler={LoginWithGoogleHandler}
            />
          </div>
          <Link href={"/Signup"}>
            {" "}
            <p className="text-sm font-sans text-center hover:underline hover:cursor-pointer ">
              Don't  Have an Account?, Signup
            </p>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default page;
