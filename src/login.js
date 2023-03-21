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
        <div className="App">
            <div className="text">
            <img src={require("./MyMedsLogo.png")} className="logoLogin"/> 
            <form  onSubmit={handleSubmit} className="formlog">
                <label htmlFor="email" className="input-text">email </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" className="input-group2"/> <br/>
                <label htmlFor="password" className="input-text">password </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" className="input-group2" /> <br/>
                <button type="submit" className="submit">Log In</button>
            </form>
            <li><Link to="/"><button className="button-5">Don't have an account? Register here.</button></Link></li>
            <p className="copyRight">©2023, MyMeds, SA or its affiliates.</p>
            </div>
        </div>

    )
}