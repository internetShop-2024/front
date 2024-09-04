import { UpdateProfile } from "../UpdateProfile/update"
import "./dist/favorite.css"

export function Favorite(){
    return(
        <div className="favorite_card">
            <img className="close_img" src="./img/Group 20 (1).svg" alt="" />
            <div className="left_fav">
                <img className="fav_img" src="./img/image 7.png" alt="" />
                <div className="fav_info">
                    <span className="fav_article">Артикул: ytye678</span>
                    <span className="fav_name">Горох овочевий Телефон Seedera, 20г</span>
                </div>
            </div>
            <div className="right_fav">
                <span className="fav_price">6.0 грн</span>
            </div>

        </div>
    )
}