
'use client'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import ActiveCollborators from './activeCollborators'
import { useRef, useState } from 'react'
const CollaborativeRoom = ({roomId, roomMetadata} : CollaborativeRoomProps) => {

  const [editing , setEditing] = useState(false); 
  const [Loading , setLoading] = useState(false); 
  const [documentTitle, setDocumentTitle] = useState(roomMetadata.title); 

  const containerRef = useRef<HTMLDivElement>(null)

  const inputRef = useRef<HTMLDivElement>(null)

  return (
    <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
        <div className='collaborative-room'>
        <Header>
        <div  ref = {containerRef} className = "flex w-fit items-center justify-center gap-2">
             
        </div>
        <div
        className='flex w-full flex-1 justify-end gap-2 sm:gap-3'>
         <ActiveCollborators/>
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

        </div>
      </Header>
      <Editor/>
        </div>
    </ClientSideSuspense>
  </RoomProvider>
  )
}

export default CollaborativeRoom
