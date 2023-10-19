import Section from "./section";
import Image from "next/image";
import integrationImg from "./assests/revolution/integration.svg";
import uploadImg from "./assests/revolution/upload.svg";
import ownershipImg from "./assests/revolution/ownership.svg";
import contractImg from "./assests/revolution/contract.svg";
import publicImg from "./assests/revolution/public.svg";

const revolutions = [
  {
    img: integrationImg,
    title: "Blockchain Integration",
    desc: "Decentralized, tamper-proof copyright authentication using the MultiversX network.",
  },
  {
    img: uploadImg,
    title: "File Format Upload",
    desc: "Supports a variety of file formats, including those for text, music, video, and image files.",
  },
  {
    img: ownershipImg,
    title: "Immutable Ownership",
    desc: "MultiversX records with timestamps create an unchangeable record of content creation for digital creators and artists.",
  },
  {
    img: contractImg,
    title: "Smart Contract",
    desc: "Automated smart contracts to enforce payments and copyright agreements.",
  },
  {
    img: publicImg,
    title: "Public Access",
    desc: "The content will be available to the public for verification of ownership of content for transparency.",
  },
];

const Revolution = () => {
  return (
    <Section
      title={
        <>
          Revolutionizing the illegal use of original contents and digital
          assets on the{" "}
          <span className="text-primary-foreground">MultiversX</span> blockchain
        </>
      }
    >
      <ul className="flex items-center justify-center flex-wrap gap-4 py-8 px-4 mt-6 rounded-3xl home__revolution--ul">
        {revolutions.map((revolution, index) => {
          return (
            <li
              key={index}
              className="flex flex-col items-center justify-center w-1/2 max-w-[450px] border rounded-md border-primary-foreground p-4"
            >
              <figure className="flex items-center justify-center">
                <Image
                  src={revolution.img}
                  alt={revolution.title}
                  width={50}
                  height={50}
                />
              </figure>
              <h3 className="text-primary">{revolution.title}</h3>
              <p className="text-center">{revolution.desc}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Revolution;
