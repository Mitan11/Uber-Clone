import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserLogout() {

    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => {
        if (res.status === 200) {
            localStorage.removeItem('token')
        }
        navigate('/user-login')
    }).catch(err => {
        console.log(err)
    })
}

export default UserLogout