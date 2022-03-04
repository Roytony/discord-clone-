import React from 'react'
import { NextPage } from 'next'
import { useAuthState } from 'react-firebase-hooks/auth'
import Main from '@src/components/Home'
import { auth } from '@src/utils/Firebase'
import SignInWithGoogle from '@src/utils/SignInWithGoogle'

const Home: NextPage = () => {
  const [user] = useAuthState(auth)

  return (
    <div className="bg-[#181A1E] w-full min-h-screen">
      {user ? (
        <Main />
      ) : (
        <div className="grid h-screen text-center text-2xl font-bold text-white place-items-center">
          <div>
            Please Login To continue
            <button
              onClick={() => SignInWithGoogle(auth)}
              type="button"
              className="px-8 my-4 flex items-center py-4 bg-white  text-black  rounded-md"
            >
              <img
                alt=""
                className="w-16 h-16 object-contain"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.bUazsv7bC2pTq1nFHvqg4AHaD4%26pid%3DApi&f=1"
              />
              Login With Google
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
