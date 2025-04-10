'use client'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import { PasswordInput } from "@/components/ui/password-input";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { InputWithIcon } from "../../ui/input-with-icon";
import { Mail } from "lucide-react";
const SignInForm = () => {

    // router
    const router = useRouter();

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    return (
        <Form {...form}>
            <form>
                <div className="space-y-8">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    {/* <InputWithIcon
                    {...field}
                    id="search"
                    icon={<Mail/>}
                    placeholder="Search..."
                    iconPosition="left"
                  /> */}
                                    <Input
                                        type="email"
                                        placeholder={"Enter your email"}
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <PasswordInput
                                        placeholder={"Enter your password"}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="space-y-4 pt-4">
                    <div className="flex justify-end mt-1">
                        <Link href={ROUTES.auth.forgot} className="font-poppins text-[14px] sm:text-[14px] font-normal text-primaryColor">
                            {"Recover Password?"}
                        </Link>
                    </div>


                    <div className="flex justify-center gap-2 mt-1 pt-4">
                        <p className="ont-poppins text-[14px] sm:text-[14px] font-normal text-gray-400">Don’t have an account </p>
                        <Link href={ROUTES.auth.signup} className="font-poppins text-[14px] sm:text-[14px] font-normal text-primaryColor">
                            {"Sign Up"}
                        </Link>

                    </div>


                </div>
                <div className="pt-6"><LoadingButton size={"lg"} type="submit" className="w-full bg-primaryColor hover:bg-authBg hover:text-black">
                    {"Login"}
                </LoadingButton></div>
            </form>
        </Form>
    );
};

export default SignInForm;
