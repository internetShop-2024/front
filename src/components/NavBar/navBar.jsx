import React from "react";


import "./dist/navBar.css"

export function NavBar(){
    return(
        <div className="nav_bar">
            <div className="logo"></div>
            <div className="middle_block">
                <div className="m_top_block">
                    <div className="link"></div>
                    <div className="link"></div>
                    <div className="link"></div>
                    <div className="link"></div>
                    <div className="link"></div>
                </div>
                <div className="m_bottomn_block">
                    <div className="link_b"></div>
                    <div className="search"></div>
                </div>
                
            </div>
            <div className="right_block">
                <div className="r_top_block">
                    <div className="button"></div>
                    <div className="button"></div>
                    <div className="button"></div>
                    <div className="button"></div>
                </div>
                <div className="r_bottomn_block">
                    <div className="smth"></div>
                    <div className="cart"></div>
                </div>
            </div>
        </div>
    )
}