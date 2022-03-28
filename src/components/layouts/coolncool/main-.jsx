import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import * as url from '../../../constants/Endpoints'
// Import custom components
import Collection from "./collection"

import BlogSection from "../common/blogsection";
import HeaderThree from "../../common/headers/header-three"

import FooterFour from "../../common/footers/footer-four"

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import 'react-toastify/dist/ReactToastify.css';

import {getHomebanner} from '../../../services/index'
class Coolncool extends Component {

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color18.css` );
    }

    render(){
        let { sliderimages, homebannerimages,categories,country } = this.props;

        let imgslid = sliderimages[country] || [];
    
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
              <div class="ft-slick__dots--custom">
                <div class="loading" />
              </div>
            )
          };

        return (
            
            <div>
                   
               
                <Helmet>
                    <title>Coolncool</title>
                </Helmet>
                <HeaderThree logoName={'logo/14.png'} history={this.props.history}/>
                <section class=" pt-1 larg-slider">

                    <Slider {...settings} class="slide-1 home-slider">
                        {
                   
                        imgslid.map( (img,index) =>
                            <Link to={`${img.Url}`} >
                                <div  key={index} >
                                     <img style={{ width: '100%'}} src={url.base_url+img.Image}/>
                             
                                </div>
                            </Link>
                            )
                        }
                    </Slider>
                </section>

          

                <Collection type={'new'} title="New Arrivals" />
           

                {/*Content Banner*/}

                


                <section class=" pt-1 larg-slider">
  
                <Slider {...settings} class="slide-1 home-slider">
                    {
                         homebannerimages.map( (img,index) =>
                         
                         (img.Priority === 1) ?
                        <Link to={`${img.Url}`} >
                            <div  key={index} >
                                <img style={{ width: '100%'}} src={url.base_url+img.Image}/>
                        
                            </div>
                        </Link>
                        : ""
                        )
                    }
                </Slider>
                </section>

                {/*Banner Section*/}
                <section class="pt-3 banner-6 ratio2_1">
                                    <div class="container">
                                    <div class="title1 title5">
                                    
                                        <h2 class="title-inner1 mob-heading" style={{letterSpacing:'5px'}}>CATEGORIES</h2>
                                        <hr role="tournament6" />
                                    </div>
                                        <div class="row ">
                                     {
                                                categories.map(m =>{
                                                 
                                                       return( 
                                                       <div class="col-md-3 cat-banner">
                                                       <Link to={`Category/${m.name}`} >
                                                            <div class=" p-left">
                                                                <div class="img-part">
                                                                    <img src={`${url+m.image_url}`}
                                                                        class="img-fluid"
                                                                         alt=""
                                                                      
                                                                    />
                                                                </div>
                                                                
                                                            </div>
                                                            <div class="row justify-content-md-center">
                                                                    <div>
                                                                    <h3 class="title-inner1 text-uppercase p-4 cat-banner-heading">{m.name}</h3>
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
      




                <section class=" pt-1 larg-slider">
  
                <Slider {...settings} class="slide-1 home-slider">
                    {
                         homebannerimages.map( (img,index) =>
                         
                         (img.Priority === 2) ?
                        <Link to={`${img.Url}`} >
                            <div  key={index} >
                                <img style={{ width: '100%'}} src={url.base_url+img.Image}/>
                        
                            </div>
                        </Link>
                        : ""
                        )
                    }
                </Slider>
                </section>
                    
          {/*Banner Section*/}
                  {/*Product Section*/}
                  {/* <Collection type={'bestseller'} title="TOP PRODUCTS" subtitle="Special Offer"/> */}
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