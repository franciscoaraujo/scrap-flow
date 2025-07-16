import React from 'react'
import BreadcrumbHeader from '@/components/BreadcrumbHeader'
import DesktopSidebar from '@/components/Sidebar'
import { Separator } from '@/components/ui/separator'
import {ModeToggle} from "@/components/ThemeModeToggle";
import {SignedIn, UserButton} from "@clerk/nextjs";



function layout({children}:{children: React.ReactNode}) {
    // This layout is used for the dashboard pages
  return (
    <div className='flex h-screen'>
        <DesktopSidebar />
        <div className='flex flex-col flex-1 min-h-screen'>
            <header className='flex items-center justify-between px-6 py-4 h-[50px] container' >
                <BreadcrumbHeader />
                <div className="gap-1 flex items-center">
                    <ModeToggle />
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </header>
            <Separator className="my-1 border border-gray-300" />
            <div className='overflow-auto'>
                <div className='flex-1 container py-4 text-accent-foreground'>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default layout