import Link from "next/link";
import React from "react";

interface HomeLogoProps {
  className?: string;
}

const HomeLogo = ({ className = "" }: HomeLogoProps) => {
  return (
    <Link
      href="/"
      translate="no"
      className={`text-primary-foreground rounded-[50%] ${className}`}
    >
      ProofLink
    </Link>
  );
};

export default HomeLogo;
