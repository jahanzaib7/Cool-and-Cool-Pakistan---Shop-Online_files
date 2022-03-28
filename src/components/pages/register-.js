import React, { useReducer, useState } from 'react';
import {custSignUp} from '../../actions'

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function registerForm() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    custSignUp(formData);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
    <div>
        {/* / <Breadcrumb title={'create account'}/> */}

        {/*Regsiter section*/}
        <section class="register-page section-b-space">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h3>create account</h3>
                        <div class="theme-card">
                            <form class="theme-form" onSubmit={handleSubmit}>
                                <div class="form-row">
                                <div class="col-md-6">
                                        <label htmlFor="email">Username</label>
                                        <input type="text" class="form-control" id="fname"
                                                placeholder="First Name" required="required" name="UserName" onChange={handleChange} />
                                    </div>
                                    <div class="col-md-6">
                                        <label htmlFor="email">email</label>
                                        <input type="text" class="form-control" id="email"
                                                placeholder="Email" required="required" name="Email" onChange={handleChange} />
                                    </div>
                              
                                    
                                    <div class="col-md-6">
                                        <label htmlFor="review">Password</label>
                                        <input type="password" class="form-control" id="review"
                                                placeholder="Enter your password" name ="Password" required="required" onChange={handleChange} />
                                    </div>
                                    <div class="col-md-6">
                                        <label htmlFor="review">Gender</label>
                                        <input type="text" class="form-control" id="review"
                                                placeholder="Enter your Gender" name="Gender" required="required" onChange={handleChange} />
                                    </div>
                                    <div class="col-md-6">
                                        <label htmlFor="review">Contact</label>
                                        <input type="text" class="form-control" id="review"
                                                placeholder="Enter your Contact" name="Contact" required="required" onChange={handleChange} />
                                    </div>
                                    <div class="col-md-6">
                                        <label htmlFor="review">Address</label>
                                        <input type="text" class="form-control" id="review"
                                                placeholder="Enter your text" required="required" name="Address" onChange={handleChange} />
                                    </div>
                                    <div class="col-md-6">
                                        <label htmlFor="review">City</label>
                                        <input type="text" class="form-control" id="review"
                                                placeholder="Enter your text" required="required" name="city" onChange={handleChange} />
                                    </div>
                                    <div class="col-md-6">
                                        <label htmlFor="review">Country</label>
                                        <input type="text" class="form-control" id="review"
                                                placeholder="Enter your text" required="required"   name="Country" onChange={handleChange} />
                                    </div>
                                    <button type="submit" class="btn btn-solid">create Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default registerForm;