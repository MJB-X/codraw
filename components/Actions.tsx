'use client'

import * as React from 'react'
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"
import { Link2, MoreHorizontal, Pen, Trash, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from 'sonner'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { ConfirmModal } from './confirm_modal'

interface ActionProps {
  children?: React.ReactNode
  side?: DropdownMenuContentProps["side"]
  sideOffset?: DropdownMenuContentProps["sideOffset"]
  id: string
  title: string
}

export const Action = ({
  children,
  side = "bottom",
  sideOffset = 4,
  id,
  title,
}: ActionProps) => {

  const remove=useMutation(api.board.remove)


  const onCopyLink=()=>{
    
    
    navigator.clipboard.writeText(
      `${window.location.origin}/board/${id}`
    )
    .then(()=>{toast.success("Link Copied to Clipboard")})
    .catch(()=>{
      toast.error("Failed to copy link")
    })
  }

  const onDeleteBoard=()=>{

   
    remove({id})
    .then((response)=>{
      toast.success("Board Removed successfully")
   })
   .catch((error)=>{
       toast.error("faild to remove Board")
   })

  }

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={`Options for ${title}`}
        className="bg-gray-50 hover:bg-gray-300"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side={side} sideOffset={sideOffset} align="end">
        <DropdownMenuItem 
        >
          <Pen/> Rename</DropdownMenuItem>
        <DropdownMenuItem
        onClick={onCopyLink}>
          <Link2/>Copy Link</DropdownMenuItem>

          <ConfirmModal onConfirm={onDeleteBoard} header="Delete Board" description="Are you sure you want to delete this board?">
          <Button
        variant="ghost"
        size="icon"
        className=" text-red-500 w-full flex justify-start p-2 gap-2 hover:bg-red-500 hover:text-white">
          <Trash2
            className="h-4 w-4"
           /> Delete
        </Button>
          </ConfirmModal>

        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}