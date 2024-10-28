'use client';

import React from 'react'
import { OrganizationSwitcher, UserButton ,useOrganization} from "@clerk/nextjs";
import SearchInput from '@/components/SearchInput';
import InviteButton from '../InviteButton';


function navBar() {
  const { organization }= useOrganization()
  return (
    <div className=" 
    w-full
    h-[60px]

    flex items-center 
    gap-x-4 p-5">
    <div className="hidden lg:flex lg:flex-1 ">
      <SearchInput/>
    </div>
    <div className="block lg:hidden flex-1">
    <OrganizationSwitcher
      hidePersonal
      appearance={{
        elements:{
          rootBox:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
            fontSize:'14px',
            maxWidth:'376px'
          },
        organizationSwitcherTrigger:{
          padding:'6px',
          display:'flex',
          justifyContent:'start',
          width:'100%',
          borderRadius:'8px',
          border:'1px solid #E5E7EB',
        }
        }
      }}
      >
      </OrganizationSwitcher>
    </div>
    
        {organization && <InviteButton></InviteButton> }
     
      <UserButton />
</div>    
       
  )
}

export default navBar