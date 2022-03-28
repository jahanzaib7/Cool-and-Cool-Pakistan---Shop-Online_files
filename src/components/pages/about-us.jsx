import React, {Component} from 'react';
import Slider from 'react-slick';

import Breadcrumb from "../common/breadcrumb";
import {Slider2, Team4} from "../../services/script"

class aboutUs extends Component {

    constructor (props) {
        super (props)

    }

    render (){

  

        return (
            <div>
                {/* <Breadcrumb title={'About Us'}/> */}
                {/*about section*/}
                <section class="about-page  section-b-space">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-3">
                                <div class="banner-section">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/logos/logo.png`} class="img-fluid" alt=""/>
                                </div>
                            </div>
                            <div class="col-sm-8">
                             
                                {/* <p style={{
    textAlign: 'center', fontSize:"16px"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p> */}
                            </div>
                        </div>
                    </div>
                </section>

          
            </div>
        )
    }
}

export default aboutUs