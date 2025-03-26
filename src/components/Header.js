import React from "react";

export const Header = () => {
    return (

        <header>
            <img id="logo" src="/img/dc-logo.png" alt="Logo DC"></img>
            <div id="container_menu">
                <div className="menu">
                    <a href="#" >CARACHTERS</a>
                </div>
                <div className="menu">
                    <a href="#">COMICS</a>
                </div>
                <div className="menu">
                    <a href="#">MOVIES</a>
                </div>
                <div className="menu">
                    <a href="#">TV</a>
                </div>
                <div className="menu">
                    <a href="#">GAMES</a>
                </div>
                <div className="menu">
                    <a href="#">COLLECTIBLES</a>
                </div>
                <div className="menu">
                    <a href="#">VIDEOS</a>
                </div>
                <div className="menu">
                    <a href="#">FANS</a>
                </div>
                <div className="menu">
                    <a href="#">NEWS</a>
                </div>
                <div className="menu">
                    <a href="#">SHOP</a>
                </div>
            </div>
        </header>

    );
};
