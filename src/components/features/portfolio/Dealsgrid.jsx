import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Masonry from 'react-masonry-css'

import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
// import Custom Components
import * as url from '../../../constants/Endpoints'
import { getFeatureImages} from "../../../services";
import {MasonaryPhotos} from '../../../api/portfolio'


class Dealsgrid extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          photoIndex: 0,
          isOpen: false,
          images: MasonaryPhotos,
          columns: 2
        };
    }

    componentWillReceiveProps(nextProps) {
        const {columns} = nextProps.match.params
        
            let result;
            switch (columns) {
                case 'full':   
                    result = 6;
                    break;
                case '4':   
                    result = 4;
                    break;
                case '3': 
                    result = 3;
                    break;
                case '2':  
                    result = 2;
                    break;
                default:      
                    result = 2;
                    break;
            }
        this.setState({columns: result })
    }

    selectImage = (index, type) => {
        this.setState({ 
            photoIndex: index,
            isOpen: true,
            images: type === 'all'?MasonaryPhotos:getFeatureImages(MasonaryPhotos, type) 
        })
    }

    render (){
            
        const {dealBanner} = this.props;
    
        
        return (
            <div>
             
                {/* Our Project Start */}
                <Tabs class="theme-tab">
                   
                    <section class="portfolio-section portfolio-padding pt-0 port-col justify-content-around">
                        <div class={this.state.columns === 6?`container-fluid`:`container`}>
                        
                                <div class=" row justify-content-center">
                                {dealBanner.map((img, index) => 
                                        <Link to={`${img.Url}`} >
                                            <div class={`col`} key={`all-${index}`}>
                                                <div class="overlay">
                                                    <div class="border-portfolio">
                                                    
                                                        <img src={url.base_url + img.Image} class="img-fluid blur-up lazyload bg-img" />
                                                    </div>
                                                </div>
                                            </div>
                                            </Link>
                                        )}
                                </div>
                       
               
                        </div>
                    </section>
                </Tabs>
                    
    
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    dealBanner: state.data.dealBanner,   
})
export default connect(mapStateToProps)(Dealsgrid)