'use client';


import React from 'react'
import { useOrganizationList } from '@clerk/nextjs'
import Items from './Items';

function List() {

    const{userMemberships}=useOrganizationList({
        userMemberships: {
          infinite: true,
        },
      })

    if (!userMemberships.data?.length) return null;


  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((membership) => (
        <Items
        key={membership.organization.id}
        id={membership.organization.id}
        name={membership.organization.name}
        imageUrl={membership.organization.imageUrl}
        ></Items>
   
      ))}
    </ul>
  )
}

export default List