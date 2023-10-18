import Link from "next/link";

const pages = ["Contacts", "Resources", "About", "FAQs", "Privacy Policy"];

const Footer = () => {
  return (
    <footer className="">
      <ul className=" flex items-center justify-evenly flex-wrap">
        {pages.map((page) => {
          let path = page.toLowerCase().replace(/\s/g, "-");

          return (
            <li key={path}>
              <Link
                href={`/${path}`}
                className="text-white hover:text-primary-foreground"
              >
                {page}
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
