"use client";
import React from "react";
import Image from "next/image";
import chatGPTLogo from "../public/ChatGPT_logo.svg";
import { signIn } from "next-auth/react";
import Google from "next-auth/providers/google";

function Login() {
  return (
    <div className=" bg-[#11A37F] flex flex-col justify-center items-center h-screen w-screen text-center">
      <Image alt="ChatGPT Logo" src={chatGPTLogo} width={300} height={300} />
      <button onClick={() => signIn("google")} className="mt-10 text-white font-bold text-3xl animate-pulse">
        Sign In To Use ChatGPT
      </button>
    </div>
  );
}

export default Login;
