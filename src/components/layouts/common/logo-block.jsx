import React, { Component } from 'react';
import Slider from 'react-slick';

import {Slider6} from "../../../services/script";

class LogoBlock extends Component {

    render (){
        return (
            <section class="section-b-space">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                       
                                <div>
                                    <div class="logo-block" style={{width: '100px',height: '55px',float:'left',marginLeft:'8%'}}>
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/1.png`} alt="" style={{width: '100px',height: '55px'}}/>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div class="logo-block" style={{width: '100px',height: '55px',float:'left',marginLeft:'2%'}}>
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/2.png`} alt="" style={{width: '100px',height: '55px'}}/>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div class="logo-block" style={{width: '100px',height: '55px',float:'left',marginLeft:'2%'}}>
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/3.png`} alt="" style={{width: '100px',height: '55px'}}/>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div class="logo-block" style={{width: '100px',height: '55px',float:'left',marginLeft:'2%'}}>
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/4.png`} alt="" style={{width: '100px',height: '55px'}}/>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div class="logo-block" style={{width: '100px',height: '55px',float:'left',marginLeft:'2%'}}>
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/5.png`} alt="" style={{width: '100px',height: '55px'}}/>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div class="logo-block" style={{width: '100px',height: '55px',float:'left',marginLeft:'2%'}}>
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/6.png`} alt="" style={{width: '100px',height: '55px'}}/>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div class="logo-block" style={{width: '100px',height: '55px',float:'left',marginLeft:'2%'}}>
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/7.png`} alt="" style={{width: '100px',height: '55px'}}/>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div class="logo-block" style={{width: '100px',height: '55px',float:'left',marginLeft:'2%'}}>
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/8.png`} alt="" style={{width: '100px',height: '55px'}}/>
                                        </a>
                                    </div>
                                </div>
                     
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default LogoBlock;