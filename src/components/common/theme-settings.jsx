import React, {Component} from 'react';
import {Link} from "react-router-dom"
import { withTranslate } from 'react-redux-multilingual'

import {SlideUpDown} from "../../services/script"
import { ToastContainer } from 'react-toastify';

class ThemeSettings extends Component {

    constructor(props){
        super(props);

        this.state = {
            divName:'RTL',
            themeLayout: false
        }
    }


    /*=====================
     Tap on Top
     ==========================*/
    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        if (document.documentElement.scrollTop > 600) {
            document.querySelector(".tap-top").style = "display: block";
        } else {
            document.querySelector(".tap-top").style = "display: none";
        }
    }
    clickToTop(){
        window.scroll({top: 0, left: 0, behavior: 'smooth' })
    }

    componentDidMount() {
        SlideUpDown('setting-title');
    }

    openSetting = () => {
        document.getElementById("setting_box").classList.add('open-setting');
        document.getElementById("setting-icon").classList.add('open-icon');
    }
    closeSetting = () => {
        document.getElementById("setting_box").classList.remove('open-setting');
        document.getElementById("setting-icon").classList.remove('open-icon');
    }

    // Color Picker
    changeColor(event, color){
        var elems = document.querySelectorAll(".color-box li");
        [].forEach.call(elems, function(elemt) {
            elemt.classList.remove('active');
        })

        event.target.classList.add('active');
        console.log(color)
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/`+color+`.css` );
    }

    ChangeRtl(divName){
        if(divName === 'RTL') {
            document.body.classList.add('rtl');
            this.setState({divName: 'LTR'});
        }else{
            document.body.classList.remove('rtl');
            this.setState({divName: 'RTL'});
        }
    }

    changeThemeLayout() {
        this.setState({
            themeLayout:!this.state.themeLayout
        })
    }

    render() {
        if(this.state.themeLayout){
            document.body.classList.add('dark');
        }else{
            document.body.classList.remove('dark');
        }
        let tap_to_top = {display: 'none'}

        return (
            <div>
                <a href="javascript:void(0)" onClick={() => this.openSetting()}>
                    <div class="setting-sidebar" id="setting-icon">
                        <div>
                            <i class="fa fa-cog" aria-hidden="true"></i>
                        </div>
                    </div>
                </a>
                <div id="setting_box" class="setting-box">
                    <a href="javascript:void(0)" class="overlay" onClick={() => this.closeSetting()}></a>
                    <div class="setting_box_body">
                        <div onClick={() => this.closeSetting()}>
                            <div class="sidebar-back text-left">
                                <i class="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
                            </div>
                        </div>
                        <div class="setting-body">
                            <div class="setting-title">
                                <h4>layout</h4>
                            </div>
                            <div class="setting-contant">
                                <div class="row demo-section">
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo1"></div>
                                            <div class="demo-text">
                                                <h4>Fashion</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/fashion`}
                                                            class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo21">
                                                <div class="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                                </div>
                                            </div>
                                            <div class="demo-text">
                                                <h4>furniture</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/furniture`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo7">
                                                <div class="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                                </div>
                                            </div>
                                            <div class="demo-text">
                                                <h4>kids</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/kids`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo48">
                                                <div class="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                                </div>
                                            </div>
                                            <div class="demo-text">
                                                <h4>pets</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/pets`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo10">
                                                <div class="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                                </div>
                                            </div>
                                            <div class="demo-text">
                                                <h4>vegetables</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/vegetables`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo6">
                                                <div class="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                                </div>
                                            </div>
                                            <div class="demo-text">
                                                <h4>watch</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/watch`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo11">
                                                <div class="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                                </div>
                                            </div>
                                            <div class="demo-text">
                                                <h4>beauty</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/beauty`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo16">
                                                <div class="ribbon-1"><span>n</span><span>e</span><span>w</span>
                                                </div>
                                            </div>
                                            <div class="demo-text">
                                                <h4>electronics</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/electronic`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="setting-title">
                                <h4>shop</h4>
                            </div>
                            <div class="setting-contant">
                                <div class="row demo-section">
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo22"></div>
                                            <div class="demo-text">
                                                <h4>left sidebar</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo24"></div>
                                            <div class="demo-text">
                                                <h4>right sidebar</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/right-sidebar/collection`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo23"></div>
                                            <div class="demo-text">
                                                <h4>no sidebar</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/no-sidebar/collection`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo52"></div>
                                            <div class="demo-text">
                                                <h4>metro</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/metro/collection`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo53"></div>
                                            <div class="demo-text">
                                                <h4>full width</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/full-width/collection`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="setting-title">
                                <h4>product</h4>
                            </div>
                            <div class="setting-contant">
                                <div class="row demo-section">
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo33"></div>
                                            <div class="demo-text">
                                                <h4>left sidebar</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/1`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo36"></div>
                                            <div class="demo-text">
                                                <h4>right sidebar</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/right-sidebar/product/1`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo34"></div>
                                            <div class="demo-text">
                                                <h4>no sidebar</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/no-sidebar/product/1`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo34"></div>
                                            <div class="demo-text">
                                                <h4>col left</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/col-left/product/1`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo34"></div>
                                            <div class="demo-text">
                                                <h4>col right</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/col-right/product/1`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo34"></div>
                                            <div class="demo-text">
                                                <h4>accordian</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/accordian/product/1`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo34"></div>
                                            <div class="demo-text">
                                                <h4>column</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/column/product/1`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo34"></div>
                                            <div class="demo-text">
                                                <h4>left image</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/left-image/product/1`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo34"></div>
                                            <div class="demo-text">
                                                <h4>right image</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/right-image/product/1`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-12 text-center demo-effects">
                                        <div class="set-position">
                                            <div class="layout-container demo34"></div>
                                            <div class="demo-text">
                                                <h4>vertical</h4>
                                                <div class="btn-group demo-btn" role="group"
                                                     aria-label="Basic example">
                                                    <Link to={`${process.env.PUBLIC_URL}/vertical/product/1`}
                                                          class="btn new-tab-btn">Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="setting-title">
                                <h4>color option</h4>
                            </div>
                            <div class="setting-contant">
                                <ul class="color-box">
                                    <li class="color1 active" onClick={(e) => this.changeColor(e, 'color1')}></li>
                                    <li class="color2" onClick={(e) => this.changeColor(e, 'color2')}></li>
                                    <li class="color3" onClick={(e) => this.changeColor(e, 'color3')}></li>
                                    <li class="color4" onClick={(e) => this.changeColor(e, 'color4')}></li>
                                    <li class="color5" onClick={(e) => this.changeColor(e, 'color5')}></li>
                                    <li class="color6" onClick={(e) => this.changeColor(e, 'color6')}></li>
                                    <li class="color7" onClick={(e) => this.changeColor(e, 'color7')}></li>
                                    <li class="color8" onClick={(e) => this.changeColor(e, 'color8')}></li>
                                    <li class="color9" onClick={(e) => this.changeColor(e, 'color9')}></li>
                                    <li class="color10" onClick={(e) => this.changeColor(e, 'color10')}></li>
                                    <li class="color11" onClick={(e) => this.changeColor(e, 'color11')}></li>
                                    <li class="color12" onClick={(e) => this.changeColor(e, 'color12')}></li>
                                    <li class="color13" onClick={(e) => this.changeColor(e, 'color13')}></li>
                                    <li class="color14" onClick={(e) => this.changeColor(e, 'color14')}></li>
                                    <li class="color15" onClick={(e) => this.changeColor(e, 'color15')}></li>
                                    <li class="color16" onClick={(e) => this.changeColor(e, 'color16')}></li>
                                    <li class="color17" onClick={(e) => this.changeColor(e, 'color17')}></li>
                                    <li class="color18" onClick={(e) => this.changeColor(e, 'color18')}></li>
                                </ul>
                            </div>
                            <div class="setting-title">
                                <h4>RTL</h4>
                            </div>
                            <div class="setting-contant">
                                <ul class="setting_buttons">
                                    <li class="active" id="ltr_btn">
                                        <a href={null} class="btn setting_btn" onClick={ () => this.ChangeRtl(this.state.divName)}>
                                            {this.state.divName}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="buy_btn">
                                <a href="https://themeforest.net/item/multikart-responsive-react-ecommerce-template/23067773?s_rank=1"
                                   target="_blank" class="btn btn-block purchase_btn">
                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i> purchase Multikart now!</a>
                                <a href="https://themeforest.net/item/multikart-responsive-angular-ecommerce-template/22905358?s_rank=3"
                                   target="_blank" class="btn btn-block purchase_btn">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon/angular.png`} alt="" class="img-fluid" /> Multikart Angular</a>
                                <a href="https://themeforest.net/item/multikart-responsive-ecommerce-html-template/22809967"
                                   target="_blank" class="btn btn-block purchase_btn">
                                    <img src="" alt="" class="img-fluid" /> Multikart HTML</a>
                                <a href="https://themeforest.net/item/multikart-multipurpose-shopify-sections-theme/23093831?s_rank=1"
                                   target="_blank" class="btn btn-block purchase_btn">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon/shopify.png`} alt="" class="img-fluid" /> Multikart Shopify</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sidebar-btn dark-light-btn">
                    <div class="dark-light">
                        <div
                            class="theme-layout-version"
                            onClick={() => this.changeThemeLayout()}
                        >{this.state.themeLayout?'Light':'Dark'}</div>
                    </div>
                </div>
                <div class="tap-top" onClick={this.clickToTop} style={tap_to_top}>
                    <div>
                        <i class="fa fa-angle-double-up"></i>
                    </div>
                </div>

                <ToastContainer/>
            </div>
        );
    }
}

export default withTranslate(ThemeSettings);
