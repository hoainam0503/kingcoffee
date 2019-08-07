import React, { Component } from 'react';
import Logo from '../../layout/logo.png';
class Menu extends Component {
    render() {
        return (
            <div>
                 <nav className="navbar navbar-expand-lg navbar-light fixed-top menu-fixtop" id="mainNav">
                    <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src={Logo} style={{width: 120, height:80}}/></a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#download">CâU CHUYệN THươnG HIệU</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#features">SảN PHẩM</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#contact">TIN TứC, Sự KIệN</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#download">CửA HàNG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#features">NHượNG QUYềN</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#contact">THànH VIêN</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#contact">TUYểN DụNG</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                
            </div>
        );
    }
}

export default Menu;