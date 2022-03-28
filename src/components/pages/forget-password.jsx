import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";

class ForgetPassword extends Component {

    constructor (props) {
        super (props)
    }

    render (){


        return (
            <div>
                <Breadcrumb title={'forget password'}/>
                
                
                {/*Forget Password section*/}
                <section class="pwd-page section-b-space">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 offset-lg-3">
                                <h2>Forget Your Password</h2>
                                <form class="theme-form">
                                    <div class="form-row">
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="email"
                                                   placeholder="Enter Your Email" required="" />
                                        </div>
                                        <a href="#" class="btn btn-solid">Submit</a>
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

export default ForgetPassword