import Image from "next/image";
import Section from "./section";
import badgesImg from "./assests/works/badges.svg";
import completeImg from "./assests/works/complete.svg";
import contentImg from "./assests/works/content.svg";
import profileImg from "./assests/works/profile.svg";

const items = [
  {
    img: profileImg,
    title: "Set up profile",
    desc: "Signup on the platform, endeavor to fill all the inputs.",
    className: "",
  },
  {
    img: contentImg,
    title: "Upload your content",
    desc: "Upload the content in any format, intended to be copyrighted.",
    className: "mt-6 relative top-[1rem]",
  },
  {
    img: badgesImg,
    title: "Generate badge",
    desc: "Generate Badge embedded with a QR code with can be share to other platform for other to scan",
    className: "",
  },
  {
    img: completeImg,
    title: "Complete",
    desc: "Receive notifications when your content is used, and collect compensation as per your agreement or flagged them down",
    className: "mt-12",
  },
];

const Works = () => {
  return (
    <Section title="How it works">
      <ul className="flex items-center justify-center flex-wrap gap-8">
        {items.map((item) => {
          return (
            <li
              key={item.title}
              className={`w-1/2 max-w-[419px] border rounded-md border-primary-foreground p-4 ${item.className}`}
            >
              <figure className="mb-2">
                <Image src={item.img} alt={item.title} width={50} height={50} />
              </figure>
              <h3 className="mb-1">{item.title}</h3>
              <p className="">{item.desc}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Works;
