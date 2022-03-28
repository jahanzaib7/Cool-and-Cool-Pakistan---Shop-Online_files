// import React, { useReducer, useState, useEffect } from 'react';
// import store from '../../store';
// import { custSignIn, userLoggedIn, socialLogin } from '../../actions'
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import SocialButton from './SocialButton'
// import "./login.css";
// import axios from 'axios';
// import FormData from "form-data"
// import { Api_Url, login_url } from '../../constants/Endpoints';
// import { toast } from 'react-toastify';

// const handleSocialLogin = (user) => {

//   var data = {
//     Email: user._profile.email,
//     Token: user._token.accessToken,
//     Channel: user._provider
//   }

//   //store.dispatch(socialLogin(data,this.props.country));
//   store.dispatch(socialLogin(data));
// }

// const handleSocialLoginFailure = (err) => {
//   console.error(err)
// }

// const formReducer = (state, event) => {
//   return {
//     ...state,
//     [event.name]: event.value
//   }
// }



// function signForm(props) {


//   const { user, history } = props;
//   useEffect(() => {
//     if (Object.keys(user).length !== 0) {

//       props.history.goBack();
//     }

//   }, [props.user]);
//   const [formData, setFormData] = useReducer(formReducer, {});
//   const [submitting, setSubmitting] = useState(false);

//   // const handleSubmit = async event => {
//   //   event.preventDefault();

//   //   store.dispatch(custSignIn(formData));


//   // }

// const [emailLogin, setEmailLogin] = useState("");
// const [passwordLogin, setPasswordLogin] = useState("")


// const LoginWeb = () =>{
// console.log("email ==> " , emailLogin);
// console.log("password ==> " , passwordLogin);


// var data = new FormData();
// data.append('email', emailLogin);
// data.append('password', passwordLogin);

// var config = {
//   method: 'post',
//   url: Api_Url + login_url,
//   headers: { 
//     'Content-Type': 'application/json',
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   // console.log(JSON.stringify(response.data));
//   setFormData(JSON.stringify(response.data))
//   store.dispatch(custSignIn(formData));
//   toast.success("User Logged in Successfully!", {
//     bodyClassName:'toastStyle',
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: false,
//     draggable: false,
//     progress: undefined,
//     });
// })
// .catch(function (error) {
//   console.log(error);
//   toast.error("Invalid Email or Password!", {
//     bodyClassName:'toastStyle',
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: false,
//     draggable: false,
//     progress: undefined,
//     });

// });




// setEmailLogin("")
// setPasswordLogin("")
// }




// // var axios = require('axios');
// // var FormData = require('form-data');














//   // const handleChange = event => {
//   //   setFormData({
//   //     name: "Token",
//   //     value: '',
//   //   });
//   //   setFormData({
//   //     name: event.target.name,
//   //     value: event.target.value,
//   //   });
//   // }

//   return (
//     <div>
//       {/* <Breadcrumb title={'Login'}/> */}


//       {/*Login section*/}


//       <div class="container" >
//         <div class="forms-container">
//           <div class="signin-signup">
//             <form class="sign-in-form" >
//               <h2 class="title" style={{ marginTop: '130px', fontWeight: 600 }}>Sign in</h2>
//               <p>New Here?

//                        <Link to={`${process.env.PUBLIC_URL}/register`}> Create an Account</Link>
//               </p>
//               <div class="input-field">
//                 <i class="fas fa-user"></i>

//                 <input type="text" class="form-control" id="email" placeholder="Email" name="Email"
//                   required="required" value={emailLogin} onChange={(e)=>setEmailLogin(e.target.value)} />
//               </div>
//               <div class="input-field">
//                 <i class="fas fa-lock"></i>
//                 <input type="password" class="form-control" id="review"
//                   placeholder="Enter your password" required="required" value={passwordLogin} name="Password" onChange={(e)=>setPasswordLogin(e.target.value)} />
//               </div>

//               {/* <input type="submit" value="Login" class="btn solid" /> */}
//               <button onClick={()=>LoginWeb()} class="btnasa btn-solid px-5 my-4" style={{ borderRadius: 8 }} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
//               <p class="social-text">Or Sign in with social platforms</p>


//               {/* 


//             <div class="social-media">
//               <SocialButton class="social-icon"
//               provider='google'
//                                   appId='469935774698-2omrtppqmp59pd1jfk54i0gmuiuujolg.apps.googleusercontent.com'
//                                   onLoginSuccess={handleSocialLogin}
//                                   onLoginFailure={handleSocialLoginFailure}
//                                   key={'google'}>
//                 <i class="fab fa-google">&nbsp; Google</i>
//               </SocialButton>

//               <SocialButton class="social-icon"
//               provider='facebook'
//               appId='548484736126739'//'199279227837108' 
//               onLoginSuccess={handleSocialLogin}
//               onLoginFailure={handleSocialLoginFailure}
//               key={"facebook"}
//               >

//                 <i class="fab fa-facebook-f">&nbsp; Facebook</i>
//               </SocialButton>

//             </div> */}

//               <div class="row p-md-4">
//                 <SocialButton
//                   provider='facebook'
//                   appId='548484736126739'//'199279227837108'
//                   onLoginSuccess={handleSocialLogin}
//                   onLoginFailure={handleSocialLoginFailure}
//                 >
//                   Facebook
//                 </SocialButton>
//                 <SocialButton
//                   provider='google'
//                   appId='469935774698-2omrtppqmp59pd1jfk54i0gmuiuujolg.apps.googleusercontent.com'
//                   onLoginSuccess={handleSocialLogin}
//                   onLoginFailure={handleSocialLoginFailure}
//                   key={'google'}
//                 >
//                   <i class="fab-fa google"> &nbsp; Google</i>
//                 </SocialButton>
//               </div>

//             </form>

//           </div>
//         </div>

//       </div>





//       {/* <section class="login-page section-b-space">
//         <div class="container">
//             <div class="row">
//                 <div class="col-lg-6">
//                     <h3>Login</h3>
//                     <div class="theme-card">
//                         <form class="theme-form" onSubmit={handleSubmit}>
//                             <div class="form-group">
//                                 <label htmlFor="email">Email</label>
//                                 <input type="text" class="form-control" id="email" placeholder="Email" name="Email"
//                                        required="required"  onChange={handleChange} />
//                             </div>
//                             <div class="form-group">
//                               <label htmlFor="review">Password</label>
//                                 <input type="password" class="form-control" id="review"
//                                        placeholder="Enter your password" required="required"  name="Password"  onChange={handleChange}  />
//                             </div>
//                             <div class="form-group d-flex justify-content-center ">
//                             <button type="submit" class="btn btn-solid px-5">Login</button>
//                             </div>
//                         </form>
//                         <div class="row p-md-4">
//                                 <SocialButton
//                                 provider='facebook'
//                                 appId='548484736126739'//'199279227837108' 
//                                 onLoginSuccess={handleSocialLogin}
//                                 onLoginFailure={handleSocialLoginFailure}
//                                 >
//                                  Facebook
//                                 </SocialButton>
//                                 <SocialButton
//                                     provider='google'
//                                     appId='469935774698-2omrtppqmp59pd1jfk54i0gmuiuujolg.apps.googleusercontent.com'
//                                     onLoginSuccess={handleSocialLogin}
//                                     onLoginFailure={handleSocialLoginFailure}
//                                     key={'google'}

//                                     >
//                                      Google
//                                 </SocialButton>
//                             </div>
//                     </div>
//                 </div>
//                 <div class="col-lg-6 right-login">
//                     <h3>New Customer</h3>
//                     <div class="theme-card authentication-right">
//                         <h6 class="title-font">Create A Account</h6>
//                         <p>Sign up for a free account at our store. Registration is quick and easy. It
//                             allows you to be able to order from our shop. To start shopping click
//                             register.</p>
//                             <Link to={`${process.env.PUBLIC_URL}/register`} class="btn btn-solid">Create an Account</Link>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section> */}

//     </div>

//   )
// }
// const mapStateToProps = (state) => ({
//   user: state.user.user,
//   country: state.filters.country


// })
// export default connect(mapStateToProps)(signForm) ;












import React, { useReducer, useState, useEffect } from 'react';
import store from '../../store';
import { custSignIn, userLoggedIn, socialLogin } from '../../actions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SocialButton from './SocialButton'
const handleSocialLogin = (user) => {
  var data = {
    Email: user._profile.email,
    Token: user._token.accessToken,
    Channel: user._provider
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
  const { user, history } = props;
  useEffect(() => {
    if (Object.keys(user).length !== 0) {
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
      name: "Token",
      value: '',
    });
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }
  return (
    <div>
      {/* <Breadcrumb title={'Login'}/> */}
      {/*Login section*/}





      <section className="login-page section-b-space">
        <center>
          <div className="container">

            <div className="col-lg-4">
              <h3>Login</h3>
              <p>New Here?

                <Link to={`${process.env.PUBLIC_URL}/register`}> Create an Account</Link>
              </p>
              <div className="theme-card">
                <form className="theme-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email" style={{marginRight:"90%"}}>Email</label>
                    <input type="text" className="form-control" id="email" placeholder="Email" name="email"
                      required="required" onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="review"  style={{marginRight:"90%"}}>Password</label>

                    <input type="password" className="form-control" id="review"
                      placeholder="Enter your password" required="required" name="password" onChange={handleChange} />
                  </div>
                  <div className="form-group d-flex justify-content-center ">
                    <button type="submit" className="btn btn-solid px-5" style={{ borderRadius: 5 }}>Login</button>
                  </div>
                </form>

                <div className="row p-md-6">
                  <p class="social-text" style={{fontSize:15, fontWeight:600}}>Or Sign in with social platforms</p>
                  <SocialButton
                    provider='facebook'
                    appId='548484736126739'//'199279227837108'
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                    style={{ borderRadius: 5 }}
                  >
                    Facebook
                  </SocialButton>
                  <SocialButton
                    provider='google'
                    appId='469935774698-2omrtppqmp59pd1jfk54i0gmuiuujolg.apps.googleusercontent.com'
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                    key={'google'}
                    style={{ borderRadius: 5 }}
                  >
                    Google
                  </SocialButton>
                </div>
              </div>
            </div>

          </div>

        </center>
      </section>


    </div>
  )
}
const mapStateToProps = (state) => ({
  user: state.user.user,
  country: state.filters.country
})
export default connect(mapStateToProps)(signForm);









