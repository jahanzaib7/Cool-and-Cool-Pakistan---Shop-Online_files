import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import * as url from '../../../constants/Endpoints'
// Import custom components
import Collection from "./collection"

// import BlogSection from "../common/blogsection";
import HeaderThree from "../../common/headers/header-three"

import FooterFour from "../../common/footers/footer-four"

// import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import 'react-toastify/dist/ReactToastify.css';

import {getHomebanner} from '../../../services/index'
import WovistaCarousel from './carousel';




class Coolncool extends Component {

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color18.css` );
    }

    render(){
        let { sliderimages, homebannerimages,categories,country } = this.props;
       

        let imgslid = sliderimages.data || [];
       
        const settings = {
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            speed: 500,
            arrows: true,
            adaptiveHeight: true,
            appendDots: dots => <ul>{dots}</ul>,
            customPaging: i => (
              <div className="ft-slick__dots--custom">
                <div className="loading" />
              </div>
            )
          };

        return (
            <div>
                   
               
                <Helmet>
                    <title>Wovista | Shop Online</title>
                </Helmet>
                <HeaderThree logoName={'logo/14.png'} history={this.props.history}/>
                <section className=" pt-1 larg-slider">
                <WovistaCarousel/>

                    {/* <Slider {...settings} className="slide-1 home-slider">
                        {
                        imgslid.map( (img,index) =>
                        
                            <Link to={`${img.Url}`} >
                                <div  key={index} >
                                     <img style={{ width: '100%'}} src={img.image_url}/>
                             
                                </div>
                            </Link>
                            )
                        }
                    </Slider> */}












                </section>

          

                <Collection type={'new'} title="New Arrivals" />
           

                {/*Content Banner*/}

                

                         
                <section className=" pt-1 larg-slider">
                <Slider {...settings} className="slide-1 home-slider">
                    {
               
                         homebannerimages.map( (img,index) =>
                         (img.Priority === 1) ?
                        <Link to={`${img.Url}`} >
                            <div  key={index} >
        {console.log(url.base_url + img.Image)}
                                
                                <img style={{ width: '100%'}} src={url.base_url + img.Image}/>
                        
                            </div>
                        </Link>
                        : ""
                        )
                    }
                </Slider>
                </section>

                {/*Banner Section*/}
                <section className="pt-3 banner-6 ratio2_1">
                                    <div className="container">
                                    <div className="title1 title5">
                                    
                                        <h2 className="title-inner1 mob-heading" style={{letterSpacing:'5px'}}>CATEGORIES</h2>
                                        <hr role="tournament6" />
                                    </div>
                                        <div className="row ">
                                     {
                                                categories.map(m =>{
                                                 
                                                       return( 
                                                       <div className="col-md-3 cat-banner">
                                                       <Link to={`Category/${m.name}`} >
                                                            <div className=" p-left">
                                                                <div className="img-part">
                                                                    <img src={`${m.image_url}`}
                                                                        className="img-fluid"
                                                                         alt=""
                                                                      
                                                                    />
                                                                </div>
                                                                
                                                            </div>
                                                            <div className="row justify-content-md-center">
                                                                    <div>
                                                                    <h3 className="title-inner1 text-uppercase p-4 cat-banner-heading">{m.name}</h3>
                                                                    </div>
                                                            </div>
                                                        </Link>
                                                    </div>);
                                                })
                                            }
                                            
                                        
                                         
                                          
                                      
                                        
                                        </div>
                                        
                                    </div>
                    
                </section>
            {/*Banner Section End*/}
            {/*Banner Section*/}
            {/*Content Banner*/}
      




                <section className=" pt-1 larg-slider">
{/*   
                <Slider {...settings} className="slide-1 home-slider">
                    {
                         homebannerimages.map( (img,index) =>
                         
                         (img.Priority === 2) ?
                        <Link to={`${img.Url}`} >
                            <div  key={index} >
                                <img style={{ width: '100%'}} src={url.temp_url+img.getBanner}/>
                        
                            </div>
                        </Link>
                        : ""
                        )
                    }
                </Slider> */}
                </section>

          {/*Banner Section*/}
                  {/*Product Section*/}
                  <Collection type={'bestseller'} title="TOP PRODUCTS" subtitle="Special Offer"/>
                {/*Product Section End*/}
               
                <FooterFour logoName={'logo/14.png'}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    sliderimages: state.images.sliderImages,
    homebannerimages:getHomebanner(state.images.sliderBannner,state.filters.country),
    categories:state.data.menu,
    country:state.filters.country,
    

    
})
export default connect(mapStateToProps)(Coolncool);