"use client"
import { useSession, signOut } from "next-auth/react";
import React from "react";
import NewChat from "./NewChat";


function SideBar() {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* new chat */}
          <NewChat />
          <div>{/* model selection */}</div>
          {/* chat history */}
        </div>
      </div>
      {session &&
      ( <img onClick={()=>signOut()} src={session.user?.image!} alt="user pic" className="w-12 h-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50" />)
      }
    </div>
  );
}

export default SideBar;
