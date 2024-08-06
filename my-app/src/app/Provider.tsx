'use client'
import React from 'react'
import {ClientSideSuspense, LiveblocksProvider}  from '@liveblocks/react/suspense'
import Loader from '@/components/Loader'
import { getClerkUsers, getdocumentUsers } from '@/lib/actions/user.action'
import { currentUser } from '@clerk/nextjs/server'
import { useUser } from '@clerk/nextjs'
const Provider = ({children} : {children : React.ReactNode}) => {

  const {user: clerkUser} = useUser(); 
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth"
      resolveUsers={async({userIds}) => {
        const users = await getClerkUsers({userIds}); 
         return users; 
      }}

      resolveMentionSuggestions={async({text, roomId}) =>{
        const roomUsers = await getdocumentUsers({
          roomId,
          text, 
          currentUser : clerkUser?.emailAddresses[0].emailAddress!, 

        }); 
        return roomUsers; 
      }}
    >
      <ClientSideSuspense fallback={<Loader/>}>
        {children}
      </ClientSideSuspense>
  </LiveblocksProvider>
  )
}

export default Provider
