'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/Dashboard/main/navBar'
import SidebarWrapper from '@/components/Dashboard/main/sideBar'


export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    
    const getTitleFromPath = () => {
        const segments = pathname.split('/').filter(Boolean)
        const last = segments[segments.length - 1] || 'dashboard'
        return last.charAt(0).toUpperCase() + last.slice(1)
    }

    return (
        <main className="bg-authBg overflow-x-hidden">
            <SidebarWrapper>
                <Navbar title={getTitleFromPath()} />
                <div className="min-h-[65vh]">{children}</div>
            </SidebarWrapper>
        </main>
    )
}
