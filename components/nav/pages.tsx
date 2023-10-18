import Link from "next/link";
import React from "react";

const pages = ["Home", "About", "Features", "Blog"];

const Pages = () => {
  return (
    <ul className="flex flex-col items-center justify-between md:flex-row">
      {pages.map((page) => {
        const path = page === "Home" ? "/" : `/${page.toLowerCase()}`;

        return (
          <li key={page}>
            <Link href={path} className=" hover:text-primary-foreground">
              {page}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Pages;
