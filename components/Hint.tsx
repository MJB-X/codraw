import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

export interface HintProps {
  children: React.ReactNode
  label:string
  side?:"top" | "bottom" | "left" | "right"
  sideOffset?:number
  align?:"start" | "center" | "end"
  alignOffset?:number
}

function Hint({
    label,children,side,sideOffset,align,alignOffset
}:HintProps) {
  return (
   <TooltipProvider>
    <Tooltip delayDuration={100}>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent
      className='bg-white shadow-lg text-black'
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}>
        <p>{label}</p>
        
      </TooltipContent>
    </Tooltip>
   </TooltipProvider>
  )
}

export default Hint