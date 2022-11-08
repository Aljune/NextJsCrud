import { useState } from 'react'
import { NextPage } from 'next'
import axios from 'axios'
import Route from 'next/router'
import { Modal, Button, Group } from '@mantine/core'
import { parseCookies, setCookie } from 'nookies'
import Image from 'next/image'

const PageLanding = (props: any) => {
    const { form, onChange, onSubmit, regSubmit } = props

    const [opened, setOpened] = useState(false)
    const [openReg, setOpenReg] = useState(false)

    return (
        <div>
            {/* <div className="grid-element">
                <Image
                    src="/img/landing page background.webp"
                    layout="fill"

                />
            </div> */}
            <>
                <Modal
                    className='flex flex-col justify-center items-center '
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Login"
                    fullScreen
                >
                    {/* Modal content */}
                    <div className='flex flex-col justify-center items-center '>
                        <form
                            onSubmit={(e: any) => {
                                e.preventDefault();
                                onSubmit();
                            }}>
                            <div >
                                <label htmlFor="email">Email</label>
                                <br />
                                <input
                                    className="shadow-xl w-200 outline-none border border-blue-400 p-2 rounded-md"
                                    type="email"
                                    name="email"
                                    onChange={(e) => {
                                        onChange(e.target.value, 'email')
                                    }} />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <br />
                                <input
                                    className="shadow-xl w-200 outline-none border border-blue-400 p-2 rounded-md"
                                    type="password"
                                    name="password"
                                    onChange={(e) => {
                                        onChange(e.target.value, 'password')
                                    }} />
                            </div>
                            <button
                                type='submit'
                            >Submit</button>
                        </form>

                        <label htmlFor="Registration">You don't have an Account?</label>
                    </div>

                    <>
                        <Modal
                            opened={openReg}
                            onClose={() => setOpenReg(false)}
                            title="Register an Account!"
                        >
                            <div>
                                {/* Modal content */}
                                <form
                                    onSubmit={(e: any) => {
                                        e.preventDefault();
                                        regSubmit();
                                    }}
                                >
                                    <div>
                                        <label htmlFor="username">Username</label>
                                        <input
                                            className="shadow-xl w-full outline-none border border-blue-400 p-2 rounded-md"
                                            type="text"
                                            name="username"
                                            value={form.regUsername}
                                            onChange={(e) => {
                                                onChange(e.target.value, 'regUsername')
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            className="shadow-xl w-full outline-none border border-blue-400 p-2 rounded-md"
                                            type="email"
                                            name="email"
                                            value={form.regEmail}
                                            onChange={(e) => {
                                                onChange(e.target.value, 'regEmail')
                                            }} />
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <input
                                            className="shadow-xl w-full outline-none border border-blue-400 p-2 rounded-md"
                                            type="password"
                                            name="password"
                                            value={form.regPassword}
                                            onChange={(e) => {
                                                onChange(e.target.value, 'regPassword')
                                            }} />
                                    </div>
                                    <button
                                        type='submit'
                                    >Submit</button>
                                </form>
                            </div>
                        </Modal>

                        <Group position="center">
                            <Button onClick={() => setOpenReg(true)} className="px-3 py-2 bg-lime-700 text-white rounded-xl">Register</Button>
                        </Group>
                    </>
                </Modal>

                <Group position="center" >
                    <Button onClick={() => setOpened(true)} className="px-3 py-2 bg-lime-700 text-white rounded-xl">Login</Button>
                </Group>
            </>
        </div>
    )
}

export default PageLanding