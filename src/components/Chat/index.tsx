import React from 'react'
import { BiSearch, BiMicrophone, BiPaperPlane } from 'react-icons/bi'

const Chat = ({ topic }) => {
  return (
    <div className="min-w-[1000px] flex flex-col w-full h-screen border-r border-gray-800">
      <div className="w-full h-16 border-b border-gray-800 flex items-center px-8">
        <h2 className="text-lg text-gray-300">{topic.name}</h2>
      </div>
      <div className="flex-1 overflow-y-auto"></div>
      <div className="w-[95%] flex my-5 items-center rounded-lg h-16  px-4 bg-[#121418] mx-auto">
        <BiSearch className="text-xl text-gray-300 cursor-pointer" />
        <input
          spellCheck={false}
          placeholder="write a message...."
          className="bg-[#121418] w-full px-4 text-gray-300 h-full rounded-lg focus:outline-none"
        />
        <BiMicrophone className="text-xl text-gray-300 cursor-pointer" />
        <BiPaperPlane className="text-xl ml-2  text-gray-300 cursor-pointer" />
      </div>
    </div>
  )
}

export default Chat
