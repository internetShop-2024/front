import './dist/sign-in.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthorizationMutation } from '../../store/userApi';
import { useState } from 'react';

export function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [authorization, { data, isLoading, error }] = useAuthorizationMutation();
    
    // Викликаємо useNavigate в компоненті
    const navigate = useNavigate();

    const authorize = async () => {
        try {
            const user = {
                email,
                password,
            };
            const result = await authorization(user).unwrap(); // Використовуємо unwrap для отримання результату
            localStorage.setItem('token', result.accessToken); // Зберігаємо accessToken в localStorage
            console.log(result); // Лог результату авторизації
        } catch (e) {
            console.error("Failed to authorize: ", e);
        } finally {
            navigate('/'); // Перенаправлення на домашню сторінку
        }
    };

    return (
        <div className='sign_in_p'>
            <div className="form">
                <h1 className='form_heading'>Вхід</h1>
                <span className='error'>Неправильно введений пароль/логін</span>
                <input type="email" placeholder='E-mail' onChange={(e) => { setEmail(e.target.value); }} />
                <input type="password" placeholder='Пароль' onChange={(e) => { setPassword(e.target.value); }} />

                <button onClick={authorize} className='sign_in_btn' disabled={isLoading}>
                    Увійти
                </button>
                <div className="sing_in_sep_line"></div>
                <span className='for_pass'>Забули пароль?</span>
                <NavLink to="/sign-up" className='sign_up_btn'>Зареєструватися</NavLink>
            </div>
        </div>
    );
}
