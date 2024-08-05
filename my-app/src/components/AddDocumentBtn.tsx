'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { createDocument } from '@/lib/actions/room.actions'
import { useRouter } from 'next/navigation'

const AddDocumentBtn = ({userId, email} : AddDocumentBtnProps) => {

     const router = useRouter(); 
     const addDocumenthandler = async() => {
      try {
        const room = await createDocument({userId, email}); 
        if(room) router.push(`/document/${room.id}`)
      } catch (error) {
        console.log("the document creation failed")
      }

    }
  return (
      <Button type = 'submit' onClick={addDocumenthandler} className='gradient-blue flex gap-1 shadow-md'>
        <Image
        src = "/assets/icons/add.svg"
        alt = "create a new document"
        width={24}
        height={24}
        />
           <p className='hidden sm:block '>Start a Blank Document</p>
      </Button>
  )
}

export default AddDocumentBtn
