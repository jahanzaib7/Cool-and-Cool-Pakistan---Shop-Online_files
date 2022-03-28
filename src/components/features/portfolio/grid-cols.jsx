import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// import Custom Components
import Breadcrumb from "../../common/breadcrumb";
import { getFeatureImages} from "../../../services";
import {photos} from '../../../api/portfolio'


class GridCols extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          photoIndex: 0,
          isOpen: false,
          images: photos,
          columns:'col-sm-6'
        };
    }

    componentWillReceiveProps(nextProps) {
        const {columns} = nextProps.match.params
            let result;
            switch (columns) {
                case '4':   
                    result = "col-lg-3 col-sm-6";
                    break;
                case '3': 
                    result = "col-lg-4 col-sm-6";
                    break;
                case '2':  
                    result = "col-sm-6";
                    break;
                default:      
                    result = "col-sm-6";
                    break;
            }
        this.setState({columns: result })
    }

    selectImage = (index, type) => {
        this.setState({ 
            photoIndex: index,
            isOpen: true,
            images: type === 'all'?photos:getFeatureImages(photos, type) 
        })
    }

    render (){
            
        const { photoIndex, isOpen, images, columns } = this.state;
        return (
            <div>
                <Breadcrumb title={'PORTFOLIO'}/>

                {/* Our Project Start */}
                <section class="portfolio-section grid-portfolio ratio2_3 portfolio-padding">
                    <div class="container">
                        <Tabs class="theme-tab">
                            <TabList class="tabs tab-title">
                                <Tab>All</Tab>
                                <Tab>Fashion</Tab>
                                <Tab>Bags</Tab>
                                <Tab>Shoes</Tab>
                                <Tab>Watch</Tab>
                            </TabList>
                            <TabPanel>
                                <div class="row zoom-gallery">
                                    {photos.map((img, index) => 
                                        <div class={`isotopeSelector filter fashion ${columns}`} key={`all-${index}`}>
                                            <div class="overlay">
                                                <div class="border-portfolio">
                                                    <div class="overlay-background"  onClick={() => this.selectImage(index, 'all')}>
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </div>
                                                    <img src={img.src} class="img-fluid blur-up lazyload bg-img" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div class="row zoom-gallery">
                                    {getFeatureImages(photos, 'fashion').map((img, index) => 
                                        <div class={`isotopeSelector filter fashion ${columns}`} key={`fashion-${index}`}>
                                            <div class="overlay">
                                                <div class="border-portfolio">
                                                    <div class="overlay-background" onClick={() => this.selectImage(index, 'fashion')}>
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </div>
                                                    <img src={img.src} class="img-fluid blur-up lazyload bg-img" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div class="row zoom-gallery">
                                    {getFeatureImages(photos, 'bags').map((img, index) => 
                                        <div class={`isotopeSelector filter fashion ${columns}`} key={`bags-${index}`}>
                                            <div class="overlay">
                                                <div class="border-portfolio">
                                                    <div class="overlay-background" onClick={() => this.selectImage(index, 'bags')}>
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </div>
                                                    <img src={img.src} class="img-fluid blur-up lazyload bg-img" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div class="row zoom-gallery">
                                    {getFeatureImages(photos, 'shoes').map((img, index) => 
                                        <div class={`isotopeSelector filter fashion ${columns}`} key={`shoes-${index}`}>
                                            <div class="overlay">
                                                <div class="border-portfolio">
                                                    <div class="overlay-background" onClick={() => this.selectImage(index, 'shoes')}>
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </div>
                                                    <img src={img.src} class="img-fluid blur-up lazyload bg-img" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div class="row zoom-gallery">
                                    {getFeatureImages(photos, 'watch').map((img, index) => 
                                        <div class={`isotopeSelector filter fashion ${columns}`} key={`watch-${index}`}>
                                            <div class="overlay">
                                                <div class="border-portfolio">
                                                    <div class="overlay-background" onClick={() => this.selectImage(index, 'watch')}>
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </div>
                                                    <img src={img.src} class="img-fluid blur-up lazyload bg-img" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </section>
                
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex].src}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })
                        }
                    />
                )}
            </div>
        )
    }
}

export default GridCols