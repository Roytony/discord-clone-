/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { useServer } from '@src/store/useStore'
import { FaPlus } from 'react-icons/fa'
import { useAuthState } from 'react-firebase-hooks/auth'
import { addDoc, collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db, auth } from '@src/utils/Firebase'
import Server from './Server'

const Sidebar = () => {
  const [user] = useAuthState(auth)
  const CreateServer = async () => {
    // eslint-disable-next-line no-alert
    const name = prompt('enter your server name')
    // eslint-disable-next-line no-alert
    const img = prompt('enter your server image')
    await addDoc(collection(db, 'servers'), {
      name,
      img,
    })
  }
  const [value] = useCollection(collection(db, 'servers'))

  const setServer = useServer((state) => state.setServer)
  return (
    <aside className="max-w-[100px] space-y-2 flex flex-col items-center justify-between  py-10 border-gray-800 border-r h-screen">
      <div>
        {value?.docs.map((item) => (
          <Server
            onClick={() => setServer(item.id, item.data())}
            key={item.id}
            img={item.data().img}
            name={item.data().name}
          />
        ))}

        <div
          onClick={CreateServer}
          onKeyDown={CreateServer}
          className="h-12 w-12 text-indigo-600 rounded-md grid mx-auto place-items-center hover:rotate-90  hover:rounded-full cursor-pointer hover:scale-110 transition duration-100 ease-out bg-[#1C2328]"
        >
          <FaPlus className="text-xl" />
        </div>
      </div>
      <div>
        <img className="rounded-full w-16 h-16" src={user?.photoURL} alt={user?.displayName} />
      </div>
    </aside>
  )
}

export default Sidebar
