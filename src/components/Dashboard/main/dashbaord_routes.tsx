import { PNG } from "@/assets/png";
import ROUTES from "@/constants/routes";
import { LayoutDashboard, Folders, UserPlus, Settings, MessageCircleMore, ShoppingBag } from 'lucide-react';


export const SIDEBAR = [
    {
        icon: <LayoutDashboard />,
        label: "Dashboard",
        link: ROUTES.auth.forgot,
    },
    {
        icon: <ShoppingBag />,
        label: "Orders",
        link: ROUTES.auth.forgot,
    },
    {
        icon: <UserPlus />,
        label: "Customers",
        link: ROUTES.auth.forgot,
    },
    {
        icon: <Folders />,
        label: "Inventory",
        link: ROUTES.auth.forgot,
    },
    {
        icon: <MessageCircleMore />,
        label: "Conversations",
        link: ROUTES.auth.forgot,
    },
    {
        icon: <Settings />,
        label: "Settings",
        link: ROUTES.auth.forgot,
    }

];