import React from 'react'
import { useServer } from '@src/store/useStore'
import { FaPlus } from 'react-icons/fa'
import Server from './Server'
import Data from '../../../Data/Server'

const Sidebar = () => {
  const setServer = useServer((state) => state.setServer)
  return (
    <aside className="max-w-[100px] space-y-2 flex flex-col items-center  py-10 border-gray-800 border-r h-screen">
      {Data.map((item) => (
        <Server onClick={() => setServer(item)} key={item.id} img={item.img} name={item.name} />
      ))}
      <div className="h-12 w-12 text-indigo-600 rounded-md grid place-items-center hover:rotate-90  hover:rounded-full cursor-pointer hover:scale-110 transition duration-100 ease-out bg-[#1C2328]">
        <FaPlus className="text-xl" />
      </div>
    </aside>
  )
}

export default Sidebar
