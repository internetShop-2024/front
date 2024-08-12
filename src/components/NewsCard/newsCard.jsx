import React from "react";

import "./dist/newsCard.css"

export function NewsCard() {
    return(
        <div className="news_car">
            <img className="news_img" src="./img/semena.png" alt="" />
            <div className="news_bot">
                <div className="news_title">Пророщування і стимуляція насіння. Найбільш ефективні добрива</div>
                <div className="news_text">Посів насіння і розвиток розсади припадає на лютий - квітень. У цей період рослини відчувають нестачу в природному освітленні, вологості і...</div>
                <div className="brn_date_con">
                    <div className="read_more">Читати далі --></div>
                    <div className="news_date">01.02.2021</div>
                </div>
            </div>
        </div>
    )
}