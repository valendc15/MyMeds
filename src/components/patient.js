import { Link, useNavigate } from "react-router-dom"
import {toast} from "react-toastify";
import { useState } from "react";



export const RegisterPatient = () => {

  const [dni, dnichange] = useState("");
  const [username, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [mail, emailchange] = useState("");

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { dni, username, password, mail };
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
      <div className="patientregister">
        <div className="register">
            <div className="patient">
    <form onSubmit={handlesubmit}>
      <div className="input-group">
        <label>Username</label>
        <input
          id="username"
          name="username"
          placeholder="Enter Username"
          required="required"
          type="text"
          value={username} onChange={e => namechange(e.target.value)}
        />
      </div>
        <div className="input-group">
         <label>DNI</label>
         <input
           id="dni"
           name="dni"
           placeholder="Enter DNI"
           required="required"
           type="text"
           value={dni} onChange={e => dnichange(e.target.value)}
           
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
            value={mail} onChange={e => emailchange(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label >Password</label>
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
</div>
</div>)

}