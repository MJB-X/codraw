import React, { ChangeEvent, useEffect, useState } from 'react'

import qs from "query-string";
import {Search} from "lucide-react"
import {useDebounceValue} from "usehooks-ts"
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';





function SearchInput() {
    const router=useRouter()
    const[value,setValue]=useState("")
    const debouncedValue =useDebounceValue(value,500)
    // useDebounceValue will return a debounced version of the value
    // it will not update immediately, but will wait 500ms after the last change
    // before updating the debouncedValue
    // this is useful here because we don't want to trigger a full re-render
    // of the component on every key press, but instead only after the user
    // has finished typing (i.e. after 500ms of inactivity)



    const handelChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }

    useEffect(() => {
       
        const url = qs.stringifyUrl({
            url: "/",
            query: {
                search: debouncedValue[0]
            } 
        }, { skipEmptyString: true, skipNull: true });

        // Perform the navigation to the new URL
        router.push(url);
    }, [debouncedValue, router]);

  return (
    <div className="w-full relative">
        <Search
        className='absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4'></Search>
        <Input
        className='w-full max-w-[552px] pl-9'
        placeholder='Search boards'
        onChange={handelChange}
        value={value}></Input>
    </div>
  )
}

export default SearchInput