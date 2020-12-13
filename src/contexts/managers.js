import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import { useAuth } from './auth'
import { addManager } from './store'

const ManagersContext = createContext()

export const useManager = () => {
    return useContext(ManagersContext)
}

export function ManagersProvider({ children }) {

   const {setCurrentUser,currentUser} = useAuth()



    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const signup = (data, callback) => {
        auth.createUserWithEmailAndPassword(data.email, data.password)
            .then(
                snapshot => {
                    console.log(snapshot)
                    snapshot.user.sendEmailVerification();
                    snapshot.user.updateProfile({ displayName: data.company })
                    addManager(data, snapshot.user.uid)
                        .then(doc => console.log(doc))
                }
            ).catch(error => console.log(error.message))
            .finally(()=>callback())
    }

    function logout(){
        return auth.signOut()
    }
    const outpost = { currentUser,setCurrentUser, login, signup,logout}
    return (
        <ManagersContext.Provider value={outpost}>
            {children}
        </ManagersContext.Provider>
    )
}
