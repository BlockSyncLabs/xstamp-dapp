import Image from "next/image";
import { Instagram, Twitter } from "lucide-react";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import Section from "./section";
import expertImg from "./assests/community/experts.svg";
import eventsImg from "./assests/community/events.svg";
import { cn } from "@/lib/utils";

const communities = [
  {
    img: expertImg,
    title: "Meet with Our Expert",
    desc: "Engage with our professionals in our lively forums.",
  },
  {
    img: eventsImg,
    title: "Community Events",
    desc: "Engage in seminars, recieve our newsletter",
  },
];

const socials = [
  {
    icon: Twitter,
    className: "hover:text-[#1DA1F2]",
  },
  {
    icon: Instagram,
    className: "hover:text-[#E1306C]",
  },
  {
    icon: DiscordLogoIcon,
    className: "hover:text-[#7289DA]",
  },
];

const Community = () => {
  return (
    <Section title="Join our Community">
      <div className="home__revolution--ul p-8 max-w-3xl mx-auto">
        <ul className="flex justify-center gap-4">
          {communities.map((community, index) => {
            return (
              <li
                key={index}
                className={cn([
                  "flex flex-col items-center justify-center w-full max-w-[450px] border rounded-md border-primary-foreground p-4 py-10",
                  index === 0 ? "bg-[#2E9582]" : "bg-[#36B0B0]",
                ])}
              >
                <figure className="flex items-center justify-center">
                  <Image
                    src={community.img}
                    alt={community.title}
                    width={100}
                    height={100}
                  />
                </figure>
                <h3 className="text-xl my-5">{community.title}</h3>
                <p className="text-center">{community.desc}</p>
              </li>
            );
          })}
        </ul>
        <ul className="flex items-center justify-center mt-8">
          {socials.map((social, index) => {
            return (
              <li key={index} className="mr-4">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-[#373A39] text-[#4ECB71] rounded-full p-2 w-10 h-10 flex items-center justify-center transition-colors duration-200 ease-in-out ${social.className}`}
                >
                  <social.icon />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Community;
