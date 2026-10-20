"use client";

import { ToastContainer, toast } from "react-toastify";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "../components/Buttoncomp";
import Input from "../components/Input";
import { useState } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase/config.js";

import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";

let isUserSignup: boolean = false;
const provider = new GoogleAuthProvider();

export  const saveDataIntoDb = async (name = "", data) => {
  try {
    const userDataSaved = await setDoc(doc(db, "users", data.uid), {
      email: data.email,
      name: data.displayName ? data.displayName : name,
      photoUrl : data.photoURL ? data.photoURL : "" 
    });
    console.log("Saved", userDataSaved);
  } catch (error) {
    console.log(error);
  }
};

const page = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  // console.log(form);

  const signupHandler = async () => {
    if (
      form.username.trim() == "" ||
      form.email.trim() == "" ||
      form.password.trim() == ""
    ) {
      return toast.warning("Please Enter Fields");
    }
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password,
      );
      console.log(response.user);
      if (response.user) {
        saveDataIntoDb(form.username, response.user);
        toast.success("User Signup Successfully!");
        isUserSignup = true;
        console.log(isUserSignup);
        if (isUserSignup) {
          setTimeout(() => {
            router.push("/Home");
          }, 1000);
        }
      }
    } catch (error) {
      // console.log(error.message);
      // console.log(error.code);
      if (
        error.message == "(auth/email-already-in-use)" ||
        error.code === "auth/email-already-in-use"
      ) {
        toast.error("Email Already in Use!");
      }
    }
  };

  const signUpWithGoogleHandler = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      console.log(response.user);

      if (response.user) {
        saveDataIntoDb(form.username , response.user)
        toast.success("User Signup SuccessFully!");
        router.push("/Home");
      }
    } catch (error) {
      toast.error("Invalid Credntials");
    }
  };

  const handleInputChange = (key:unknown, value: string) => {
    console.log(key, value);
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="h-screen bg-white text-black flex justify-center items-center flex-col gap-3">
      <div className="bg-white p-2 border rounded w-[350px] flex gap-4 flex-col p-3 items-center">
        <h1 className=" text-4xl font-semibold text-center ">SignUp</h1>
        <div className="">
          <Input
            title={"Enter Your Username"}
            type={"text"}
            handler={handleInputChange}
            id={"username"}
            value={form.username}
          />
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
            <Button icon={""} title={"Signup"} handler={signupHandler} />
            <Button
              icon={<GoogleIcon />}
              title={"Signup With Google"}
              handler={signUpWithGoogleHandler}
            />
          </div>
          <Link href={"/Login"}>
            {" "}
            <p className="text-sm font-sans text-center hover:underline hover:cursor-pointer ">
              Already Have an Account?, Login
            </p>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default page;
