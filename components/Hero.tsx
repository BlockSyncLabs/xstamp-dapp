import Image from "next/image";

import CopyrightIcon from "@/public/icons/copyright";

const Hero = () => {
  return (
    <div className="px-16 grid grid-cols-2 lg-max:grid-cols-1">
      <div className="pt-36 lg-max:pt-32 md-max:pt-0">
        <h1 className="text-5xl md-max:text-2xl font-semibold">
          Protect your <span className="text-stamp-green">Product</span> from
          unauthorized use
        </h1>
        <p className="text-[2rem] md-max:text-base font-medium mt-4">
          Copyright your digital assets and original contents here
        </p>
        <div className="mt-3 flex flex-row gap-4">
          <button className="text-2xl md-max:text-base font-semibold py-2 px-4 bg-transparent border-4 md-max:border-2 border-solid border-stamp-green text-stamp-green rounded-xl md-max:rounded-[0.25rem]">
            Get Started
          </button>
          <button className="text-2xl md-max:text-base font-semibold py-2 px-4 bg-stamp-green text-black rounded-xl md-max:rounded-[0.25rem]">
            Learn More
          </button>
        </div>
      </div>
      <div>
        {/* <CopyrightIcon /> */}
        <Image src="/icons/copyright.svg" alt="" width={567} height={529} layout="responsive"/>
      </div>
    </div>
  );
};

export default Hero;
