import React from 'react'
import {Routes,Link,Route} from "react-router-dom";
import Signup from "../components/Signup"
import Login from "../components/Login"
import Profile from "../components/Profile"


export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/profile/:id" element={<Profile/>}></Route>
        </Routes>
    )
}