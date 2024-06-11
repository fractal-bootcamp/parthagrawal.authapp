import { useState } from 'react'

import './App.css'
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

function App() {

  return (
    <>
      <header>
        <SignedOut>
          <div className="flex justify-between">

            <SignInButton />
          </div>


        </SignedOut>

        <SignedIn>
          <div className="flex flex-row justify-between">
            <UserButton />
            <SignOutButton />
          </div>
          <h1>You are signed in!!</h1>



        </SignedIn>
      </header>
    </>
  )
}

export default App
