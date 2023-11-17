"use client"

import { signIn, signOut , useSession } from 'next-auth/react';
import Button from "@mui/material/Button";
import { callbackify } from 'util';


const googlebutton=()=>{

    const {data:session}=useSession();
console.log(session)

    if (session && session.user)
    {
        return(
            <div>
            <p>{session.user.name}</p>
            <Button
        onClick={()=>signOut()}
       type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
    >
        Sign Out
    </Button>
            
            </div>
        )
    }

    const loginwithgoogle=()=>signIn('google',{callbackUrl:'http://localhost:3000/blogs'})
    return(

        <Button
        onClick={loginwithgoogle}
       type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
    >
        Sign with Google
    </Button>    )
          }

export default googlebutton;