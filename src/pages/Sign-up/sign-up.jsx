import { useState } from "react"
import "./dist/sign-up.css"
import { useNavigate } from "react-router-dom"
import { useRegistarionMutation } from "../../store/userApi"

export function SignUpPage(){

    const [fullname, setPib] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [register, {data, isLoading, error}] = useRegistarionMutation()

    const navigate = useNavigate();



    const reg = async() => {
        try{
            const user = {
                email,
                password,
                fullname,
                phone

            }

            await register(user)
        }catch(e){
            console.error("Failed to register: ", e);

        }
        //finally{
        //     navigate('/')
        // }
    }

    return(
        <div className='sign_up_p'>
            <div className="form">
                <h1 className='form_heading'>Реєстрація</h1>
                <input type="text" placeholder='ПІБ' onChange={(e) => {setPib(e.target.value)}}/>
                <input type="text" placeholder='+380...' onChange={(e) => {setPhone(e.target.value)}}/>
                <input type="email" placeholder='E-mail' onChange={(e) => {setEmail(e.target.value)}}/>


                <input type="password" placeholder='Пароль' onChange={(e) => {setPassword(e.target.value)}}/>

                <button className='sign_in_btn' onClick={reg}>Зареєструвати</button>

            </div>
        </div>
    )
}