import React, {Component} from 'react';
import {connect} from 'react-redux'
import store from '../../store';
import {userLogoff} from '../../actions';
// import { Redirect } from "react-router-dom";
class Dashboard extends Component {

    constructor (props) {
        super (props)
    }

    render (){
    function handleClick(e) {
        e.preventDefault();
       store.dispatch(userLogoff([]));
       window.location.replace("/");
  
    }
        const{user} = this.props;
        return (
            <div>

                
                
                {/*Dashboard section*/}
                <section class="section-b-space">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="account-sidebar">
                                    <a class="popup-btn" onClick={handleClick}>
                                       Log out
                                    </a>
                                </div>
                                <div class="dashboard-left">
                                    <div class="collection-mobile-back">
                                    <span class="filter-back">
                                        <i class="fa fa-angle-left" aria-hidden="true"></i> back
                                    </span>
                                    </div>
                                    <div class="block-content">
                                        <ul>
                                            
                                            <li class="last"><a href="#" onClick={handleClick}>Log Out</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div class="dashboard-right">
                                    <div class="dashboard">
                                        <div class="page-title">
                                            <h2>My Dashboard</h2>
                                        </div>
                                        <div class="welcome-msg">
                                            <p>Hello, <span class="text-capitalize">{user.UserName}</span></p>
                                            <p>From your My Account Dashboard you have the ability to view a snapshot of
                                                your recent account activity and update your account information. Select
                                                a link below to view or edit information.</p>
                                        </div>
                                        <div class="box-account box-info">
                                            <div class="box-head">
                                                <h2>Account Information</h2>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="box">
                                                        <div class="box-title">
                                                            <h3>Contact Information</h3>
                                                            <a href="#">Edit</a>
                                                        </div>
                                                        <div class="box-content">
                                                            <h6><i class="fa fa-user-circle-o " aria-hidden="true"></i><span class="offset-1 p-2 text-capitalize">{user.UserName}</span></h6>
                                                            <h6><i class="fa fa-envelope-o " aria-hidden="true"></i><span class="offset-1 p-2 ">{user.Email}</span></h6>
                                                            <h6><i class="fa fa-phone " aria-hidden="true"></i><span class="offset-1 p-2 text-capitalize">{user.Contact}</span></h6>
                                                            <h6><a href="#">Change Password</a></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="box">
                                                        <div class="box-title">
                                                            <h3>Newsletters</h3>
                                                            <a href="#">Edit</a>
                                                        </div>
                                                        <div class="box-content">
                                                            <p>
                                                                You are currently not subscribed to any newsletter.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="box">
                                                    <div class="box-title">
                                                        <h3>Address Book</h3>
                                                        <a href="#">Manage Addresses</a>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <h6>Default Billing Address</h6>
                                                            <address>
                                                               {user.Address}<br/>
                                                                <a href="#">Edit Address</a>
                                                            </address>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <h6>Default Shipping Address</h6>
                                                            <address>
                                                            {user.Address2}<br />
                                                                <a href="#">Edit Address</a>
                                                            </address>
                                                        </div>
                                                    </div>
                                                </div>
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

const mapStateToProps = (state, ownProps) => ({
    
    user: state.user.user
});

export default connect(mapStateToProps)(Dashboard);