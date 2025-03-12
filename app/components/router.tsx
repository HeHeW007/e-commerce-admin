"use client";

import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Signup from "./Signup";
import Login from "./login";
import Dashboard from "./dashboard";

export default function AppRouter()
{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </Router>
    )
}