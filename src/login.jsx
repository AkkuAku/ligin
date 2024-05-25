import React, {useState} from "react";
export const Login= (prop) => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    const handle = (a) => {
        a.preventDefault();
        console.log (email);
    }


    return (
        <div className="auth-form-container">
             <form className='login-form' onSubmit={handle}>
                <label >Добро </label>
                <label >Пожаловать</label>
                <label1 >Войдите в свой аккаунт чтобы получить доступ далее</label1>
                <input value= {email} onChange={(a)=> setEmail(a.target.value)} type="email" placeholder= "  Имя пользователя " id="email" name="email"/>
                <input value= {password} onChange={(a)=> setPassword(a.target.value)} type="password" placeholder= "*******" id="password" name="password"/>
                <button type="submit" > Войти </button>
             </form>
             <button className='link-btn' onClick={ () =>prop.onFormSwitch('register')}> Do not have an account? Register here.</button>
       </div>
    )
}