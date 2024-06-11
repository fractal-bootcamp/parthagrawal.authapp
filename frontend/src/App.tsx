import { useState } from 'react'

import './App.css'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

function App() {

  return (
    <>
      <header>
        <SignedOut>
          <div className="flex align-start">

            <SignInButton />
          </div>


        </SignedOut>

        <SignedIn>
          <div>
            <h1>You are signed in!!</h1>
            <UserButton />

          </div>


        </SignedIn>
      </header>
    </>
  )
}

export default App
