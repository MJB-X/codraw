'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button"
import EmptyOrg from "./_components/EmptyOrg";
import { useOrganization} from "@clerk/nextjs";
import BoardList from "./_components/BoardList";



interface DashbaordPageProps{
  searchParams:{
    search?:string
    favorites?:string
  }
}


export default function DashboardPage({searchParams}:DashbaordPageProps) {
  const { organization }= useOrganization()
  return (
    <>
    <div className="flex  h-[calc(100%-80px)] p-6">
    {!organization? 
<EmptyOrg></EmptyOrg>
:
<BoardList orgId={organization.id} query={searchParams}></BoardList> 
} 
</div> </>

    
    
  );
}
