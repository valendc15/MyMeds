import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Routes, Route, useNavigate} from 'react-router-dom';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="bg">
            <div className="text">
            <img src={require("./MyMedsLogo.png")} className="logoLogin"/> 
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" className="user-log"/> <br/>
                <label htmlFor="password" className="pass">password </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" className="user-password" /> <br/>
                <button type="submit" className="submit">Log In</button>
            </form>
            <li><Link to="/"><button className="select">Don't have an account? Register here.</button></Link></li>
            <p className="copyRight">©2023, MyMeds, SA or its affiliates.</p>
            </div>
        </div>

    )
}