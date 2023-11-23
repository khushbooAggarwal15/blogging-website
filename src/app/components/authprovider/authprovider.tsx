"use client"
import React, { ReactNode } from 'react'
import {SessionProvider} from 'next-auth/react'


interface Props{
    children: ReactNode
}
const authprovider = (props:Props) => {
  return (
    <SessionProvider>
      {props.children}
    </SessionProvider>
  )
}

export default authprovider
