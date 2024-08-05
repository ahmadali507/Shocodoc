import { useOther, useOthers } from '@liveblocks/react/suspense'
import Image from 'next/image';
import React from 'react'

const ActiveCollborators = () => {
    const others = useOthers(); 
    const collaborators = others.map((other) => other.info)
  return (
    <ul className='collaborators-list'>
        {
            collaborators.map(({id, avatar, name, color})=> (
                <li key={id}>
                    <Image
                    alt='no avatart'
                    src={avatar}
                    width={100}
                    height={100} 
                    className='inline-block size-8 rounded-full ring-2 ring-dard-200'
                    style={{border : `2px solid ${color}`}}
                    />
                </li>
            ))
        }
      
    </ul>
  )
}

export default ActiveCollborators
