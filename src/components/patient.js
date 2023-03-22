import {useForm} from "react-hook-form"

export const RegisterPatient = () => {

  const{ register, handleSubmit}= useForm();

  const onSubmit =(data) => {
    console.log(data)
  }


    return(
      <div className="patientregister">
        <div className="register">
            <div className="patient">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <label>Username</label>
        <input
          id="username"
          name="username"
          placeholder="Enter Username"
          required="required"
          type="text"
          {...register('nombre')}
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
           {...register('DNI')}
           
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
            {...register('email')}
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
            {...register('password')}
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