import "./dist/sign-up.css"

export function SignUpPage(){
    return(
        <div className='sign_up_p'>
            <div className="form">
                <h1 className='form_heading'>Реєстрація</h1>
                <input type="text" placeholder='ПІБ'/>
                <input type="text" placeholder='+380...'/>
                <input type="email" placeholder='E-mail'/>


                <input type="password" placeholder='Пароль'/>

                <button className='sign_in_btn'>Зареєструвати</button>

            </div>
        </div>
    )
}