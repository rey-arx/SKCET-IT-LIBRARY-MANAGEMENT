import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from "../utils/firebase";

const Home = () => {
    const[user , loading,error] = useAuthState(auth);
    console.log(user);
  return (
    <div>
        <h1>Welcome</h1>
    </div>
  )
}

export default Home