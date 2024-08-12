import { NavLink } from "react-router-dom"
import "./dist/catalogCart.css"

import { useState } from "react"

export function CatalogCard(){

    const [route, setRoute] = useState("plants_protecting_tools")

    return(
        <NavLink to={`/products`} className="catalog_card">
            <img src="./img/Group 6.svg" alt="" />
            <p className="catalog_name">Засоби захисту рослин</p>
        </NavLink>
    )
}