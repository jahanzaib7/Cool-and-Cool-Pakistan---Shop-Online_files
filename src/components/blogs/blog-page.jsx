import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import {Link} from 'react-router-dom';

class BlogPage extends Component {

    constructor (props) {
        super (props)
    }

    render (){

        return (
            <div>
                <Breadcrumb title={'Blog Page'}/>
                
                {/*Blog Details section*/}
                <section class="section-b-space  blog-page">
                    <div class="container">
                        <div class="row">

                            <div class="col-xl-3 col-lg-4 col-md-5">
                                <div class="blog-sidebar">
                                    <div class="theme-card">
                                        <h4>Recent Blog</h4>
                                        <ul class="recent-blog">
                                            <li>
                                                <div class="media">
                                                    <img class="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/blog/1.jpg`}
                                                         alt="Generic placeholder image" />
                                                        <div class="media-body align-self-center">
                                                            <h6>25 Dec 2018</h6>
                                                            <p>0 hits</p>
                                                        </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="media">
                                                    <img class="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/blog/2.jpg`}
                                                         alt="Generic placeholder image" />
                                                        <div class="media-body align-self-center">
                                                            <h6>25 Dec 2018</h6>
                                                            <p>0 hits</p>
                                                        </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="media">
                                                    <img class="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/blog/3.jpg`}
                                                         alt="Generic placeholder image" />
                                                        <div class="media-body align-self-center">
                                                            <h6>25 Dec 2018</h6>
                                                            <p>0 hits</p>
                                                        </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="media">
                                                    <img class="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/blog/4.jpg`}
                                                         alt="Generic placeholder image" />
                                                        <div class="media-body align-self-center">
                                                            <h6>25 Dec 2018</h6>
                                                            <p>0 hits</p>
                                                        </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="media">
                                                    <img class="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/blog/5.jpg`}
                                                         alt="Generic placeholder image" />
                                                        <div class="media-body align-self-center">
                                                            <h6>25 Dec 2018</h6>
                                                            <p>0 hits</p>
                                                        </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="theme-card">
                                        <h4>Popular Blog</h4>
                                        <ul class="popular-blog">
                                            <li>
                                                <div class="media">
                                                    <div class="blog-date">
                                                        <span>03 </span>
                                                        <span>may</span>
                                                    </div>
                                                    <div class="media-body align-self-center">
                                                        <h6>Injected humour the like</h6>
                                                        <p>0 hits</p>
                                                    </div>
                                                </div>
                                                <p>it look like readable English. Many desktop publishing text. </p>
                                            </li>
                                            <li>
                                                <div class="media">
                                                    <div class="blog-date">
                                                        <span>03 </span>
                                                        <span>may</span>
                                                    </div>
                                                    <div class="media-body align-self-center">
                                                        <h6>Injected humour the like</h6>
                                                        <p>0 hits</p>
                                                    </div>
                                                </div>
                                                <p>it look like readable English. Many desktop publishing text. </p>
                                            </li>
                                            <li>
                                                <div class="media">
                                                    <div class="blog-date">
                                                        <span>03 </span>
                                                        <span>may</span>
                                                    </div>
                                                    <div class="media-body align-self-center">
                                                        <h6>Injected humour the like</h6>
                                                        <p>0 hits</p>
                                                    </div>
                                                </div>
                                                <p>it look like readable English. Many desktop publishing text. </p>
                                            </li>
                                            <li>
                                                <div class="media">
                                                    <div class="blog-date">
                                                        <span>03 </span>
                                                        <span>may</span>
                                                    </div>
                                                    <div class="media-body align-self-center">
                                                        <h6>Injected humour the like</h6>
                                                        <p>0 hits</p>
                                                    </div>
                                                </div>
                                                <p>it look like readable English. Many desktop publishing text. </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-9 col-lg-8 col-md-7 order-sec">
                                <div class="row blog-media">
                                    <div class="col-xl-6">
                                        <div class="blog-left">
                                            <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/1.jpg`} class="img-fluid" alt=""/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="blog-right">
                                            <div>
                                                <h6>25 January 2018</h6>
                                                <Link to={`${process.env.PUBLIC_URL}/blog/details`} ><h4>you how all this mistaken idea of denouncing pleasure
                                                    and praising pain was born.</h4></Link>
                                                <ul class="post-social">
                                                    <li>Posted By : Admin Admin</li>
                                                    <li><i class="fa fa-heart"></i> 5 Hits</li>
                                                    <li><i class="fa fa-comments"></i> 10 Comment</li>
                                                </ul>
                                                <p>Consequences that are extremely painful. Nor again is there anyone
                                                    who loves or pursues or desires to obtain pain of itself, because it
                                                    is pain, but because occasionally circumstances occur in which toil
                                                    and pain can procure him some great pleasure.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row blog-media">
                                    <div class="col-xl-6">
                                        <div class="blog-left">
                                            <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/2.jpg`} class="img-fluid"
                                                             alt=""/></Link>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="blog-right">
                                            <div>
                                                <h6>25 January 2018</h6>
                                                <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                                    <h4>you how all this mistaken idea of denouncing pleasure
                                                    and praising pain was born.</h4></Link>
                                                <ul class="post-social">
                                                    <li>Posted By : Admin Admin</li>
                                                    <li><i class="fa fa-heart"></i> 5 Hits</li>
                                                    <li><i class="fa fa-comments"></i> 10 Comment</li>
                                                </ul>
                                                <p>Consequences that are extremely painful. Nor again is there anyone
                                                    who loves or pursues or desires to obtain pain of itself, because it
                                                    is pain, but because occasionally circumstances occur in which toil
                                                    and pain can procure him some great pleasure.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row blog-media">
                                    <div class="col-xl-6">
                                        <div class="blog-left">
                                            <Link to={`${process.env.PUBLIC_URL}/blog/details`} ><img src={`${process.env.PUBLIC_URL}/assets/images/blog/3.jpg`} class="img-fluid"
                                                             alt=""/></Link>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="blog-right">
                                            <div>
                                                <h6>25 January 2018</h6>
                                                <Link to={`${process.env.PUBLIC_URL}/blog/details`} ><h4>you how all this mistaken idea of denouncing pleasure
                                                    and praising pain was born.</h4></Link>
                                                <ul class="post-social">
                                                    <li>Posted By : Admin Admin</li>
                                                    <li><i class="fa fa-heart"></i> 5 Hits</li>
                                                    <li><i class="fa fa-comments"></i> 10 Comment</li>
                                                </ul>
                                                <p>Consequences that are extremely painful. Nor again is there anyone
                                                    who loves or pursues or desires to obtain pain of itself, because it
                                                    is pain, but because occasionally circumstances occur in which toil
                                                    and pain can procure him some great pleasure.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row blog-media">
                                    <div class="col-xl-6">
                                        <div class="blog-left">
                                            <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/4.jpg`} class="img-fluid"
                                                             alt=""/></Link>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="blog-right">
                                            <div>
                                                <h6>25 January 2018</h6>
                                                <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                                    <h4>you how all this mistaken idea of denouncing pleasure
                                                    and praising pain was born.</h4></Link>
                                                <ul class="post-social">
                                                    <li>Posted By : Admin Admin</li>
                                                    <li><i class="fa fa-heart"></i> 5 Hits</li>
                                                    <li><i class="fa fa-comments"></i> 10 Comment</li>
                                                </ul>
                                                <p>Consequences that are extremely painful. Nor again is there anyone
                                                    who loves or pursues or desires to obtain pain of itself, because it
                                                    is pain, but because occasionally circumstances occur in which toil
                                                    and pain can procure him some great pleasure.</p>
                                            </div>
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

export default BlogPage