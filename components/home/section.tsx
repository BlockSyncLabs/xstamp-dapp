import React, { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  title: string | React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="my-16">
      <header className="mb-8">
        <h2 className="text-center mx-auto max-w-[60rem] text-4xl">{title}</h2>
      </header>
      {children}
    </section>
  );
};

export default Section;
