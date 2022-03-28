import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";

class BlogDetails extends Component {

    constructor (props) {
        super (props)
    }

    render (){


        return (
            <div>
                <Breadcrumb title={'Blog - Details'}/>
                
                
                {/*Blog Details section*/}
                <section class="blog-detail-page section-b-space">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 blog-detail">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/about/about%20us.jpg`} class="img-fluid" alt=""/>
                                <h3>Remaining essentially unchanged.</h3>
                                <ul class="post-social">
                                    <li>25 January 2018</li>
                                    <li>Posted By : Admin Admin</li>
                                    <li><i class="fa fa-heart"></i> 5 Hits</li>
                                    <li><i class="fa fa-comments"></i> 10 Comment</li>
                                </ul>
                                <div class="row">
                                    <div class="col-sm-4">
                                        <p>Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis augue id,
                                            imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus finibus. Vivamus ut augue
                                            nec justo viverra laoreet. Nunc efficitur, arcu ac cursus gravida, lorem elit
                                            commodo urna, id viverra libero tellus non ipsum. Fusce molestie ultrices nibh
                                            feugiat pretium. Donec pulvinar arcu metus, et dapibus odio condimentum id. Quisque
                                            malesuada mauris sit amet dui feugiat, ut pretium mauris luctus. Ut aliquam, tellus
                                            nec molestie condimentum, tellus arcu dignissim quam, a gravida nunc nulla vel
                                            magna. Sed pulvinar tortor et euismod blandit. Proin accumsan orci ac nunc fermentum
                                            vehicula.</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <p>Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis augue id,
                                            imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus finibus. Vivamus ut augue
                                            nec justo viverra laoreet. Nunc efficitur, arcu ac cursus gravida, lorem elit
                                            commodo urna, id viverra libero tellus non ipsum. Fusce molestie ultrices nibh
                                            feugiat pretium. Donec pulvinar arcu metus, et dapibus odio condimentum id. Quisque
                                            malesuada mauris sit amet dui feugiat, ut pretium mauris luctus. Ut aliquam, tellus
                                            nec molestie condimentum, tellus arcu dignissim quam, a gravida nunc nulla vel
                                            magna. Sed pulvinar tortor et euismod blandit. Proin accumsan orci ac nunc fermentum
                                            vehicula.</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <p>Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis augue id,
                                            imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus finibus. Vivamus ut augue
                                            nec justo viverra laoreet. Nunc efficitur, arcu ac cursus gravida, lorem elit
                                            commodo urna, id viverra libero tellus non ipsum. Fusce molestie ultrices nibh
                                            feugiat pretium. Donec pulvinar arcu metus, et dapibus odio condimentum id. Quisque
                                            malesuada mauris sit amet dui feugiat, ut pretium mauris luctus. Ut aliquam, tellus
                                            nec molestie condimentum, tellus arcu dignissim quam, a gravida nunc nulla vel
                                            magna. Sed pulvinar tortor et euismod blandit. Proin accumsan orci ac nunc fermentum
                                            vehicula.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row section-b-space blog-advance">
                            <div class="col-lg-6">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/1.jpg`} class="img-fluid" alt=""/>
                            </div>
                            <div class="col-lg-6">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/2.jpg`} class="img-fluid" alt=""/>
                            </div>
                            <div class="col-lg-6">
                                <ul>
                                    <li> Donec ut metus sit amet elit consectetur facilisis id vel turpis.</li>
                                    <li> Aenean in mi eu elit mollis tincidunt.</li>
                                    <li> Etiam blandit metus vitae purus lacinia ultricies.</li>
                                    <li> Nunc quis nulla sagittis, faucibus neque a, tempus metus.</li>
                                    <li> In scelerisque libero ut mi ornare, a porttitor neque pulvinar.</li>
                                    <li> Morbi molestie lacus blandit interdum sodales.</li>
                                    <li> Curabitur eleifend velit molestie eleifend interdum.</li>
                                    <li> Vestibulum fringilla tortor et lorem sagittis,</li>
                                    <li> In scelerisque libero ut mi ornare, a porttitor neque pulvinar.</li>
                                    <li> Morbi molestie lacus blandit interdum sodales.</li>
                                    <li> Curabitur eleifend velit molestie eleifend interdum.</li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <p>Nulla quam turpis, commodo et placerat eu, mollis ut odio. Donec pellentesque egestas
                                    consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                    cubilia Curae; Nunc at urna dolor. Mauris odio nisi, rhoncus ac justo eget, lacinia
                                    iaculis lectus. Pellentesque id dapibus justo. Nunc venenatis non odio sed luctus.
                                    Etiam sit amet elit massa.</p>

                                <p>Phasellus quis lorem eros. Aliquam non tincidunt nibh. Nulla quis interdum neque.
                                    Mauris volutpat neque eu nunc ornare ullamcorper. Sed neque velit, lobortis eget
                                    tellus in, pellentesque ornare nibh. Vestibulum ante ipsum primis in faucibus orci
                                    luctus et ultrices posuere cubilia Curae; Maecenas rutrum nisi non nibh egestas
                                    lacinia. Cras ut tellus sit amet lacus consequat dictum nec id sapien. Ut
                                    pellentesque ac ex ut elementum. Morbi mollis volutpat neque eu volutpat.</p>

                                <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis
                                    fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus
                                    enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in
                                    volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit
                                    ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam
                                    vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis.
                                    Vestibulum eu vestibulum ex. Maecenas luctus orci sed blandit fermentum. In
                                    vulputate eu metus a faucibus. Suspendisse feugiat condimentum congue.</p>
                            </div>
                        </div>
                        <div class="row section-b-space">
                            <div class="col-sm-12">
                                <ul class="comment-section">
                                    <li>
                                        <div class="media">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/avtar.jpg`} alt="Generic placeholder image" />
                                                <div class="media-body">
                                                    <h6>Mark Jecno <span>( 12 Jannuary 2018 at 1:30AM )</span></h6>
                                                    <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est
                                                        sit amet felis fringilla bibendum at at leo. Proin molestie ac
                                                        nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor.
                                                        Aenean nec felis dui. Integer tristique odio mi, in volutpat
                                                        metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem
                                                        hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget
                                                        lectus sit amet diam vestibulum varius. Suspendisse dignissim
                                                        mattis leo, nec facilisis erat tempor quis. Vestibulum eu
                                                        vestibulum ex. </p>
                                                </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="media">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/2.jpg`} alt="Generic placeholder image" />
                                                <div class="media-body">
                                                    <h6>Mark Jecno <span>( 12 Jannuary 2018 at 1:30AM )</span></h6>
                                                    <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est
                                                        sit amet felis fringilla bibendum at at leo. Proin molestie ac
                                                        nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor.
                                                        Aenean nec felis dui. Integer tristique odio mi, in volutpat
                                                        metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem
                                                        hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget
                                                        lectus sit amet diam vestibulum varius. Suspendisse dignissim
                                                        mattis leo, nec facilisis erat tempor quis. Vestibulum eu
                                                        vestibulum ex. </p>
                                                </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="media">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/20.jpg`} alt="Generic placeholder image" />
                                                <div class="media-body">
                                                    <h6>Mark Jecno <span>( 12 Jannuary 2018 at 1:30AM )</span></h6>
                                                    <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est
                                                        sit amet felis fringilla bibendum at at leo. Proin molestie ac
                                                        nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor.
                                                        Aenean nec felis dui. Integer tristique odio mi, in volutpat
                                                        metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem
                                                        hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget
                                                        lectus sit amet diam vestibulum varius. Suspendisse dignissim
                                                        mattis leo, nec facilisis erat tempor quis. Vestibulum eu
                                                        vestibulum ex. </p>
                                                </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="row blog-contact">
                            <div class="col-sm-12">
                                <h2>Leave Your Comment</h2>
                                <form class="theme-form">
                                    <div class="form-row">
                                        <div class="col-md-12">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" class="form-control" id="name"
                                                   placeholder="Enter Your name" required="" />
                                        </div>
                                        <div class="col-md-12">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" class="form-control" id="email" placeholder="Email"
                                                   required="" />
                                        </div>
                                        <div class="col-md-12">
                                            <label htmlFor="exampleFormControlTextarea1">Comment</label>
                                            <textarea class="form-control" placeholder="Write Your Comment"
                                                      id="exampleFormControlTextarea1" rows="6"></textarea>
                                        </div>
                                        <div class="col-md-12">
                                            <button class="btn btn-solid" type="submit">Post Comment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default BlogDetails