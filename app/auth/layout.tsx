import AuthHero from "@/components/Auth/AuthHero";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-[7.25rem] h-screen py-[4.3rem]">
      <div className="flex justify-between gap-[4.56rem]">
        <AuthHero title="Copyright authenticity of digital assets of content creators and artists" icon="/icons/creators.svg" />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
