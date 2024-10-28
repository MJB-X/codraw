
import React from 'react'
import Sidebar from './_components/sidebar'
import Orgsidebar from './_components/org_sidebar'
import NavBar from './_components/navBar/navBar'
import { Toaster } from '@/components/ui/sonner'

interface DashbaordLayoutProps{
    children: React.ReactNode
}

function DashbaordLayout({children}: DashbaordLayoutProps) {
  return (
    <main className='h-full flex'>

      <Sidebar></Sidebar>
      <div  className="h-full w-full">
        <div className="h-full w-full flex">
          <Orgsidebar></Orgsidebar>
          <div className="w-full" ><NavBar></NavBar>
          <Toaster/>
          {children}</div>
        </div>
      
      </div>
      

    </main>

    
  )
}

export default DashbaordLayout