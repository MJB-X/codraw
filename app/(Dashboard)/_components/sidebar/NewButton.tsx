'use client';

import React from 'react'
import { Plus } from 'lucide-react';
import { Dialog, DialogContent,DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CreateOrganization } from '@clerk/clerk-react';
import Hint from '@/components/Hint'

function NewButton() {
  return (
   <Dialog>
    <DialogTrigger asChild >
        <div className="aspect-square">

            <Hint label="Create Organization" side="right" align="center" sideOffset={5}>
            <Button 
            variant="default"
            className="w-full h-full p-0 flex items-center hover:bg-black/10 rounded-md  justify-center">
                <Plus ></Plus>
            </Button>
            </Hint>
   
        </div>
    </DialogTrigger>
    <DialogContent className="bg-transparent p-0 border-none lg:max-w-[440px] md:max-w-[440px] sm:max-w-[375px] max-w-[290px] shadow-none flex justify-center items-center ">
        <CreateOrganization ></CreateOrganization>
    </DialogContent>
   </Dialog>
  )
}

export default NewButton