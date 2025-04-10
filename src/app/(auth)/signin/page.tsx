
import SignInForm from "@/components/Auth/SignIn/SignInForm";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { SVG } from "@/assets/svg";

export default function SignInPage() {
  return (
    <div className="bg-authBg flex-1 flex items-center justify-center h-screen p-1 sm:p-4">
      <Card className="w-full md:h-4/5 max-h-full max-w-lg bg-white shadow-none border-none">
        <CardContent className="px-4 sm:px-8 pt-10 sm:pt-0 sm:!py-10">
        <Image
        src={SVG.LOGO}
        alt="Logo"
        className="select-none justify-center mx-auto mb-4"
        width={60}
        height={60}
        style={{
          width: "auto",
          height: "auto",
        }}
        quality={100}
      />
          <div className="text-heading text-center mb-8 text-[20px] sm:text-[24px] font-poppins">
            <h1 className="font-medium">{"Welcome Back!"}</h1>
            <h1 className="text-[16px] text-gray-400">{"Login to your account"}</h1>
          </div>
          <div className="pt-4">
          < SignInForm />
          </div>
          
        </CardContent>
      </Card>
    </div>
  );
}
