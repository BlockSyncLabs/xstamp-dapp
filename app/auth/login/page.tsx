"use client";

import { SyntheticEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HomeLogo from "@/components/home-logo";

import AuthHero from "@/components/Auth/AuthHero";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = (e: SyntheticEvent) => {
    e.preventDefault();
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-between gap-[4.56rem]">
        <AuthHero
          title="Copyright authenticity of digital assets of content creators and artists"
          icon="/icons/creators.svg"
        />
        <div className="w-[21.875rem] lg:w-[37.5rem] mt-[4rem]">
        <HomeLogo className="w-20 h-20 text-center border-2 border-primary-foreground rounded-[50%] md:hidden flex items-center justify-center mr-auto md:mr-0 text-xs mb-[2.25rem]" />
          <h2 className="text-2xl font-semibold mb-6">Log In</h2>
          <p className="text-[1.25rem] font-medium">Enter your details</p>
          <form className="mt-6">
            <div>
              <label className="font-medium">Email Address</label>
              <div className="mt-2 w-full">
                <input
                  className="p-2 border border-solid border-[#E2D8D8] rounded-lg w-full bg-transparent"
                  type="text"
                  //   name="email"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="flex justify-between">
                <p className="font-medium">Password</p>
                <Link
                  href=""
                  className="text-[rgba(255,255,255,0.70)] font-medium"
                >
                  Forgot?
                </Link>
              </label>
              <div className="mt-2 relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="py-2 pl-2 pr-12 border border-solid border-[#E2D8D8] rounded-lg w-full bg-transparent"
                  placeholder="Choose your password"
                />
                <button
                  className="absolute right-4 top-3 cursor-pointer"
                  onClick={toggleShowPassword}
                >
                  <Image src="/icons/eye.svg" alt="" width={20} height={20} />
                </button>
              </div>
            </div>
            <div className="text-center mt-9">
              {/* <button
            type="submit"
            className="uppercase rounded-lg bg-[#36d693] font-semibold w-[20.0625rem] text-black p-3"
          >
            Log In
          </button> */}
              <Button className="w-[20.0625rem] font-semibold text-black p-3 uppercase rounded-lg text-lg">
                Log In
              </Button>
            </div>
          </form>
          <div className="flex flex-col justify-center items-center mt-3">
            <div className="flex gap-1">
              <p className="font-medium">Are you new here?</p>
              <Link href="/auth/signup" className="font-medium text-[#2cd1b4]">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
