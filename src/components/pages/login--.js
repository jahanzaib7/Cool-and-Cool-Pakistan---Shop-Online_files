import React, { useReducer, useState,useEffect } from 'react';
import store from '../../store';
import {custSignIn,userLoggedIn,socialLogin} from '../../actions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import SocialButton from './SocialButton'


const handleSocialLogin = (user) => {

    var data = {
      Email:user._profile.email,
      Token: user._token.accessToken,
      Channel:user._provider
    }

    //store.dispatch(socialLogin(data,this.props.country));
    store.dispatch(socialLogin(data));
  }
  
  const handleSocialLoginFailure = (err) => {
    console.error(err)
  }

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}



function signForm(props) {


const {user, history} = props;
  useEffect(() => {
   if(Object.keys(user).length !== 0){
   
    props.history.goBack();
   }
    
  }, [props.user]);
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
  
    store.dispatch(custSignIn(formData));


  }

 

  const handleChange = event => {
    setFormData({
        name:"Token",
        value: '',
    });
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
    <div>
    {/* <Breadcrumb title={'Login'}/> */}
    
    
    {/*Login section*/}
    <section class="login-page section-b-space">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h3>Login</h3>
                    <div class="theme-card">
                        <form class="theme-form" onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" class="form-control" id="email" placeholder="Email" name="Email"
                                       required="required"  onChange={handleChange} />
                            </div>
                            <div class="form-group">
                              <label htmlFor="review">Password</label>
                                <input type="password" class="form-control" id="review"
                                       placeholder="Enter your password" required="required"  name="Password"  onChange={handleChange}  />
                            </div>
                            <div class="form-group d-flex justify-content-center ">
                            <button type="submit" class="btn btn-solid px-5">Login</button>
                            </div>
                        </form>
                        <div class="row p-md-4">
                                <SocialButton
                                provider='facebook'
                                appId='199279227837108'
                                onLoginSuccess={handleSocialLogin}
                                onLoginFailure={handleSocialLoginFailure}
                                >
                                 Facebook
                                </SocialButton>
                                <SocialButton
                                    provider='google'
                                    appId='469935774698-2omrtppqmp59pd1jfk54i0gmuiuujolg.apps.googleusercontent.com'
                                    onLoginSuccess={handleSocialLogin}
                                    onLoginFailure={handleSocialLoginFailure}
                                    key={'google'}
                                
                                    >
                                     Google
                                </SocialButton>
                            </div>
                    </div>
                </div>
                <div class="col-lg-6 right-login">
                    <h3>New Customer</h3>
                    <div class="theme-card authentication-right">
                        <h6 class="title-font">Create A Account</h6>
                        <p>Sign up for a free account at our store. Registration is quick and easy. It
                            allows you to be able to order from our shop. To start shopping click
                            register.</p>
                            <Link to={`${process.env.PUBLIC_URL}/register`} class="btn btn-solid">Create an Account</Link>
                
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>
        
  )
}
const mapStateToProps = (state) => ({
  user: state.user.user,
  country: state.filters.country

  
})
export default connect(mapStateToProps)(signForm);