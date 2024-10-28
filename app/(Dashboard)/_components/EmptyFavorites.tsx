
import Image from 'next/image'
import React from 'react'

function EmptyFav() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center '>
        <Image
        alt="EmptyOrg"
        src='/star.png'
        width={300}
        height={300}
        ></Image>
        <h2 className="font-semibold text-3xl mt-4">
           Nothing in your favorites
        </h2>
        <p className="text-muted-foreground text-sm mt-2">
           Add some boards to your favorites
        </p>
        <div className="mt-6">
        </div>
    </div>
  )
}

export default EmptyFav