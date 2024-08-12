import React from "react";

import './dist/footer.css'

export function Footer(){
    return(
        <div className="footer">
            <div className="top_footer">
                <div className="logo_mail">
                    <img src="./img/logo.png" alt="" className="f_logo" />
                    <p className="footer_email">podsily2017@gmail.com</p>
                </div>
                <div className="working_time">
                    <div className="working_time_title">Графік роботи </div>
                    <div className="working_time_time">Пн-Пт: з 9:00 до 19:00</div>
                    <div className="working_time_time">Сб: з 9:00 до 15:00</div>
                </div>
                <div className="sep_line"></div>
                <div className="navigation">
                    <div className="nav_title">Навігація</div>
                    <div className="nav_link">Про нас </div>
                    <div className="nav_link">Оплата та доставка </div>
                    <div className="nav_link">Акції</div>
                    <div className="nav_link">Контакти </div>
                    <div className="nav_link">Блог</div>
                    <div className="nav_link">Новини</div>
                </div>
                <div className="social">
                    <div className="social_title">Наші соц мережі</div>
                    <div className="social_links">@tetyana_magic_market</div>
                    <div className="social_links">@tetyana_magic_market</div>
                    <div className="social_links">@tetyana_magic_market</div>
                    <div className="social_links">@magic2022</div>
                </div>
            </div>
            <div className="bot_footer">
                <div className="debit_card">
                    <img src="./img/mastercard.png" alt="" />
                    <img src="./img/visa.png" alt="" />
                </div>
                <p className="footer_bot_text">2024 Всі права захищені</p>
                <p className="footer_bot_text">Політика конфіденційності</p>
                <p className="footer_bot_text">Використання cookies</p>
                <p className="footer_bot_text">Розроблено by PIXEL WEB</p>


            </div>
        </div>
    )
}