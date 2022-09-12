import React, {useContext, useState} from "react";
import UserLogin from "./UserLogin";
import "./Home.css"

import {UserContext} from './UserContext'

function Home ({ login, logout, error, errorMessage }) {

    const {user, setUser} = useContext(UserContext);

    return (
        <div>
            {(!!user.username) ? (
                <div className="welcome">
                    <br></br>
                    <h1>Welcome, <span>{user.username}</span> !</h1>

                    <br></br>
                    <button className="logout-button"onClick={logout}>Logout</button>
                </div>
            ) : (
                <UserLogin login={login} logout={logout} error={error} errorMessage={errorMessage}/>)}

        </div>

    )
}

export default Home
