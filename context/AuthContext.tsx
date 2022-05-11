import { createContext, useContext, useEffect, useState } from 'react'
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'
import { auth } from '../config/firebase'

const AuthContext = createContext<any>({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    console.log(user)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                })
            } else {
                setUser(null)
            }
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const signup = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginGoogle = async () => {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider())
        } catch (error) {
            
        }
    }

    const logout = async () => {
        setUser(null)
        await signOut(auth)
    }

    return (
        <AuthContext.Provider value={{ user, loginGoogle, signup, logout }}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}