import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [newUser, setnewUser] = useState({})
    let tempUser = {}

    async function getUserObj(email, password) {
        const response = await fetch(
            `https://inventory-data-6knk.onrender.com/users?email=${email}`
        )

        const data = await response.json()
        const userObj = { ...data[0] }

        if (userObj.password === password) {
            tempUser = {
                ...userObj,
                isLoggedIn: true,
            }

            setnewUser(tempUser)
        }
    }

    const login = () => {
        setIsLoggedIn(true)
    }

    const logout = () => {
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, newUser, login, logout, getUserObj }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
