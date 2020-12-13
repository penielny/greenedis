import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaLeaf, FaRedo } from 'react-icons/fa'
import { Link, Redirect } from 'react-router-dom'
import LoadingScreen from '../components/loadingScreen'
import { useManager } from '../contexts/managers'
import { getManager } from '../contexts/store'

export default function Validate({ history }) {
    const { currentUser, logout } = useManager()
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        try {
            getManager(currentUser.uid)
                .then(doc => {
                    if (doc.exists == true) {
                        setUser(doc.data())
                        setLoading(false);
                    }
                    else {
                        setUser()
                        setLoading(false);

                    }
                })
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    }, [])
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
                                            <button onClick={() => console.log("action")} className="px-5 py-2 bg-green-600 text-green-100 bg-transparent rounded-full mx-auto text-center">
                                                <FaRedo />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                                :
                                <>
                                    {
                                        user ? <Redirect to={'/auth-manager'} /> : <Redirect to="/authenticate"></Redirect>
                                    }
                                </>
                        }
                    </>
            }

        </>
    )
}
