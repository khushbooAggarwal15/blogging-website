
"use client";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { CircularProgress, Backdrop } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Googlebutton from '../components/googlebutton/googlebutton'
import { Login_User } from "@/GraphqlApi/mutation";
import { useMutation } from "@apollo/client";
import createApolloClient from "@/GraphqlApi/apolloclient";
import { useRouter } from "next/navigation";
interface IUser {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("*Invalid email address")
    .required("*Email is required"),
  password: yup.string().required("*Enter password"),
});

function LoginPage() {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);


  
    const client= createApolloClient('https://244b-103-179-9-163.ngrok-free.app/graphql')

  const [loginUserMutation] = useMutation(Login_User,{
    client,
  });
  const route = useRouter();
 

  const onSubmit = async (data: IUser) => {
    try {
      const {  email, password } = data;
      
      const result = await loginUserMutation({
        variables: {
          email,
          password,
         
          
        },
      });
      console.log("Mutation result:", result);
    if (result?.data?.loginUser?.token) {
      route.push("/blogs");
    
    }
  } catch (error) {
    
    console.error("Error occurred during login:", error);
    
  }
};

  

  const handleClick = () => {
     setLoading(true);
    route.push("/signup");
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
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <Container component="main" maxWidth="xs">
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <p style={{ color: "red", height: "7px", fontStyle: "italic" }}>
            {errors?.email?.message}
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
          <p style={{ color: "red", height: "7px", fontStyle: "italic" }}>
            {errors?.password?.message}
          </p>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

<Googlebutton/>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>

          {/* <Grid container> */}
          <Grid item>
            <Link href="#" variant="body2">
              {"Forgot password?  "}
            </Link>
          </Grid>
          <Grid container justifyContent="right">
            <Link
              href="#"
              variant="body2"
              onClick={() => route.push("/signup")}
            >
              {"Don't have an account? Sign Up"}

              {/* <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={loading}
              >
                <CircularProgress color="inherit" />
              </Backdrop> */}
            </Link>
            {/* </Grid> */}
          </Grid>
        </form>
      </Container>
    </Box>
  );
}

export default LoginPage;
