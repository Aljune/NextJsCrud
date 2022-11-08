import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import router from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {

  const parsedToken = parseCookies()
  // destroyCookie({}, 'token')
  
  // console.log('parsedToken',parsedToken.JWTtoken)

  const test = useCallback(
    async () => {
      try {
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/auth`, { headers: { authorization: 'Bearer ' + parsedToken.JWTtoken } })
        router.push('/')
      } catch (error) {
        router.push('/landing-page')
      }
    }
    , [])

  useEffect(() => {
    test()
  }, [test])


  return (
    <div>
      <Component {...pageProps} /></div>
  )
}

export default MyApp
