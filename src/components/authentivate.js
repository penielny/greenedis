import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/auth'
import LoadingScreen from './loadingScreen'
import { getUser, getUser_doc } from "../contexts/store"
import { Redirect } from 'react-router-dom'
import { FaLeaf, FaRedo } from 'react-icons/fa'

export default function Authentivate() {
    const { currentUser } = useAuth()
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    useEffect(() => {
        console.log(currentUser.uid)
        get_user()
    }, [])

    const get_user = () => {
        setLoading(true)
        setError(false)
        try {
            const unsub = getUser_doc(currentUser.uid).onSnapshot(doc => {
                if (doc.exists) {
                    setUser(doc.data())
                    console.log(doc.data().role)
                    setLoading(false)
                    setError(false)

                } else {
                    setError(true)
                    setLoading(false)
                }
            }
            )

        } catch (error) {
            setError(true)
            setLoading(false)
            console.log(error)
        }

    }
    return (
        <>
            {
                loading ?
                    <LoadingScreen />
                    : <>
                        {
                            error ? <>
                                <div className="h-screen flex justify-center items-center">
                                    <div>
                                        <FaLeaf className="mx-auto text-3xl text-green-500 mb-3" />
                                        <h5 className="text-center text-2xl font-semibold text-gray-600">Please check your connectivity</h5>
                                        <div className="flex justify-center items-center my-3">
                                            <button onClick={() => get_user()} className="px-5 py-2 bg-green-600 text-green-100 bg-transparent rounded-full mx-auto text-center">
                                                <FaRedo />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                                :
                                <Redirect to={user.role ? '/admin' : '/portfolio'} />
                        }
                    </>
            }

        </>
    )
}
