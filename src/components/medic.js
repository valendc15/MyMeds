import { Link } from "react-router-dom"


export const RegisterMedic = () => {

return(
<div class="register">
        <form>
          <div class="input-group">
            <label for="username">Username</label>
            <input
              id="username"
              name="username"
              placeholder="Enter Username"
              required="required"
            />
          </div>
            <div class="input-group">
              <label for="medic-enrollment">Licensce id</label>
              <input
                   id="medic-enrollment"
                   name="medic-enrollment"
                   placeholder="Enter id"
                   required="required"
              />
            </div>
            <div class="input-group">
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required="required"
              />
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                required="required"
              />
            </div>
            <div class="submit-group">
              <button type="submit" id="reggisterBtn">Register</button>
            </div>
          </form>
  
    </div>
    )
    }