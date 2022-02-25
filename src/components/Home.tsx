import { useServer, useTopics } from '@src/store/useStore'
import React from 'react'
import Chat from './Chat'
import Messaging from './Messaging'
import Sidebar from './Sidebar'

const Home = () => {
  const server = useServer((state) => state.server)
  const topic = useTopics((state) => state.topis)
  return (
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
  )
}

export default Home
