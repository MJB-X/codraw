import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { CreateOrganization } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function EmptyOrg() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center '>
        <Image
        alt="EmptyOrg"
        src='/Elements2.jpg'
        width={300}
        height={300}
        ></Image>
        <h2 className="font-semibold text-3xl mt-4">
            Welcome to CoDraw
        </h2>
        <p className="text-muted-foreground text-sm mt-2">
            Create an organization to get started
        </p>
        <div className="mt-6">
        <Dialog>
    <DialogTrigger asChild >
   
            <Button
            variant="default"
            size={"lg"} 
            className="w-full h-full px-5 py-3 flex items-center rounded-md  justify-center">
                Create Organization
            </Button>
    </DialogTrigger>
    <DialogContent className="bg-transparent p-0 border-none lg:max-w-[440px] md:max-w-[440px] sm:max-w-[375px] max-w-[290px] shadow-none flex justify-center items-center ">
        <CreateOrganization ></CreateOrganization>
    </DialogContent>
   </Dialog>
        </div>
    </div>
  )
}

export default EmptyOrg