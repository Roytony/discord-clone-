import React from 'react'
import { useServer } from '@src/store/useStore'
import { FaPlus } from 'react-icons/fa'
import { addDoc, collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '@src/utils/Firebase'
import Server from './Server'

const Sidebar = () => {
  const CreateServer = async () => {
    const name = prompt('enter your server name')
    const img = prompt('enter your server image')
    await addDoc(collection(db, 'servers'), {
      name: name,
      img: img,
    })
  }
  const [value] = useCollection(collection(db, 'servers'))

  const setServer = useServer((state) => state.setServer)
  return (
    <aside className="max-w-[100px] space-y-2 flex flex-col items-center  py-10 border-gray-800 border-r h-screen">
      {value?.docs.map((item) => (
        <Server
          onClick={() => setServer(item.data())}
          key={item.id}
          id={item.id}
          img={item.data().img}
          name={item.data().name}
        />
      ))}
      <div
        onClick={CreateServer}
        className="h-12 w-12 text-indigo-600 rounded-md grid place-items-center hover:rotate-90  hover:rounded-full cursor-pointer hover:scale-110 transition duration-100 ease-out bg-[#1C2328]"
      >
        <FaPlus className="text-xl" />
      </div>
    </aside>
  )
}

export default Sidebar
