import Link from "next/link";
import Image from "next/image";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className="flex justify-between px-16 pt-6">
      {/* <div className="w-[]"> */}
      <div className="bg-white w-[7.25rem] py-2 px-0.5 rounded-[0.6875rem]">
        <div
          className={`${josefinSans.className} bg-stamp-bg text-2xl rounded-md flex flex-col justify-center items-center`}
        >
          <div>xStamp</div>
        </div>
        {/* <Image src="/images/logo.png" alt="xStamp logo" width={116} height={48}/> */}
        {/* </div> */}
      </div>
      <div className="w-[25rem]">
        <div className="flex justify-between font-medium text-2xl">
          <div className="">
            <Link href="">Home</Link>
          </div>
          <div>
            <Link href="">About</Link>
          </div>
          <div>
            <Link href="">Features</Link>
          </div>
          <div>
            <Link href="">Blog</Link>
          </div>
        </div>
      </div>
      <div>
        <button className="bg-green-600 uppercase p-2 text-black font-semibold text-2xl rounded-lg">Log in</button>
      </div>
    </header>
  );
};

export default Header;
