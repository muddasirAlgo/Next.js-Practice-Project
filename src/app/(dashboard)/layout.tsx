
import Navbar from "@/components/Dashboard/main/navBar";
import SidebarWrapper from "@/components/Dashboard/main/page";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "My Dashboard",
    description: "User Dashboard",
    icons: "/static/assets/svg/logo.svg",
};
export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="!bg-authBg overflow-x-hidden">
            <SidebarWrapper>
                <Navbar/>
                <div className="min-h-[65vh]">{children}</div>
            </SidebarWrapper>
            {/* <Footer /> */}

        </main>
    );
}