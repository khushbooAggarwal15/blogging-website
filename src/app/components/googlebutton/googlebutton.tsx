import { signIn } from 'next-auth/react';
import Button from "@mui/material/Button";


const googlebutton=()=>{

    const loginwithgoogle=()=>signIn('google',{callbackUrl:'http://localhost:3000/userblogs'})
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
