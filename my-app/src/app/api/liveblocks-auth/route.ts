import { liveblocks } from "@/lib/liveblocks";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { Liveblocks } from "@liveblocks/node";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
 // since I am using clerk for authentication we need to get the current user that is trying to enter the room from teh clerk. 

 const clerkUser = await currentUser(); 
 if(!clerkUser){
    redirect('/sign-in'); 
 }
    const user = __getUserFromDB__(request);

  // Identify the user and return the result
  const { status, body } = await liveblocks.identifyUser(
    {
      userId: user.id,
      groupIds, // Optional
    },
    { userInfo: user.metadata },
  );

  return new Response(body, { status });
}