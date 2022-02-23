import React from 'react'
import { NextPage } from 'next'
import Sidebar from '@src/components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="bg-[#181A1E] w-full min-h-screen">
      <main>
        <Sidebar />
      </main>
    </div>
  )
}

export default Home
