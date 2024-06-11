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

          <form action="http://localhost:4000/checkAuthToken" method="POST">
            <h3>Form</h3>
            <button type="submit">View posts</button>
          </form>



        </SignedIn>
      </header>
    </>
  )
}

export default App
