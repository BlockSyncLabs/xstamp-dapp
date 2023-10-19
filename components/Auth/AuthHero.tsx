import { FC } from "react";
import Image from "next/image";

interface AuthHeroProps {
    title: string;
    icon: string
}

const AuthHero: FC<AuthHeroProps> = ({title, icon}) => {
    return (
        <div className="bg-proof-link-green py-[4rem] px-[2.125rem] rounded-[2rem] w-[37.5rem]">
            <h2 className="text-[1.6rem] font-medium text-black">{title}</h2>
            <div className="mt-36 flex flex-col justify-center items-center">
                <Image src={icon} alt="" width={300} height={40}/>
            </div>
        </div>
    )
}

export default AuthHero;