import { useState } from 'react'
import { NextPage } from 'next'
import axios from "../common/axiosInterceptor";
import Route from 'next/router'
import { Modal, Button, Group } from '@mantine/core'
import { parseCookies, setCookie } from 'nookies'
import Image from 'next/image'
import PageLanding from '../components/employee/landing'


const LandingPage: NextPage = () => {

    const [form, setForm] = useState({
        email: '',
        password: '',
        regUsername: '',
        regEmail: '',
        regPassword: '',
    })
    
    // const [regUsername, setRegUsername] = useState("")
    // const [regEmail, setEegEmail] = useState("")
    // const [regPassword, setRegPassword] = useState("")

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const onChange = (value:any, column:any) => {
        setForm(prev => {
            return {...prev, [column]: value}
        })
    }


    const onSubmit = async () => {
        const rest = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
            email: form.email,
            password: form.password
        }).then((res) => {
            const token = res.data.token
            // console.log(res, 'res data')
            setCookie({}, 'JWTtoken', token, {
                maxAge: 30 * 24 * 60 * 60,
            })
        })
        // .catch((err) => console.log(err))
        // console.log(rest, 'sdsa')
        Route.push("/")
    }



    const regSubmit = async () => {
        const rest = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/registration`, {
            username: form.regUsername,
            email: form.regEmail,
            password: form.regPassword
        }).then((res) => {
            const token = res.data.token
            // console.log(res, 'res data')
            setCookie({}, 'JWTtoken', token, {
                maxAge: 30 * 24 * 60 * 60,
            })
        })
        // console.log(rest, 'sdsa')
        Route.push("/")
    }



    return (
        <div>
            <PageLanding form={form} onChange={onChange} onSubmit={onSubmit} regSubmit={regSubmit} />
        </div>
    )
}

export default LandingPage