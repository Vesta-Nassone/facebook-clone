import {useSession} from "next-auth/client";
import SidebarRow from "../components/SidebarRow"
import {
    ChevronDoubleDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from "@heroicons/react/outline";
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
    
} from "@heroicons/react/solid"

function Sidebar() {
    const [session, loading] = useSession();
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow 
            Icon={UsersIcon}
            title="Friends"/>
            <SidebarRow 
            Icon={UserGroupIcon}
            title="Friends"/><SidebarRow 
            Icon={ShoppingBagIcon}

            title="Friends"/><SidebarRow 
            Icon={DesktopComputerIcon}
            title="Friends"/><SidebarRow 
            Icon={CalendarIcon}
            title="Friends"/>
            <SidebarRow 
            Icon={ChevronDoubleDownIcon}
            title="Friends"/>
        </div>
    )
}

export default Sidebar
