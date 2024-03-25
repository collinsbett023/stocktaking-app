import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
    const [userEmail, setUserEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState('')
    const [reset, setReset] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (reset) {
            navigate('/admin')
        }
    }, [reset])

    async function editUserPassword(email, newUserPassword) {
        const response = await fetch(
            `https://inventory-data-6knk.onrender.com/users?email=${email}`
        )
        const data = await response.json()
        const id = data[0].id
        data[0].password = newUserPassword

        console.log('edited obj frontend', data[0])
        console.log('id', id)

        //Edit the user obj
        const res = await fetch(`https://inventory-data-6knk.onrender.com/users/${id}`, {

            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data[0]),
        })

        const newData = await res.json()
        if (newData.password === newUserPassword) {
            setReset(true)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (!userEmail.trim()) {
                setError('Please enter your username.')
                return
            }

            if (!newPassword.trim()) {
                setError('Please enter a new password.')
                return
            }

            if (newPassword.length < 8) {
                setError('Password must be at least 8 characters long.')
                return
            }

            if (newPassword !== confirmPassword) {
                setError('Passwords do not match.')
                return
            }

            editUserPassword(userEmail, newPassword)
        } catch (error) {
            console.error('Error resetting password:', error)
            setError('An error occurred. Please try again later.')
        }
    }

    return (
        <div className='user-container'>
            <div className='forgotpassword-container'>
                <h2>Reset Password</h2>
                <form
                    onSubmit={handleSubmit}
                    className='forgotpassword-form'
                >
                    <div className='user-box'>
                        <input
                            type='email'
                            value={userEmail}
                            placeholder='Email'
                            onChange={(e) => setUserEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='user-box'>
                        <input
                            type='password'
                            value={newPassword}
                            placeholder='New password:'
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='user-box'>
                        <input
                            type='password'
                            placeholder='Confirm New Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='inputButton'
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
                {error && <div>{error}</div>}
                {successMessage && <div>{successMessage}</div>}
            </div>
        </div>
    )
}

export default ForgotPassword
