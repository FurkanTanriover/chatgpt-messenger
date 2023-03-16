import React from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { timeStamp } from 'console';

const NewChat = () => {
  const {data: session} = useSession();
  const router = useRouter();
  
  const createNewChat = async() => {
      const doc = await addDoc(collection(db, "users",session?.user?.email!,"chats"), {
        userId:session?.user?.email!,
        createdAt:serverTimestamp()
      });
      router.push(`/chat/${doc.id}`)
  }

  return (
    <div onClick={createNewChat} className=' border-gray-700 border chatRow'>
        <PlusIcon className='w-4 h-4 iconColor'/>
        <p className=''>New Chat</p>
    </div>
  )
}

export default NewChat