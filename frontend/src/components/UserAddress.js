import React, { useEffect } from 'react';
import '../styles/userAddress.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast, Toaster } from 'react-hot-toast';
import {useDispatch, useSelector} from 'react-redux'
import { userAddressAction } from '../redux/actions/userAddressAction';
import Loader from './Loader';

const validateSchema = Yup.object().shape({
    street: Yup.string()
        .min(2, 'Field must be at least 2 characters')
        .required('Field Required'),

    city: Yup.string()
        .min(2, 'Field must be at least 2 characters')
        .required('Field Required'),

    pincode: Yup.string()
        .length(6, 'Pincode must be 6 characters')
        .required('Field Required'),

    state: Yup.string()
        .min(2, 'Field must be at least 2 characters')
        .required('Field Required'),

    country: Yup.string()
        .min(2, 'Field must be at least 2 characters')
        .required('Field Required'),

    holderName: Yup.string()
        .min(2, 'Field must be at least 2 characters')
        .required('Field Required'),

    bankName: Yup.string()
        .min(2, 'Field must be at least 2 characters')
        .required('Field Required'),

    accountNumber: Yup.string()
        .min(8, 'Account number must be at least 8 characters')
        .max(12, 'Account number must be less than 12 characters')
        .required('Field Required'),

    ifscCode: Yup.string()
        .min(4, 'Field must be at least 4 characters')
        .required('Field Required')
});



const UserAddress = () => {

    const dispatch = useDispatch()
    const {loading, error} = useSelector(state => state.userAddress)

    if(loading){
        <div>
            <Loader></Loader>
        </div>
    }

    useEffect(() => {
        if (error) {
          toast.error(error);
        }
    }, [error]);


    return (
        <div className="user-address">
            <Toaster />
            <div className="container">
                <div className="image-section">
                    <img src="photos/delivery.jpg" alt="form-image" />
                </div>
                <div className="form-section">
                    <Formik
                        initialValues={{
                            street: '',
                            city: '',
                            pincode: '',
                            state: '',
                            country: '',
                            holderName: '',
                            bankName: '',
                            accountNumber: '',
                            ifscCode: ''
                        }}
                        validationSchema={validateSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values);
                            toast.success('Form submitted successfully!');
                            setSubmitting(false);
                            dispatch(userAddressAction(values))
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="form-grid">
                                    <div>
                                        <label>Street</label>
                                        <Field name="street" type="text" />
                                        {errors.street && touched.street && <div className="error">{errors.street}</div>}
                                    </div>
                                    <div>
                                        <label>City</label>
                                        <Field name="city" type="text" />
                                        {errors.city && touched.city && <div className="error">{errors.city}</div>}
                                    </div>
                                    <div>
                                        <label>Pincode</label>
                                        <Field name="pincode" type="number" />
                                        {errors.pincode && touched.pincode && <div className="error">{errors.pincode}</div>}
                                    </div>
                                    <div>
                                        <label>State</label>
                                        <Field name="state" type="text" />
                                        {errors.state && touched.state && <div className="error">{errors.state}</div>}
                                    </div>
                                    <div>
                                        <label>Country</label>
                                        <Field name="country" type="text" />
                                        {errors.country && touched.country && <div className="error">{errors.country}</div>}
                                    </div>
                                    <div>
                                        <label>Account Holder Name</label>
                                        <Field name="holderName" type="text" />
                                        {errors.holderName && touched.holderName && <div className="error">{errors.holderName}</div>}
                                    </div>
                                    <div>
                                        <label>Bank Name</label>
                                        <Field name="bankName" type="text" />
                                        {errors.bankName && touched.bankName && <div className="error">{errors.bankName}</div>}
                                    </div>
                                    <div>
                                        <label>Account Number</label>
                                        <Field name="accountNumber" type="number" />
                                        {errors.accountNumber && touched.accountNumber && <div className="error">{errors.accountNumber}</div>}
                                    </div>
                                    <div>
                                        <label>IFSC Code</label>
                                        <Field name="ifscCode" type="text" />
                                        {errors.ifscCode && touched.ifscCode && <div className="error">{errors.ifscCode}</div>}
                                    </div>
                                </div>
                                <button type="submit">Submit</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default UserAddress;
