import React from 'react'
import { Plus } from 'lucide-react'
import { OrganizationProfile, useOrganization } from '@clerk/clerk-react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

function InviteButton() {
   
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
        variant={"outline"}
        className="">
          <Plus className='w-4 h-4' mr-2></Plus>
          Invite Members
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-transparent p-0 border-none w-full max-w-[880px]">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  )
}

export default InviteButton