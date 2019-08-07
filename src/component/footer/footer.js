import React, { Component } from 'react';
import Logo from '../../layout/logo.png';
class Footer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" style={{marginTop: "40px", overflow: "auto"}}>
                        <hr className="col-lg-5" style={{float: "left", marginTop: "3%"}}/>
                        <img src={Logo} className="col-lg-2" style={{float: "left", width: 110, height: 60}}/>
                        <hr className="col-lg-5" style={{float: "left", marginTop: "3%"}}/>
                    </div>                  
                </div>
                <div className="row" style={{marginTop: "40px"}}>
                        <div className="col-lg-3">
                            <p>Câu chuyện thương hiệu</p>
                            <p>Menu</p>
                            <p>Tin tức, sự kiện</p>
                            <p>Cửa hàng</p>
                        </div>
                        <div className="col-lg-3">
                            <p>Nhượng quyền</p>
                            <p></p>
                            <p>Tin tức, sự kiện</p>
                            <p>Cửa hàng</p>
                        </div>
                        <div className="col-lg-3">
                            <p>Câu chuyện thương hiệu</p>
                            <p>Menu</p>
                            <p>Tin tức, sự kiện</p>
                            <p>Cửa hàng</p>
                        </div>

                </div>
            </div>
        );
    }
}

export default Footer;