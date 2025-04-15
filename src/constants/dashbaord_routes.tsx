import ROUTES from "@/constants/routes";
import { LayoutDashboard, Folders, UserPlus, Settings, MessageCircleMore, ShoppingBag } from 'lucide-react';


export const SIDEBAR = [
    {
        icon: <LayoutDashboard />,
        label: "Dashboard",
        link: ROUTES.dashboard.main,
    },
    {
        icon: <ShoppingBag />,
        label: "Orders",
        link: ROUTES.dashboard.orders,
    },
    {
        icon: <UserPlus />,
        label: "Customers",
        link: ROUTES.dashboard.customers,
    },
    {
        icon: <Folders />,
        label: "Inventory",
        link: ROUTES.dashboard.inventory,
    },
    {
        icon: <MessageCircleMore />,
        label: "Conversations",
        link: ROUTES.dashboard.conversations,
    },
    {
        icon: <Settings />,
        label: "Settings",
        link: ROUTES.dashboard.profile,
    }

];