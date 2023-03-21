export const RegisterPatient = () => {
    return(
      <div className="patientregister">
        <div class="register">
            <div className="patient">
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
         <label for="dni">DNI</label>
         <input
           id="dni"
           name="dni"
           placeholder="Enter DNI"
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
</div>
</div>)

}