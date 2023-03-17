"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState<string>("");
  const {data:session} = useSession();
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form className="p-5 space-x-5 flex">
        <input
          type="text"
          className="bg-transparent focus:outline-none disabled:cursor-not-allowed disabled:text-gray-300 flex-1"
          value={prompt}
          disabled={!session}
          placeholder="Enter your message..."
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button disabled={!prompt||!session} type="submit" className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed">
          <PaperAirplaneIcon className="h-4 w-4  -rotate-45" />
        </button>
      </form>
      <div></div>
    </div>
  );
}

export default ChatInput;
