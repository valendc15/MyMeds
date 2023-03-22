import { Link, useNavigate } from "react-router-dom"
import {toast} from "react-toastify";
import { useState } from "react";

export const RegisterMedic = () => {
    const [id, idchange] = useState("");
    const [username, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");

    const navigate = useNavigate();


    const handlesubmit = (e) => {
      e.preventDefault();
      let regobj = { id, username, password, email };
      console.log(regobj)
      fetch("http://localhost:8000/medic", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Registered successfully.')
                navigate('/login');
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }


return(
<div className="register">
        <form onSubmit={handlesubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
              id="username"
              name="username"
              placeholder="Enter Username"
              required="required"
              value={username} onChange={e => namechange(e.target.value)}
            />
          </div>
            <div className="input-group">
              <label>Licensce id</label>
              <input
                   id="medic-enrollment"
                   name="medic-enrollment"
                   placeholder="Enter id"
                   required="required"
                   value={id} onChange={e => idchange(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required="required"
                value={email} onChange={e => emailchange(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                required="required"
                value={password} onChange={e => passwordchange(e.target.value)}
              />
            </div>
            <div className="submit-group">
              <button type="submit" id="reggisterBtn">Register</button>
            </div>
          </form>
  
    </div>
    )
    }