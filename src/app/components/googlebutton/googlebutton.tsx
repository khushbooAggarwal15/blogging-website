import { signIn } from 'next-auth/react';
import Button from "@mui/material/Button";
import { useState } from 'react';
import { CircularProgress } from '@mui/material';


const googlebutton=()=>{
    const [isLoading, setIsLoading] = useState(false);
    const loginwithgoogle=()=>
    signIn('google',{callbackUrl:'http://localhost:3000/blogs'},)
   
    
    return <Button
        onClick={loginwithgoogle}
        
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
    >
        Sign with Google
    </Button>;
          }

export default googlebutton;
