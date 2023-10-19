import Link from "next/link";
import { Button } from "../ui/button";
import headerImg from "./assests/header.svg";
import Image from "next/image";

const ctas = [
  {
    text: "Get Started",
    href: "/",
  },
  {
    text: "Learn More",
    href: "/",
  },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex-1">
        <h1 className="text-5xl">
          Protect your <span className="text-primary-foreground">Product</span>{" "}
          from unauthorized use
        </h1>
        <p className="mt-5 mb-3 text-xl max-w-lg">
          Copyright your digital assets and original contents here
        </p>
        <ul className="flex items-center justify-start">
          {ctas.map((cta, index) => {
            return (
              <li key={cta.text} className="first:mr-3">
                <Button
                  asChild
                  variant={index === 0 ? "outline" : "default"}
                  className={
                    index === 0
                      ? "border-primary-foreground hover:bg-primary"
                      : ""
                  }
                >
                  <Link href={cta.href}>{cta.text}</Link>
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
      <figure>
        <Image src={headerImg} alt="Header" width={500} height={500} />
      </figure>
    </header>
  );
};

export default Header;
