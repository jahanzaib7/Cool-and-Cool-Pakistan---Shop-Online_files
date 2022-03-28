import React, {Component} from 'react';
import Slider from "react-slick"

import Breadcrumb from "../../common/breadcrumb";

class ElementSlider extends Component {
    render() {
        return (
            <div>
                <Breadcrumb parent={'Elements'} title={'Slider'}/>


                <div class="container">
                    <section class="section-b-space">
                        <Slider class="slide-1 home-slider">
                            <div>
                                <div class="home home7 p-center text-center bg-size blur-up lazyloaded">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col">
                                                <div class="slider-contain">
                                                    <div>
                                                        <h4>welcome to fashion</h4>
                                                        <h1>women fashion</h1>
                                                        <a href="#" class="btn btn-solid">shop now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="home home8 p-center text-center bg-size blur-up lazyloaded">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col">
                                                <div class="slider-contain">
                                                    <div>
                                                        <h4>welcome to fashion</h4>
                                                        <h1>men fashion</h1>
                                                        <a href="#" class="btn btn-solid">shop now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </section>
                </div>

                <div class="container section-b-space">
                    <div class="row">
                        <div class="col">
                            <div class="card">
                                <h5 class="card-header">Classes</h5>
                                <div class="card-body">
                                    <h5 class="card-title">For Parallax Image - .parallax</h5>
                                    <h5>contain-align - .text-left, .text-center, .text-right</h5>
                                    <h5>contain-position - .p-left, .p-center, .p-right</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ElementSlider;