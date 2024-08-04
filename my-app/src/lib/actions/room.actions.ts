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
            defaultAccesses: [],
            usersAccesses, 
          });
          revalidatePath('/'); 
          return parseStringify(room); 
        
    } catch (error) {
        console.log("Error in creating a room for the users ")
    }
}  