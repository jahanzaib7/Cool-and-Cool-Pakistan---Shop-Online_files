import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
import ig from 'fetch-instagram';

import {Slider5, Slider7} from "../../../services/script"

class Instagram extends Component {

    constructor (props) {
        super (props)

        this.state = {
            InstaData: []
        }
    }

    componentWillMount() {
        const instagram = ig({
            accessToken: '8295761913.aa0cb6f.2914e9f04dd343b8a57d9dc9baca91cc',
        });

        const users = instagram.media();
        users.then(res => this.setState({InstaData:res.data}));

    }

    render (){

        const {InstaData} = this.state;
        const {type} = this.props;

        var Sliders = {};
        if(type === 'watch'){
            Sliders = Slider5;
        }else{
            Sliders = Slider7;
        }


        return (
            <section class={`instagram`}>
                <div class={`container${(type === 'watch')?'':'-fluid'}`}>
                    <div class="row">
                        <div class="col-md-12 p-0">
                            <h2 class="title-borderless"># instagram
                                </h2>
                                <Slider {...Sliders} class="slide-7 no-arrow slick-instagram">
                                    {InstaData.map((pic,i) =>
                                        <div key={i}>
                                            <a href={pic.link} target="_blank">
                                                <div class="instagram-box">
                                                    <img src={`${pic.images.standard_resolution.url}`} alt="Avatar" class="w-100" />
                                                    <div class="overlay">
                                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    )}
                                </Slider>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Instagram;