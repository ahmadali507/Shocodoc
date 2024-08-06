'use server'
import {nanoid} from 'nanoid'
import { liveblocks } from '../liveblocks';
import { revalidatePath } from 'next/cache';
import { parseStringify } from '../utils';
export const createDocument = async({userId, email} : CreateDocumentParams) => {
    const roomId = nanoid(); 
    try {

        const metadata = {
            creatorId : userId, 
            email, 
            title : 'untitled', 
        }
        const usersAccesses : RoomAccesses = {
            [email] : ['room:write']
        }
        const room = await liveblocks.createRoom(roomId, {
            metadata, 
            defaultAccesses: ['room:write'],
            usersAccesses, 
          });
          revalidatePath('/'); 
          return parseStringify(room); 
        
    } catch (error) {
        console.log("Error in creating a room for the users ")
    }
}  

export const getDocument = async ({roomId, userId} : {roomId : string  , userId : string})=> {
    try {
        const room = await liveblocks.getRoom(roomId); 
        // Bring it back here. please.... 
        // const hasAccess = Object.keys(room.usersAccesses).includes(userId)
    
        // if(!hasAccess){
        //     throw new Error("you do not have access to this document")
        // }
        return parseStringify(room); 
        
    } catch (error) {
        console.log("THE ERROR HAPPENDED WHILE GETTIGN THE ROOM.")
    }
}

export const updateDocument = async(roomId : string, title : string)=>{
    try {
        const updatedRoom = await liveblocks.updateRoom(roomId, {
            metadata : {
                title 
            }
        })
          revalidatePath(`document/${roomId}`)

          return parseStringify(updatedRoom)
    } catch (error) {
        console.log(error)
    }
}