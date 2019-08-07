import React, { Component } from 'react';
import Menu from '../menu/menu'
import Background from '../../layout/pt.png'

class Header extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="repos">
                    <img src={Background} className="edit-image"/>
                    <div className="container">
                        <p className="col-5 edit-text">Tinh hoa, sáng tạo và đam mê</p>
                    </div>
                </div>               
            </div>
        );
    }
}

export default Header;