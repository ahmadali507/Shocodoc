'use client'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const AddDocumentBtn = ({userId, email} : AddDocumentBtnProps) => {

    const addDocumenthandler = async() => {

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
