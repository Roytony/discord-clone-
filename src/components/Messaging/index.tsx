import React from 'react'
import Image from 'next/image'
import { useTopics } from '@src/store/useStore'
import { BsGearFill, BsPlus, BsSearch } from 'react-icons/bs'
import Data from '../../../Data/DirectMessages'
import Topics from '../../../Data/Topics'
import ChatHeader from './ChatHeader'
import Avatar from '../Avatar'
import { addDoc, doc, setDoc } from 'firebase/firestore'
import { db } from '@src/utils/Firebase'

type MessaginProps = {
  id: string
  img: string
  name: string
}

const Messaging = ({ id, img, name }: MessaginProps) => {
  const setTopics = useTopics((state) => state.setTopics)

  const AddTopic = async () => {
    const name = prompt('Enter topics name')
    // const ref = doc(db, 'servers', id)
    // await setDoc(ref, {
    //   name: name,
    // })
  }

  return (
    <div className="min-w-[350px] p-4 border-r border-gray-800 w-full h-screen ">
      <div className="flex  items-center  justify-between">
        <div className="flex items-center space-x-4 ">
          <Image width={40} height={40} src={img} />
          <h3 className="text-gray-300 font-bold text-lg">{name}</h3>
        </div>
        <BsGearFill className="text-gray-300 cursor-pointer text-lg" />
      </div>
      <div className="flex bg-[#121617] p-4 rounded-xl items-center my-4">
        <input
          spellCheck={false}
          className="bg-[#121617] w-full focus:outline-none text-gray-300 font-bold"
          placeholder="search..."
        />
        <BsSearch className="text-gray-300 cursor-pointer text-lg" />
      </div>
      {/** topics */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg text-gray-300 font-bold">Topics</h2>
          <BsPlus
            onClick={AddTopic}
            className="text-2xl hover:scale-110 hover:text-white transition duration-100 ease-out text-gray-300"
          />
        </div>
        <div className="my-4 text-gray-400 leading-8">
          {Topics.topics.map((topic) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <p
              onClick={() => setTopics(topic)}
              onKeyDown={() => setTopics(topic)}
              key={topic.id}
              className=" cursor-pointer hover:text-gray-200 hover:font-bold "
            >
              {topic.name}
            </p>
          ))}
        </div>
      </div>
      {/** Direct Messages */}
      <div>
        <h2 className="text-lg text-gray-300 font-bold">Direct Messages</h2>
        {Data.map((item) => (
          <ChatHeader key={item.id} img={item.img} name={item.name} lastmessage={item.lastmessage} time={item.time} />
        ))}
      </div>
      <div className="relative ">
        <h2 className="text-lg text-gray-300 font-bold">Groups</h2>
        <div className="my-8 flex items-center">
          <div className="absolute">
            <Avatar src="https://i.pravatar.cc/150?img=12" alt="" />
          </div>
          <div className="absolute left-4 ">
            <Avatar src="https://i.pravatar.cc/150?img=4" alt="" />
          </div>
          <div className="absolute left-8">
            <Avatar src="https://i.pravatar.cc/150?img=8" alt="" />
          </div>

          <h2 className=" text-gray-300 font-bold"> The Developing Community </h2>
        </div>
        <div className="my-8 flex items-center">
          <div className="absolute">
            <Avatar src="https://i.pravatar.cc/150?img=12" alt="" />
          </div>
          <div className="absolute left-4 ">
            <Avatar src="https://i.pravatar.cc/150?img=4" alt="" />
          </div>
          <div className="absolute left-8">
            <Avatar src="https://i.pravatar.cc/150?img=8" alt="" />
          </div>

          <h2 className=" text-gray-300 font-bold"> The Designing Community </h2>
        </div>
      </div>
    </div>
  )
}

export default Messaging
