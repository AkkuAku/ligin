import React, {useState} from "react";
export const Register = (prop) => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [name, setName] = useState ('');

    const handle = (a) => {
        a.preventDefault();
        console.log (email);
    }
    return (
        <div className="auth-form-container">
        <form className='register-form' onSubmit={handle}>
            <label for= "name"> Full name </label>
            <input value= {name}  placeholder= "  name  " id="name " name="name "/>
           <label for= "email">email</label>
           <input value= {email} onChange={(a)=> setEmail(a.target.value)} type="email" placeholder= "  Имя пользователя " id="email" name="email"/>
           <label for= "password">password</label>
           <input value= {password} onChange={(a)=> setPassword(a.target.value)} type="password" placeholder= "*******" id="password" name="password"/>
           <button type="submit" > Зарегистрироваться  </button>
        </form>
        <button className='link-btn' onClick={ () =>prop.onFormSwitch('login')} >Already have an account? Login here.</button>
  </div >
    )
}