"use client";
import * as React from "react";
import { Menu, X } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
    useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import ROUTES from "@/constants/routes";
import { SIDEBAR } from "../../../constants/dashbaord_routes";
import { SVG } from "@/assets/svg";
import { PNG } from "@/assets/png";

function SidebarContents() {
    const { open, setOpenMobile } = useSidebar();
    const router = useRouter();
    const pathName = usePathname();
    const handleNavigation = (route: string) => {
        router.push(`http://localhost:3000/${route}`);

    };
    return (
        <>
            <SidebarHeader className="bg-white text-primary p-2 flex items-center">
                <div
                    className={`flex-1 ${open ? "flex justify-between w-full" : "flex-col items-center"
                        }`}
                >
                    {/* Logo Section */}
                    <div
                        className={`${open ? "justify-start" : "mb-4 justify-center"
                            } flex items-center cursor-pointer`}
                        onClick={() => handleNavigation(ROUTES.dashboard.main)}
                    >
                        {/* <Image
                            src={open ? SVG.LOGO : SVG.LOGO}
                            alt="Logo"
                            className="select-none mb-2 pointer-events-none"
                            width={open ? 300 : 100}
                            height={open ? 300 : 100}
                            style={{
                                width: "auto",
                                height: "auto",
                                maxWidth: open ? "100%" : "60px",
                            }}
                            quality={100}
                            priority
                            placeholder="blur"
                            blurDataURL={SVG.LOGO}
                            loading="eager"
                        /> */}
                        <div className={`flex-1 ${open ? "flex mx-8 items-center w-full" : "flex-col items-center"
                        }`}>
                        
                            <Image
                            src={SVG.LOGO}
                            alt="Logo"
                            className={open ? "mr-4 select-none mb-2 pointer-events-none" : "mx-auto"}
                            width={open ? 60 : 40}
                            height={open ? 60 : 40}
                            priority
                        />
                            {open && (
                                <span className={"font-medium font-poppins text-[20px]"}>Metrix</span>
                            )}
                            </div>




                    </div>
                    {/* Sidebar Trigger Button (Menu/X icon) */}
                    <SidebarTrigger>
                        {open ? (
                            <X className="h-6 w-6 text-primary" />
                        ) : (
                            <Menu className={`h-6 w-6 text-primary`} />
                        )}
                    </SidebarTrigger>
                </div>
            </SidebarHeader>
            <SidebarContent className="bg-white text-primary overflow-auto scrollbar-hidden">
                <SidebarMenu>
                    {SIDEBAR.map((sidebarItem, index) => (
                        <SidebarMenuItem
                            key={index}
                            className={open ? "my-2" : "my-2 mx-auto"}
                            onClick={() => {
                                setTimeout(() => {
                                    setOpenMobile(false);
                                }, 1000);
                            }}
                        >
                            <SidebarMenuButton
                                className={`hover:bg-primaryColor hover:text-white hover:px-4 py-6 font-poppins text-[14px] ${open ? "px-8" : "px-2"
                                    } flex items-center ${pathName === sidebarItem.link
                                        ? "bg-primaryColor text-primary text-white"
                                        : ""
                                    }`}
                                onClick={() => handleNavigation(sidebarItem.link)}
                            >
                                <span className={open ? "mr-2" : "mx-auto flex hover:text-white "}>
                                    {sidebarItem.icon}
                                </span>

                                {/* <Image
                                    src={sidebarItem.icon}
                                    alt={sidebarItem.label}
                                    className={open ? "mr-4" : "mx-auto"}
                                    width={open ? 24 : 60}
                                    height={open ? 24 : 60}
                                    priority
                                /> */}
                                {open && (
                                    <span>{sidebarItem.label}</span>
                                )}
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="-mt-2 bg-white text-primary font-poppins">

                <SidebarMenu>
                    <SidebarMenuItem
                        className="my-1"
                        onClick={() => {
                            setTimeout(() => {
                                setOpenMobile(false);
                            }, 1000);
                        }}
                    >
                        {/* <SidebarMenuButton
                            className={`hover:bg-primary py-6 hover:text-white ${open ? "px-4" : "px-2"
                                } flex items-center ${pathName === "/dashboard/setting"
                                    ? "bg-primary text-primary"
                                    : ""
                                }`}
                            onClick={() => handleNavigation(ROUTES.auth.forgot)}
                        >
                            <Image
                                src={SVG.LOGO}
                                alt="Settings"
                                className={open ? "mr-4" : "mx-auto"}
                                width={open ? 30 : 40}
                                height={open ? 30 : 40}
                                priority
                            />
                            {open && <span className="text-primary">Setting</span>}
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem
                        className="my-2"
                        onClick={() => {
                            setTimeout(() => {
                                setOpenMobile(false);
                            }, 1000);
                        }}
                    > */}
                        <div className="flex flex-col gap-3">
                            <div className={`bg-gray-100 border py-3 ${open ? "px-4" : "px-2"} flex items-center ${pathName === "/dashboard/profile" ? "bg-primary text-primary" : ""} rounded-2xl`}>
                                <Image
                                    src={PNG.Support}
                                    alt="Account"
                                    className={open ? "mr-4" : "mx-auto"}
                                    width={open ? 30 : 40}
                                    height={open ? 30 : 40}
                                    priority
                                />
                                {open && <span className="text-primary font-light font-poppins text-[14px]">Contact Support</span>}

                            </div>

                            <div className={`bg-[#ffcc914f] border py-3 ${open ? "px-4" : "px-2"} flex flex-col items-center ${pathName === "/dashboard/profile" ? "bg-primary text-primary" : ""} rounded-2xl`}>
                                {/* Flex row for image and text */}
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={PNG.Rewards}
                                        alt="Account"
                                        className={open ? "mr-4" : "mx-auto"}
                                        width={open ? 30 : 40}
                                        height={open ? 30 : 40}
                                        priority
                                    />
                                    {open && <span className="text-primary font-poppins font-light text-[14px]">Free Gift Awaits You!</span>}
                                </div>

                                {/* Text below both the image and the first text */}
                                {open && (
                                    <p className="text-primary font-poppins font-light text-[12px] mt-4">
                                        Upgrade your account
                                    </p>
                                )}
                            </div>
                            <SidebarMenuButton
                                className={`hover:bg-[#cc5f5f40] py-6 hover:text-white ${open ? "px-4" : "px-2"
                                    } flex items-center ${pathName === "/dashboard/profile"
                                        ? "bg-primary text-primary"
                                        : ""
                                    }`}
                                onClick={() => handleNavigation("/signin")}
                            >
                                <Image
                                    src={PNG.LogOut}
                                    alt="Account"
                                    className={open ? "mr-4" : "mx-auto"}
                                    width={open ? 30 : 40}
                                    height={open ? 30 : 40}
                                    priority
                                />
                                {open && <span className="text-[#CC5F5F]">Log Out</span>}
                            </SidebarMenuButton>
                        </div>

                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </>
    );
}
interface MainContentProps {
    children: React.ReactNode;
}
function MainContent({ children }: MainContentProps) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false);
    const handleMobileToggle = () => {
        setIsMobileSidebarOpen(!isMobileSidebarOpen);
    };
    return (
        <div className="flex-1 overflow-x-auto relative">
            <div className="md:hidden">
                <SidebarTrigger
                    onClick={handleMobileToggle}
                    className=" absolute top-[27px] "
                >
                    <Menu className=" h-6 w-6 text-primaryThemeColor" />
                </SidebarTrigger>
            </div>
            {/* Render the children below the trigger */}
            {children}
        </div>
    );
}
export default function SidebarWrapper({ children }: MainContentProps) {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-full">
                <Sidebar
                    collapsible="icon"
                    className="transition-all duration-300 ease-in-out h-full border-r-0 bg-primaryThemeColor text-white"
                >
                    <SidebarContents />
                </Sidebar>
                <MainContent>{children}</MainContent>
            </div>
        </SidebarProvider>
    );
}

