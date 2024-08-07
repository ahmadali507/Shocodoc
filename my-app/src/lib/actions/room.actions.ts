'use server'
import {nanoid} from 'nanoid'
import { liveblocks } from '../liveblocks';
import { revalidatePath } from 'next/cache';
import { getAccessType, parseStringify } from '../utils';
import { CloudCog } from 'lucide-react';
import { redirect } from 'next/navigation';
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

export const getDocument = async ({roomId, userId} : {roomId : string  , userId : string})=> {
    try {
        const room = await liveblocks.getRoom(roomId); 
        // Bring it back here. please.... 
        const hasAccess = Object.keys(room.usersAccesses).includes(userId)
    
        if(!hasAccess){
            throw new Error("you do not have access to this document")
        }
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

export const getDocuments = async (email : string)=> {
    try {
        const rooms= await liveblocks.getRooms({userId : email}); 
        // // Bring it back here. please.... 
        // const hasAccess = Object.keys(rooms.usersAccessess).includes(userId)
    
        // if(!hasAccess){
        //     throw new Error("you do not have access to this document")
        // }
        return parseStringify(rooms); 
        
    } catch (error) {
        console.log("THE ERROR HAPPENDED WHILE GETTIGN THE ROOMs.")
    }
}

export const updateDocumentAccess = async({roomId, email, userType, updatedBy}:ShareDocumentParams)=>{
    try {
        const userAccessess: RoomAccesses = {
            [email] : getAccessType(userType) as AccessType
        }
        const room = await liveblocks.updateRoom(roomId, {
            usersAccesses : userAccessess
        })
        if(room){
            const notificationid = nanoid(); 
            await liveblocks.triggerInboxNotification({
                userId : email, 
                kind : '$documentAccess',
                subjectId: notificationid, 
                activityData : {
                    userType, 
                    title : `you have been granted ${userType} access to the document`, 
                    updatedBy : updatedBy.name, 
                    avatar : updatedBy.avatar, 
                    email : updatedBy.email, 
                }, 
                roomId, 
            })
        }
        
        revalidatePath(`/documents/${roomId}`); 
        return parseStringify(room)
    } catch (error) {
        console.log('error happened while accessing documents')
    }
}
export const removeCollaborator = async ({roomId, email} : {roomId: string , email : string})=>{
    try {
        const room = await liveblocks.getRoom(roomId); 
        if(room.metadata.email === email){
            throw new Error("you cannot remove yourself")
        }
        const updatedRoom = await liveblocks.updateRoom(roomId,{
            usersAccesses : {
                [email] : null, 
            }
        })
        revalidatePath(`/documents/${roomId}`)
        return parseStringify(updatedRoom)
        
    } catch (error) {
        console.log(error)
    }
}
export const deleteDocument= async (roomId : string)=>{
    try {
        await liveblocks.deleteRoom(roomId)
        revalidatePath('/')
        redirect('/')
    } catch (error) {
        console.log(error)
    }
}