'use client';
import React from 'react'
import Image from 'next/image'
import{Poppins} from 'next/font/google'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { OrganizationSwitcher } from '@clerk/nextjs'
import { LayoutDashboard, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'

const font=Poppins({
  subsets:['latin'],
  weight:['600']

})


function Orgsidebar() {

  const searchParams=useSearchParams()
  const favorites=searchParams.get('favorites')



  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[220px] h-full p-4  border-r-2 border-r-gray-50 ">
      <Link href="/">
      <div className="flex items-center space-x-2">
        <Image
        src="/logo.svg" 
        alt="logo"
        height={60}
        width={60}
        className=''

        ></Image>
        <span className={cn("font-semibold text-2xl text-black",font.className)}>CoDraw</span>
      </div></Link>
      <OrganizationSwitcher
      hidePersonal
      appearance={{
        elements:{
          rootBox:{
            display:'flex',
            justifyContent:'start',
            alignItems:'center',
            width:'100%',
          
          },
        organizationSwitcherTrigger:{
          display:'flex',
          justifyContent:'start',
          padding:'8px',
          width:'100%',
          fontWeight:'bold',
          borderRadius:'8px',
          border:'1px solid #E5E7EB',
        }
        }
      }}
      >
      </OrganizationSwitcher>
      <div className="space-y-1 w-full">
        <Button asChild
        variant={favorites?"ghost":"secondary"}
        size='lg'
        className='front-normal justify-start px-2 w-full'>
          <Link href="/">
            <LayoutDashboard 
            className='mr-2'></LayoutDashboard>
            Team Boards
          </Link>
        </Button>
        <Button asChild
         variant={favorites?"secondary":"ghost"}
        size='lg'
        className='front-normal justify-start px-2 w-full'>
          <Link href={{
            pathname:"/",
            query:{favorites:true}
          }}>
            <Star
              className='mr-2'></Star>
            Favorite Boards
          </Link>
        </Button>
      </div>


   
    </div>
  )
}

export default Orgsidebar