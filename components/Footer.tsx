import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-12 font-medium md-max:font-normal text-2xl md-max:text-sm">
      <div className="flex justify-between w-[47.9375rem] md-max:w-[22rem]">
        <div>
          <Link href="">Contacts</Link>
        </div>
        <div>
          <Link href="">Resources</Link>
        </div>
        <div>
          <Link href="">About</Link>
        </div>
        <div>
          <Link href="">FAQs</Link>
        </div>
        <div>
          <Link href="">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
