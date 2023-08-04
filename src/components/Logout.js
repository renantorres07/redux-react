import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from '../redux/userSlice';

const Logout = () => {
    const dispatch = useDispatch()
    
    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div>
            <Button onClick={handleLogout}>Log Out</Button>
        </div>
    )
}

export default Logout