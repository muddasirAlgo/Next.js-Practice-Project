import { PNG } from '@/assets/png'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Bell, ChevronDown } from 'lucide-react'

export default function Navbar() {
    return (
        <div className="w-full flex items-center justify-between px-6 py-4 border-b bg-white">
            {/* Left: Title */}
            <h1 className="text-[20px] font-medium font-poppins text-gray-800">Dashboard</h1>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
                {/* Store Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="bg-orange-50 text-sm font-medium">
                            Nanny’s Shop
                            <ChevronDown className="ml-1 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        Nanny's

                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Notification Icon */}
                <Button variant="ghost" size="icon" className="text-primaryColor bg-authBg">
                    <Bell className="h-20 w-20" />
                </Button>

                {/* Profile Avatar */}
                <Avatar className="h-12 w-12">
                    <AvatarImage src={PNG.Profile} alt="User" />
                    <AvatarFallback>NA</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}
