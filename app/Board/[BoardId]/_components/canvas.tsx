'use client'

import Info from "./info"
import Participant from "./participatent"
import Toolbar from "./toolbar"

const Canvas = () => {
    return (
       <main 
       className="w-full h-full relative bg-neutral-100 touch-none"
       >
        <Info></Info>
        <Participant></Participant>
        <Toolbar></Toolbar>
       </main>
    )
}   
export default Canvas