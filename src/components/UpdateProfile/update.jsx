import { useEffect, useState } from "react"
import "./dist/update.css"

export function UpdateProfile({user}){

    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [city, setCity] = useState()
    const [address, setAddress] = useState()


    useEffect(() => {
        if(user){
            setName(user.fullname)
            setPhone(user.phone)
            setEmail(user.email)
        }
    },[user])



    const closeAddMenu = () => {
        const menuElement = document.getElementById("add_menu");
        menuElement.style.opacity = "0";
        setTimeout(() => {
            menuElement.style.display = "none";
        }, 300);
    };


    return (
        <div id="add_menu" className="up_profile">
            <div className="modal_update">
            <button onClick={closeAddMenu} className="close_img_up"><img  src="./img/Group 20 (1).svg" alt="" /></button>

                <p className="updaet_heding">Редагування Профілю</p>
                    <input type="text" placeholder='ПІБ' value={name} onChange={(e) => {setName(e.target.value)}}/>
                    <input type="text" placeholder='Телефон' value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
                    <input type="email" placeholder='E-mail' value={email} onChange={(e) => {setEmail(e.target.value)}}/>

                <p className="updaet_heding">Доставка</p>
                    <input type="text" placeholder='Місто'/>
                    <input type="text" placeholder='Вулиця'/>
                <button className="update_btn">ЗБЕРЕГТИ ЗМІНИ</button>
            </div>
        </div>
    )
}