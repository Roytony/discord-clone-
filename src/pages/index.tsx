import React from 'react'
import { NextPage } from 'next'
import Sidebar from '@src/components/Sidebar'
import { useServer, useTopics } from '@src/store/useStore'
import Messaging from '@src/components/Messaging'
import Chat from '@src/components/Chat'

const Home: NextPage = () => {
  const server = useServer((state) => state.server)
  const topic = useTopics((state) => state.topis)
  console.log('topics', topic)
  return (
    <div className="bg-[#181A1E] w-full min-h-screen">
      <main className="flex">
        <Sidebar />
        {!server ? (
          <div className="grid place-items-center">
            <h2>Please select a server and start comunicating</h2>
          </div>
        ) : (
          <div className="flex">
            <Messaging img={server?.img} name={server?.name} />
            {topic ? <Chat topic={topic} /> : null}
          </div>
        )}
      </main>
    </div>
  )
}

export default Home
