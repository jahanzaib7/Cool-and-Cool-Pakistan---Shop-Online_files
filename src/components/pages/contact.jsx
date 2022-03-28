import React, {Component} from 'react';
import { connect } from 'react-redux'
import store from '../../store';
import SimpleReactValidator from 'simple-react-validator';
import {SendContact,getContactDetail} from '../../actions'
class Contact extends Component {

    constructor (props) {
        super (props)

        this.state = {
            "FirstName": '',
            "LastName":'',
            "Phone":'',
            "Email":'',
            "Message":'',
            "UserID":''
        }
        this.validator = new SimpleReactValidator();
        store.dispatch(getContactDetail());
    }

    setStateFromInput = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);

    }

    
    SubmitContact = () => {
        if (this.validator.allValid()) {
         
            var data = {

                "UserId":this.state.UserID,
                "Message":this.state.Message,
                "Name": this.state.FirstName + this.state.LastName,
                "Phone" : this.state.Phone, 
                "Email": this.state.Email    
            };
           
            store.dispatch(SendContact(data));
        }
        else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            this.forceUpdate();
        }
    }

    componentDidMount(){
        store.dispatch(getContactDetail());
    }

    render (){
        const {contactDetails,country} = this.props;


        return (
            <div>
                {/* <Breadcrumb title={'Contact Us'}/> */}
                
                
                {/*Forget Password section*/}
                <section class=" contact-page section-b-space">
                    <div class="container">
                        <div class="row section-b-space">
                            <div class="col-lg-7 map">
                                <iframe
                                    src={contactDetails[country][0].Location}
                                    allowFullScreen></iframe>
                            </div>
                            <div class="col-lg-5">
                                <div class="contact-right">
                                    <ul>
                                        <li>
                                            <div class="contact-icon">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/phone.png`} alt="Generic placeholder image" />
                                                    <h6>Contact Us</h6>
                                            </div>
                                            <div class="media-body">
                                                <p>{contactDetails[country][0].ContactNumber}</p>
                                              
                                            </div>
                                        </li>
                                        <li>
                                            <div class="contact-icon">
                                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                <h6>Address</h6>
                                            </div>
                                            <div class="media-body">
                                                <p>{contactDetails[country][0].Address}</p>
                                               
                                            </div>
                                        </li>
                                        <li>
                                            <div class="contact-icon">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/email.png`} alt="Generic placeholder image" />
                                                    <h6>Address</h6>
                                            </div>
                                            <div class="media-body">
                                            
                                                <p>{contactDetails[country][0].Email}</p>
                                        
                                            </div>
                                        </li>
                                  
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <form class="theme-form">
                                    <div class="form-row">
                                        <div class="col-md-6">
                                            <label htmlFor="name">First Name</label>
                                            <input type="text" class="form-control" id="name"
                                                   placeholder="Enter Your name" required="" name="FirstName" onChange={this.setStateFromInput} />
                                                    {this.validator.message('FirstName', this.state.FirstName, 'required|alpha')}
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="email">Last Name</label>
                                            <input type="text" class="form-control" id="last-name"
                                                   placeholder="Email" required=""  name="LastName" onChange={this.setStateFromInput} />
                                                   {this.validator.message('LastName', this.state.LastName, 'required|alpha')}
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="review">Phone number</label>
                                            <input type="text" class="form-control" id="review"
                                                   placeholder="Enter your number" required="" name="Phone"  onChange={this.setStateFromInput}/>
                                                    {this.validator.message('Phone', this.state.Phone, 'required|phone')}
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" class="form-control" id="email" name="Email"   placeholder="Email"
                                                   required="" onChange={this.setStateFromInput}/>
                                                     {this.validator.message('Email', this.state.Email, 'required|email')}
                                        </div>
                                        <div class="col-md-12">
                                            <label htmlFor="review">Write Your Message</label>
                                            <textarea class="form-control" placeholder="Write Your Message"
                                                      id="exampleFormControlTextarea1" rows="6"   name="Message"   onChange={this.setStateFromInput}></textarea>
                                             {this.validator.message('Message', this.state.Message, 'required')}
                                        </div>
                                        <div class="col-md-12">
                                            <a class="btn btn-solid" onClick={() => this.SubmitContact()}>Send Your Message</a>
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

const mapStateToProps = (state) => ({
    contactDetails: state.data.contactDetails,
    country: state.filters.country  
})

export default  connect(mapStateToProps)(Contact);