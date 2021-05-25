import React from "react";
import useController from "./useController";
import validation from "./validate";
import "./style.css";

const Register = () => {
   const { onChangeHandler, submitHandler, details, errors } =
      useController(validation);

   return (
      <div className='container'>
         <div className='in-container'>
            <div className='header'>
               <h2>Registration</h2>
            </div>

            <form onSubmit={submitHandler}>
               <div className='form-container'>
                  <div className='wrapper'>
                     <div className='in-form'>
                        <div className='form-control'>
                           <label htmlFor='firstNmae'>First Name</label>
                           <input
                              className='input-field'
                              type='text'
                              placeholder='enter firstName'
                              name='firstName'
                              value={details.firstName}
                              onChange={onChangeHandler}
                           />
                           <small className='form-error'>
                              {errors.firstName ? (
                                 <p>{errors.firstName}</p>
                              ) : (
                                 <p> &nbsp;</p>
                              )}
                           </small>
                        </div>

                        <div className='form-control'>
                           <label>Last Name</label>
                           <input
                              className='input-field'
                              type='text'
                              placeholder='enter lastName'
                              name='lastName'
                              value={details.lastName}
                              onChange={onChangeHandler}
                           />
                           <small className='form-error'>
                              {errors.lastName ? (
                                 <p>{errors.lastName}</p>
                              ) : (
                                 <p> &nbsp;</p>
                              )}
                           </small>
                        </div>

                        <div className='form-control'>
                           <label>Address1</label>
                           <input
                              className='input-field'
                              type='text'
                              placeholder='enter address'
                              name='address1'
                              value={details.address1}
                              onChange={onChangeHandler}
                           />
                           <small className='form-error'>
                              {errors.address1 ? (
                                 <p>{errors.address1}</p>
                              ) : (
                                 <p> &nbsp;</p>
                              )}
                           </small>
                        </div>

                        <div className='form-control'>
                           <label>Address2</label>
                           <input
                              className='input-field'
                              type='text'
                              placeholder='enter address2'
                              name='address2'
                              value={details.address2}
                              onChange={onChangeHandler}
                           />
                           <small className='form-error'>
                              {errors.address2 ? (
                                 <p>{errors.address2}</p>
                              ) : (
                                 <p> &nbsp;</p>
                              )}
                           </small>
                        </div>
                     </div>

                     <div className='in-form'>
                        <div className='form-control'>
                           <label>City</label>
                           <input
                              className='input-field'
                              type='text'
                              placeholder='enter city'
                              name='city'
                              value={details.city}
                              onChange={onChangeHandler}
                           />
                           <small className='form-error'>
                              {errors.city ? (
                                 <p>{errors.city}</p>
                              ) : (
                                 <p> &nbsp;</p>
                              )}
                           </small>
                        </div>

                        <div className='form-control'>
                           <label>State</label>
                           <input
                              className='input-field'
                              type='text'
                              placeholder='enter state'
                              name='state'
                              value={details.state}
                              onChange={onChangeHandler}
                           />
                           <small className='form-error'>
                              {errors.state ? (
                                 <p>{errors.state}</p>
                              ) : (
                                 <p> &nbsp;</p>
                              )}
                           </small>
                        </div>

                        <div className='form-control'>
                           <label>Zip</label>
                           <input
                              className='input-field'
                              type='number'
                              placeholder='enter zip'
                              name='zip'
                              value={details.zip}
                              onChange={onChangeHandler}
                           />
                           <small className='form-error'>
                              {errors.zip ? (
                                 <p>{errors.zip}</p>
                              ) : (
                                 <p> &nbsp;</p>
                              )}
                           </small>
                        </div>

                        <div className='form-control'>
                           <label>Country</label>
                           <input
                              className='input-field'
                              type='text'
                              placeholder='US only'
                              name='country'
                              value={details.country}
                              onChange={onChangeHandler}
                           />
                           <small className='form-error'>
                              {errors.country ? (
                                 <p>{errors.country}</p>
                              ) : (
                                 <p> &nbsp;</p>
                              )}
                           </small>
                        </div>
                     </div>
                  </div>

                  <div className='form-control'>
                     <button className='form-button' type='submit'>
                        Submit
                     </button>
                  </div>
                  <div className='error_message'>
                     {Object.keys(errors).length ? (
                        <p>
                           invalid form values,check errors and re-submit the
                           form.
                        </p>
                     ) : null}
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Register;
