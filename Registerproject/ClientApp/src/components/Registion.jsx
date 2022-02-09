import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
export class Registion extends Component {
    validationSchema() {
        return Yup.object().shape({
            firstname: Yup.string().required('First Name is required'),
            country: Yup.string().required('Countryis required'),
            zipcode: Yup.string().required('Zip Code is required'),
            place: Yup.string().required('Place is required'),
            lastname: Yup.string().required('Last Name is required'),
            bussinesarena: Yup.string().required('Bussines Arenais required'),
            position: Yup.string().required('Position is required'),
            employees: Yup.string().required('Employees is required'),
            title: Yup.string().required('Title is required'),
            street: Yup.string().required('Street is required'),
            additionalinformation: Yup.string()
                .required('Additional Information is required')
                .min(15, 'Additional Information  must be at least 12 characters')
                .max(50, 'Additional Information  must not exceed 50 characters'),
            phonenumber: Yup.string()
                .required('Phone Number is required')
                .min(9, 'Phone Number must be at least 9 characters')
                .max(20, 'Phone Number must not exceed 20 characters'),
            code: Yup.string().required('Country Code is required'),
            email: Yup.string()
                .required('Email is required')
                .email('Email is invalid'),
            //password: Yup.string()
            //    .required('Password is required')
            //    .min(6, 'Password must be at least 6 characters')
            //    .max(40, 'Password must not exceed 40 characters'),
            //confirmPassword: Yup.string()
            //    .required('Confirm Password is required')
            //    .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
            acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
        });
    }

    render() {
        const initialValues = {
            firstname: '',
            lastname: '',
            title: '',
            position: '',
            bussinesarena: '',
            employees: '',
            street: '',
            additionalinformation: '',
            phonenumber: '',
            code: '',
            country: '',
            zipcode: '',
            place: '',
            email: '',
            //password: '',
            //confirmPassword: '',
            acceptTerms: false,
        };

        const handleSubmit = (event) => {
   
            const subdata = JSON.stringify(event)
            //for (var value of subData.values()) {
            //    console.log('value', value);
            //}
            console.log(event);
            axios.post('api/Registion/Create', event).then(response => {
                console.log(response);
                
            });
        }

        return (
            <div>
                <div className="register-form">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={this.validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ resetForm }) => (
                            <Form>

                                <div className="row">
                                    <div className="col-md-6">
                                    <div className="p-3">
                                        <div className="text-center">
                                            <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}>General Infomation</h3>
                                        </div>
                                    
                                        <div className="form-group">
                                            <label>Select Title</label>
                                            <Field as="select" className="form-control" name="title">
                                                <option value="">Select Titel</option>
                                                <option value="Red">Red</option>
                                                <option value="green">Green</option>
                                                <option value="blue">Blue</option>
                                            </Field>
                                            <ErrorMessage
                                                name="title"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>First name</label>
                                                    <Field name="firstname" type="text" className="form-control" />
                                                    <ErrorMessage
                                                        name="firstname"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Last name</label>
                                                    <Field name="lastname" type="text" className="form-control" />
                                                    <ErrorMessage
                                                        name="lastname"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <label>Select Position</label>
                                            <Field as="select" className="form-control" name="position">
                                                <option value="">Select Position</option>
                                                <option value="Red">Red</option>
                                                <option value="green">Green</option>
                                                <option value="blue">Blue</option>
                                            </Field>
                                            <ErrorMessage
                                                name="position"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Bussines Arena</label>
                                                    <Field name="bussinesarena" type="text" className="form-control" />
                                                    <ErrorMessage
                                                        name="bussinesarena"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Select Employees</label>
                                                    <Field as="select" className="form-control" name="employees">
                                                        <option value="">Select Position</option>
                                                        <option value="Red">Red</option>
                                                        <option value="green">Green</option>
                                                        <option value="blue">Blue</option>
                                                    </Field>
                                                    <ErrorMessage
                                                        name="employees"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    </div>



                                    <div className="col-md-6">
                                    <div className="bg-info p-3">
                                        <div className="text-center">
                                            <h3 className="fw-normal mb-5" style={{ color: "#fff" }}> Contact Details </h3>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="street"> Street + Nr </label>
                                            <Field name="street" type="text" className="form-control" />
                                            <ErrorMessage
                                                name="street"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>


                                        <div className="form-group">
                                            <label htmlFor="additionalinformation"> Additional Information </label>
                                            <Field name="additionalinformation" type="text" className="form-control" />
                                            <ErrorMessage
                                                name="additionalinformation"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>


                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="form-group">
                                                    <label>Zip Code</label>
                                                    <Field name="zipcode" type="text" className="form-control" />
                                                    <ErrorMessage
                                                        name="zipcode"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-7">
                                                <div className="form-group">
                                                    <label>Place</label>
                                                    <Field name="place" type="text" className="form-control" />
                                                    <ErrorMessage
                                                        name="place"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div>

                                        </div>


                                        <div className="form-group">
                                            <label htmlFor="country"> Country </label>
                                            <Field name="country" type="text" className="form-control" />
                                            <ErrorMessage
                                                name="country"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>

                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="form-group">
                                                    <label>Code+</label>
                                                    <Field name="code" type="text" className="form-control" />
                                                    <ErrorMessage
                                                        name="code"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-7">
                                                <div className="form-group">
                                                    <label>Phone Number</label>
                                                    <Field name="phonenumber" type="text" className="form-control" />
                                                    <ErrorMessage
                                                        name="phonenumber"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div>

                                        </div>


                                        <div className="form-group">
                                            <label htmlFor="email"> Email </label>
                                            <Field name="email" type="email" className="form-control" />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>

                                        <div className="form-group form-check">
                                            <Field
                                                name="acceptTerms"
                                                type="checkbox"
                                                className="form-check-input"
                                            />
                                            <label htmlFor="acceptTerms" className="form-check-label">
                                                I do accept the Terms and Conditions
                                            </label>
                                            <ErrorMessage
                                                name="acceptTerms"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-light pl-2 pr-2">
                                                Register
                                            </button>
                                            <button
                                                type="button"
                                                onClick={resetForm}
                                                className="btn btn-warning float-right"
                                            >
                                                Reset
                                            </button>
                                        </div>

                                    </div>
                                    </div>
                                </div>


                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        );
    }
}
