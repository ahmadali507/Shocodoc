'use client'
import React from 'react'
import {ClientSideSuspense, LiveblocksProvider}  from '@liveblocks/react/suspense'
import Loader from '@/components/Loader'
import { getClerkUsers } from '@/lib/actions/user.action'
const Provider = ({children} : {children : React.ReactNode}) => {
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth"
      resolveUsers={async({userIds}) => {
        const users = await getClerkUsers({userIds}); 
         return users; 
      }}
    >
      <ClientSideSuspense fallback={<Loader/>}>
        {children}
      </ClientSideSuspense>
  </LiveblocksProvider>
  )
}

export default Provider
