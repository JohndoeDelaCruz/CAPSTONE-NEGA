import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";

type Props = {
    className?: string;
};

export const Sidebar = ({ className  }: Props) => {
    return (
        <div className={cn("flex  h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col", 
        className,
        )}>
            <Link href="/read">
            <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/download.svg" height={40} width={40} alt="ReadnRiseLogo" />
                    <h1 className="text-2xl font-extrabold text-yellow-600 tracking-wide">
                    Read n Rise
                    </h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem 
                label="Read" 
                href="/read" 
                iconSrc="/book.svg"
                />
                <SidebarItem 
                label="Leaderboard" 
                href="/leaderboard" 
                iconSrc="/podium.svg"
                />
                <SidebarItem 
                label="Quest" 
                href="/quest" 
                iconSrc="/quest.svg"
                />
            </div>
        </div>
    );
};