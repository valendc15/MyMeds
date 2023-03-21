export const RegisterPharmacy=() =>{
    return(<div class="register">
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
              <label for="pharmacy-enrollment">Licensce ID</label>
              <input
                   id="pharmacy-enrollment"
                   name="pharmacy-enrollment"
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