'use client';

import React from 'react'
import Image from 'next/image';
import { useOrganization,useOrganizationList } from '@clerk/nextjs';
import{cn} from '@/lib/utils'
import Hint from '@/components/Hint'

interface ItemsProps{
    id:string,
    name:string,
    imageUrl:string
}

function Items({id,name,imageUrl}:ItemsProps) {

    const{ organization }=useOrganization();
    const { setActive} =useOrganizationList();

    const isActive=organization?.id===id

    const onClick=()=>{
        if(!setActive) return
        setActive({organization:id})
    }

  return (
    <div className='aspect-square relative'>

      <Hint label={name} side="right" align="center" sideOffset={5}><Image
        fill
        alt={name}
        src={imageUrl}
        onClick={onClick}
        className={cn('rounded-md cursor-pointer opacity-75 transition',isActive&& 'opacity-100')} 
        ></Image></Hint>
        
    </div>
  )
}

export default Items