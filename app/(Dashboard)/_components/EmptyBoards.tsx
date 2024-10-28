'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import{api} from "@/convex/_generated/api"
import { useMutation } from 'convex/react'
import { useOrganization } from '@clerk/nextjs';
import {toast} from 'sonner'

function EmptyBoards() {
  const {organization} = useOrganization();
  const create=useMutation(api.board.create)

  const onCreateBoard=()=>{

    if (!organization) return;  
    create({
      orgId: organization.id,
      title: "Untitled",
    }).then((id)=>{
      toast.success("Board created successfully")
    })
    .catch((err)=>{toast.error("faild to create Board")});

  }
  return (
    <div className='w-full h-full flex flex-col justify-center items-center '>
        <Image
        alt="EmptyOrg"
        src='/png7.png'
        width={300}
        height={300}
        ></Image>
        <h2 className="font-semibold text-3xl mt-4">
           Create your first board
        </h2>
        <p className="text-muted-foreground text-sm mt-2">
           Create your first board to get started
        </p>
        <div className="mt-6">
          <Button
          variant="default"
          size={"lg"}
          onClick={onCreateBoard}
          className=''>
            Create Board
          </Button>
        </div>
    </div>
  )
}

export default EmptyBoards