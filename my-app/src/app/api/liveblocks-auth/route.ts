import { liveblocks } from "@/lib/liveblocks";
import { getRandomColor, getUserColor } from "@/lib/utils";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { Liveblocks } from "@liveblocks/node";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
 // since I am using clerk for authentication we need to get the current user that is trying to enter the room from teh clerk. 

 const clerkUser = await currentUser(); 
 if(!clerkUser){
    redirect('/sign-in'); 
 }

 const {id , firstName, lastName, emailAddresses, imageUrl, } = clerkUser; 
    const user = {
        id, 
        info : {
            id, 
            name : `${firstName} + " " + ${lastName}`, 
            email : emailAddresses[0].emailAddress, 
            avatar : imageUrl,
            color : getUserColor(id), 
        }
    }

  // Identify the user and return the result
  const { status, body } = await liveblocks.identifyUser(
    {
      userId: user.id,
      groupIds : []
      // Optional
    },
    { userInfo: user.info },
  );

  return new Response(body, { status });
}