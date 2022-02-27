import React from 'react'
import Image from 'next/image'
import { useTopics } from '@src/store/useStore'
import { db } from '@src/utils/Firebase'
import { BsGearFill, BsPlus, BsSearch } from 'react-icons/bs'
import { addDoc, collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import Data from '../../../Data/DirectMessages'
import ChatHeader from './ChatHeader'
import Avatar from '../Avatar'

type MessaginProps = {
  id: string
  img: string
  name: string
}

const Messaging = ({ id, img, name }: MessaginProps) => {
  const setTopics = useTopics((state) => state.setTopics)

  const AddTopic = async () => {
    const Topicname = prompt('Enter topics name')
    await addDoc(collection(db, `servers/${id}/topics`), { name: Topicname })
  }
  const [value] = useCollection(collection(db, `servers/${id}/topics`))

  return (
    <div className="min-w-[350px] p-4 border-r border-gray-800 w-full h-screen ">
      <div className="flex  items-center  justify-between">
        <div className="flex items-center space-x-4 ">
          {img && <Image width={40} height={40} src={img} />}
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
          {value?.docs.map((topic) => (
            <li key={topic.id} className=" cursor-pointer hover:text-gray-200 hover:font-bold ">
              <button type="button" onKeyDown={() => setTopics(topic)} onClick={() => setTopics(topic)}>
                {topic.data().name}
              </button>
            </li>
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
