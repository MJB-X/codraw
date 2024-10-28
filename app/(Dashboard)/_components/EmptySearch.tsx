
import Image from 'next/image'
import React from 'react'

function EmptySearch() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center '>
        <Image
        alt="EmptyOrg"
        src='/Search.png'
        width={300}
        height={300}
        ></Image>
        <h2 className="font-semibold text-3xl mt-4">
           No results found
        </h2>
        <p className="text-muted-foreground text-sm mt-2">
            Try searching for something else
        </p>
        <div className="mt-6">
        </div>
    </div>
  )
}

export default EmptySearch