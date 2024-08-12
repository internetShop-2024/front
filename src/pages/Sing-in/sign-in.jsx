import './dist/sign-in.css'

import { NavLink } from 'react-router-dom'



export function SignInPage(){
    return(
        <div className='sign_in_p'>
            <div className="form">
                <h1 className='form_heading'>Вхід</h1>
                <span className='error'>Неправильно введений пароль/логін</span>
                <input type="email" placeholder='E-mail'/>
                <input type="password" placeholder='Пароль'/>

                <button className='sign_in_btn'>Увійти</button>
                <div className="sing_in_sep_line"></div>
                <span className='for_pass'>Забули пароль?</span>
                <NavLink to = "/sign-up" className='sign_up_btn'>Зареєструватися</NavLink>

            </div>
        </div>
    )
}