import { addDoc, collection, orderBy, serverTimestamp, query } from 'firebase/firestore'
import React, { useState } from 'react'
import InputEmoji from 'react-input-emoji'
import { BiSearch, BiMicrophone, BiPaperPlane } from 'react-icons/bi'
import { db } from '@src/utils/Firebase'
import { useCollection } from 'react-firebase-hooks/firestore'

type ChatProps = {
  topic: {
    id: string
    name: string
  }
}

const Chat = ({ topic }: ChatProps) => {
  const [msg, setMsg] = useState('')

  const InputSubmit = async (e) => {
    await addDoc(collection(db, `topics/${topic.id}/messages`), {
      msg,
      user: '1',
      createdAt: serverTimestamp(),
    })
    setMsg('')
  }
  // const InputChnage = (e) => {
  //   setMsg(e.target.value)
  // }

  const [value, loading] = useCollection(
    query(collection(db, `topics/${topic.id}/messages`), orderBy('createdAt', 'asc')),
  )

  return (
    <div className="min-w-[1000px] flex flex-col w-full h-screen border-r border-gray-800">
      <div className="w-full h-16 border-b border-gray-800 flex items-center px-8">
        <h2 className="text-lg text-gray-300">{topic.name}</h2>
      </div>
      <div className="flex-1 flex flex-col justify-end overflow-y-auto">
        {value?.docs.map((item) => (
          <div className=" max-w-fit my-2 mx-4  p-2 text-gray-300 rounded-r-md  font-bold  bg-[#232227] " key={item.id}>
            <p className="px-8">{item.data().msg}</p>
          </div>
        ))}
        {loading && (
          <div className="w-full h-full grid place-items-center">
            <img
              alt=""
              className="w-48 h-48"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F18886%2Fscreenshots%2F1027635%2Floading.gif&f=1&nofb=1"
            />
          </div>
        )}
      </div>
      <div className="w-[95%] flex my-5 items-center rounded-lg h-16  px-4 bg-[#121418] mx-auto">
        <BiSearch className="text-xl text-gray-300 cursor-pointer" />
        {/* <input
          onKeyPress={InputSubmit}
          onChange={InputChnage}
          spellCheck={false}
          placeholder="write a message...."
          className="bg-[#121418] w-full px-4 text-gray-300 h-full rounded-lg focus:outline-none"
        /> */}
        <InputEmoji
          className="bg-[#121418] w-full px-4 text-gray-300 h-full rounded-lg focus:outline-none"
          value={msg}
          onChange={setMsg}
          cleanOnEnter
          onEnter={InputSubmit}
          placeholder="Type a message"
        />
        <div className="flex space-x-4">
          <BiMicrophone className="text-xl text-gray-300 cursor-pointer" />

          <BiPaperPlane onClick={InputSubmit} className="text-xl   text-gray-300 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default Chat
