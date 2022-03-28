import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import {Link} from 'react-router-dom'

class DetailsTopTabs extends Component {
    render (){

        return (
            <section class="tab-product m-0" >
                <div class="row">
                    <div class="col-sm-12 col-lg-12" >
                        <Tabs class="tab-content nav-material" style={{width:"80%", marginLeft:"10%",}}>
                            <TabList class="nav nav-tabs nav-material">
                     
                                <Tab class="nav-item">
                                    <span class="nav-link" style={{border:"1px solid rgba(0,0,0,0.3)", borderRadius:8}} ><i class="icofont icofont-man-in-glasses"></i>Details</span>
                                    <div class="material-border"></div>
                                    
                                </Tab>
                              
                                {
                                    this.props.item.features ? 
                                    <Tab class="nav-item">
                                        <span class="nav-link" ><i class="icofont icofont-man-in-glasses"></i>Features</span>
                                        <div class="material-border"></div>
                                    </Tab>
                                    :
                                     ''

                                }
                     
                                <Tab class="nav-item">
                                    <span class="nav-link" >
                                        <i class="icofont icofont-contacts"></i>Write Review</span>
                                    <div class="material-border"></div>
                                </Tab>
                            </TabList>
                      
                            <TabPanel>
                                <p class="mt-4 p-0">
                                 {/* {this.props.item.description} */}
                                 <p dangerouslySetInnerHTML={{__html: this.props.item.description}} />

                                </p>
                            </TabPanel>
                            {
                                    this.props.item.features ? 
                            <TabPanel>
                                <p class="mt-4 p-0">
                                 {this.props.item.features}
                                </p>
                            </TabPanel>
                            :
                            ''
                            }
            
                            <TabPanel>
                                <form class="theme-form mt-4">
                                    <div class="form-row">
                                        <div class="col-md-12 ">
                                            <div class="media m-0">
                                                <label>Rating</label>
                                                <div class="media-body ml-3">
                                                    <div class="rating three-star">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" class="form-control" id="name" placeholder="Enter Your name" required />
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" class="form-control" id="email" placeholder="Email" required />
                                        </div>
                                        <div class="col-md-12">
                                            <label htmlFor="review">Review Title</label>
                                            <input type="text" class="form-control" id="review" placeholder="Enter your Review Subjects" required />
                                        </div>
                                        <div class="col-md-12">
                                            <label htmlFor="review">Review Title</label>
                                            <textarea class="form-control" placeholder="Wrire Your Testimonial Here" id="exampleFormControlTextarea1" rows="6"></textarea>
                                        </div>
                                        <div class="col-md-12">
                                            <button class="btn btn-solid" type="submit">Submit YOur Review</button>
                                        </div>
                                    </div>
                                </form>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </section>
        )
    }
}

export default DetailsTopTabs;