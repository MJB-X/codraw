"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useMutation } from "convex/react";
import {api} from "@/convex/_generated/api"
import { toast } from "sonner";

interface AddBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export default function AddBoardButton({ orgId,disabled}: AddBoardButtonProps) {
  const create = useMutation(api.board.create);

  const clickAdd = () => {
    create({
        orgId:orgId,
        title:"Untitled"
    })
    .then((response)=>{
       toast.success("Board created successfully")
    })
    .catch((error)=>{
        toast.error("faild to create Board")
    })
  };
  return (

    <Card
      className="w-full max-w-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={clickAdd}
      
    >
      <CardContent className="p-6 flex flex-col items-center justify-center h-full aspect-video w-full">
        <Button
          variant="ghost"
          size="icon"   
          className="w-12 h-12"
        >
          <Plus className="h-8 w-8" />
        </Button>
        <p className="text-lg font-semibold text-muted-foreground">
          Add new Board
        </p>
      </CardContent>
    </Card>
  );
}
