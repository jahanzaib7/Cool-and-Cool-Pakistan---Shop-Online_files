import React, {Component} from 'react';

import Breadcrumb from "../../common/breadcrumb";
import {
    svgoffer,
    svgFreeShipping,
    svgservice,
    svgpayment
} from "../../../services/script"

class ElementService extends Component {
    render() {
        return (
            <div>
                <Breadcrumb parent={'Elements'} title={'Category'}/>

                {/*Service One*/}
                <div class="container section-t-space">
                    <section class="service border-section small-section ">
                        <div class="row">
                            <div class="col-md-4 service-block">
                                <div class="media">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.png`} alt=""/>
                                    <div class="media-body">
                                        <h4>free shipping</h4>
                                        <p>free shipping world wide</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 service-block">
                                <div class="media">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service2.png`} alt=""/>
                                    <div class="media-body">
                                        <h4>24 X 7 service</h4>
                                        <p>online service for new customer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 service-block">
                                <div class="media">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service3.png`} alt=""/>
                                    <div class="media-body">
                                        <h4>festival offer</h4>
                                        <p>new online special festival offer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/*Service Two*/}
                <div class="container">
                    <section class="service section-b-space  border-section border-top-0">
                        <div class="row partition4 ">
                            <div class="col-lg-3 col-md-6 service-block1">
                                <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
                                <h4>free shipping</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                            </div>
                            <div class="col-lg-3 col-md-6 service-block1 ">
                                <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                                <h4>24 X 7 service</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                            </div>
                            <div class="col-lg-3 col-md-6 service-block1 border border-0">
                                <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                                <h4>festival offer</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                            </div>
                            <div class="col-lg-3 col-md-6 service-block1 border border-0">
                                <div dangerouslySetInnerHTML={{ __html: svgpayment }} />
                                <h4>online payment</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/*Service Three*/}
                <section class=" tools-service section-b-space">
                    <div class="container">
                        <div class="service p-0 ">
                            <div class="row">
                                <div class="col-lg-3 col-sm-6 service-block">
                                    <div class="media">
                                        <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
                                        <div class="media-body">
                                            <h4>free shipping</h4>
                                            <p>free shipping world wide</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 service-block">
                                    <div class="media">
                                        <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                                        <div class="media-body">
                                            <h4>24 X 7 service</h4>
                                            <p>online service for new customer</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 service-block">
                                    <div class="media">
                                        <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                                        <div class="media-body">
                                            <h4>festival offer</h4>
                                            <p>new online special festival offer</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 service-block">
                                    <div class="media border-0 m-0">
                                        <div dangerouslySetInnerHTML={{ __html: svgpayment }} />
                                        <div class="media-body">
                                            <h4>online payment</h4>
                                            <p>Contrary to popular belief.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}


export default ElementService;