import React from 'react'
import { auth } from '../firebase'
import { addUser } from './store'

const AuthContext = React.createContext()

export function useAuth() {
    return React.useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = React.useState()

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    const signup = (email, password, phone, name,gender) => {
        return auth.createUserWithEmailAndPassword(email, password).then(
            user => { 
                user.user.sendEmailVerification();
                user.user.updateProfile({ displayName: name });
                addUser(user.user.uid,gender,phone)
            }

        )
    }

    const resetpasswod = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    const logout = () => {
        return auth.signOut()
    }

    const signin = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const value = {
        currentUser,
        logout,
        signup,
        signin
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
