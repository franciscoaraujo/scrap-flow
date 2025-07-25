"use client"
import React from 'react'

import {CoinsIcon, HomeIcon, Layers2Icon, MenuIcon, ShieldCheckIcon} from 'lucide-react'
import Logo from './Logo'
import Link from 'next/link'
import {Button, buttonVariants} from '@/components/ui/button'
import {usePathname} from 'next/navigation'
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";

const routes = [
    {
        href: "",
        lable: "Home",
        icon: HomeIcon,
    },

    {
        href: "workflows",
        lable: "Workflows",
        icon: Layers2Icon
    },

    {
        href: "credentials",
        lable: "Credentials",
        icon: ShieldCheckIcon

    },
    {
        href: "billing",
        lable: "Billing",
        icon: CoinsIcon

    },

]

function DesktopSidebar() {
    const pathname = usePathname()
    const activeRoute = routes.find(
        (route) => route.href.length > 0
            && pathname.includes(route.href)
    ) || routes[0];

    return (
        <div className='hidden relative md:block min-w-[280px]
    max-w-[280px] h-screen overflow-hidden w-full 
    bg-primary/5 dark:bg-secondary/30 dark:text-foreground 
    text-muted-foreground border-r-2 border-separate'>
            <div className='flex items-center justify-center
        gap-2 border-b-[1px] border-separator p-4'>
                <Logo/>
            </div>
            <div className='p-2'>TODO CREDITS</div>
            <div className='flex flex-col p-2'>
                {routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={buttonVariants({
                            variant: activeRoute.href === route.href
                                ? "sidebarItemActive"
                                : "sidebarItem",
                        })}
                    >
                        <route.icon size={20}/>
                        {route.lable}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export function MobileSidebar() {
    const [isOpen, setOpen] = React.useState(false)
    const pathname = usePathname()
    const activeRoute = routes.find(
        (route) => route.href.length > 0
            && pathname.includes(route.href)
    ) || routes[0];
    return <div className="block border-separate bg-background md:hidden">
        <nav className="container flex items-center justify-between px-8">
            <Sheet open={isOpen} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant={"ghost"} size={"icon"}>
                        <MenuIcon/>
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-[] sm:w-[540px] space-y-4" side={"left"}>
                    <Logo/>
                    <div className="flex flex-col gap-1">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={buttonVariants({
                                    variant: activeRoute.href === route.href
                                        ? "sidebarItemActive"
                                        : "sidebarItem",
                                })}
                                onClick={() => setOpen((prev)=> !prev)}
                            >
                                <route.icon size={20}/>
                                {route.lable}
                            </Link>
                        ))}

                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    </div>
}

export default DesktopSidebar
