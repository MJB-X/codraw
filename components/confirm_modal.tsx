'use client';

import { on } from "events";
import {  AlertDialogDescription ,AlertDialog, AlertDialogContent, AlertDialogTrigger, AlertDialogCancel, AlertDialogFooter,AlertDialogTitle, AlertDialogAction } from "./ui/alert-dialog";

interface ConfirmModalProps{
    children: React.ReactNode;
    onConfirm: () => void;
    header: string;
    disabled?:boolean;
    description?: string;
    
}

 export const ConfirmModal=({children,onConfirm,header,disabled,description}:ConfirmModalProps)=>{
 const handelConfirm=()=>{
    onConfirm()
 }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogTitle>{header}</AlertDialogTitle>
                <AlertDialogDescription>{description}</AlertDialogDescription>
                <AlertDialogFooter>
                    <AlertDialogCancel >Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handelConfirm} disabled={disabled}>Confirm</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )

}