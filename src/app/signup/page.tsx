  "use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useMutation } from "@apollo/client";
import { REGISTER_USER_MUTATION } from "@/GraphqlApi/mutation";

import createApolloClient from "@/GraphqlApi/apolloclient";
import { Alert, CircularProgress } from "@mui/material";

interface IUser {
  username:string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup
  .string()
  .required("Please enter username"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Please provide a valid password"),
});



function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(schema),
  });


  const [successAlert, setSuccessAlert] = useState(false);
const [isLoading, setIsLoading] = useState(false);


const client= createApolloClient('https://244b-103-179-9-163.ngrok-free.app/graphql')

  const [registerUserMutation] = useMutation(REGISTER_USER_MUTATION,{
    client,
  });
  const router = useRouter();
 

  const onSubmit = async (data: IUser) => {
    try {
      setIsLoading(true);
      const { username, email, password } = data;
      const result = await registerUserMutation({
        variables: {
          username,
          password,
          email,
          
        },
      });
      console.log("Mutation result:", result);
    if (result?.data?.registerUser) {
      setSuccessAlert(true);
        setIsLoading(false);
        setTimeout(() => {
          router.push("/login");
        }, 3000);
    }
  } catch (error) {
    setIsLoading(false);
    console.error("Error occurred during registration:", error);
    
  }
};

  

  return (
    
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
            {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <CircularProgress />
        </Box>
      )}
      {successAlert && (
        <Alert severity="success" onClose={() => setSuccessAlert(false)}>
          Signed up successfully! Redirecting to login...
        </Alert>
      )}
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <Container component="main" maxWidth="xs">
        <form onSubmit={handleSubmit(onSubmit)}>

        <Controller
            control={control}
            name="username"
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="username"
                autoFocus
              />
            )}
          />
          <p style={{ color: "red", height: "16px" }}>
            {errors?.username?.message}
          </p>
        
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            )}
          />

          <p style={{ color: "red", height: "16px" }}>
            {errors?.password?.message}
          </p>


          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
            )}
          />
          <p style={{ color: "red", height: "16px" }}>
            {errors?.email?.message}
          </p>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>

          {/* <Grid container> */}
          <Grid container justifyContent="right">
            <Link
              href="#"
              variant="body2"
              onClick={() => router.push("/login")}
            >
              {"Already have account? Sign In"}
            </Link>
            {/* </Grid> */}
          </Grid>
        </form>
      </Container>

    </Box>


  );
  }
export default SignUp;

