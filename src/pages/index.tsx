import React from 'react'
import { NextPage } from 'next'
import Sidebar from '@src/components/Sidebar'
import { useServer } from '@src/store/useStore'
import Messaging from '@src/components/Messaging'

const Home: NextPage = () => {
  const server = useServer((state) => state.server)
  return (
    <div className="bg-[#181A1E] w-full min-h-screen">
      <main className="flex">
        <Sidebar />
        {!server ? (
          <div className="grid place-items-center">
            <h2>Please select a server and start comunicating</h2>
          </div>
        ) : (
          <div>
            <Messaging />
          </div>
        )}
      </main>
    </div>
  )
}

export default Home
