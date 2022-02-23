import React from 'react'
import Avatar from '../Avatar'

type ChatHeadProps = {
  img: string
  name: string
  lastmessage: string
  time: string
}

const ChatHeader = ({ img, name, lastmessage, time }: ChatHeadProps) => {
  return (
    <div className="my-4 cursor-pointer hover:bg-gray-800 p-2 rounded-md flex items-center  justify-between">
      <Avatar src={img} alt="" />
      <div className="">
        <h2 className="text-lg text-gray-300 font-bold">{name}</h2>
        <p className="text-sm text-gray-500 truncate">{lastmessage}</p>
      </div>
      <div className="text-gray-600">{`${time} ago`}</div>
    </div>
  )
}

export default ChatHeader
