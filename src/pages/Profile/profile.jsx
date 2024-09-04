import { useState, useEffect } from "react";
import "./dist/profile.css"
import {jwtDecode} from "jwt-decode";
import { Favorite } from "../../components/FavoriteCard/favorite";
import { UpdateProfile } from "../../components/UpdateProfile/update";


export function Profile(){
    const [user, setUser] = useState()
    const [activeButton, setActiveButton] = useState('orders');
    const token = localStorage.getItem('token');


    useEffect(() => {
        if (token) {
            const decoded = jwtDecode(token);
            setUser(decoded);
            console.log(decoded)
        }
    }, [token]);

    const handleButtonClick = (button) => {
        setActiveButton(button);
      };



      const openAddMenu = () => {
        const menuElement = document.getElementById("add_menu");
        menuElement.style.display = "flex";

        setTimeout(() => {
        menuElement.style.opacity = "1";

        }, 300);
    };


    return(
        <div className="profile_page">
            <p className="profile_heading">особистий кабінет</p>
            <div className="profile_layout">
                <div className="left_profile">
                    <p className="profile_info">Профіль</p>
                    <span className="add_info">{user?.fullname}</span>
                    <span className="add_info">{user?.email}</span>
                    <span className="add_info">{user?.phone}</span>


                    <p className="profile_info">Моя адреса</p>
                    <span className="add_info">(Додайте адрессу)</span>


                    <button onClick={openAddMenu} className="update_profile">Редагувати</button>

                    <button
                        className={`control_btn ${activeButton === 'orders' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('orders')}
                    >
                        Мої замовлення
                    </button>
                    <button
                        className={`control_btn ${activeButton === 'favorites' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('favorites')}
                    >
                        Обране
                    </button>


                </div>
                <div className="right_profile">
                    {activeButton === 'orders' && (
                    <div>
                        <h2 className="point_heading">Мої замовлення</h2>
                        <p>Тут відображаються ваші замовлення.</p>
                        {/* Додатковий контент для замовлень */}
                    </div>
                    )}
                    {activeButton === 'favorites' && (
                    <div>
                        <h2 className="point_heading">Список обраного</h2>
                        <div className="fav_con">
                            <Favorite/>
                            <Favorite/>
                            <Favorite/>
                            <Favorite/>
                            <Favorite/>
                            <Favorite/>
                            <Favorite/>
                            <Favorite/>

                        </div>


                        
                    </div>
                    )}
                </div>
            </div>
            <UpdateProfile user = {user}/>
        </div>
    )
}