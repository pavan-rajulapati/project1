import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Toaster, toast } from 'react-hot-toast';
import '../styles/SellerRegistration.css'

const validateSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Field must be at least 2 characters')
    .required('Field Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Field Required'),
  mobileNumber: Yup.string()
    .length(10, 'Mobile number must be 10 characters')
    .required('Field Required'),
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
    .min(2, 'Field must be at least 2 characters')
    .required('Field Required'),
});

const SellerRegistration = () => {
  return (
    <div className="seller-form">
      <Toaster />
      <div className="container">
        <Formik
          initialValues={{
            name: '',
            email: '',
            mobileNumber: '',
            street: '',
            city: '',
            pincode: '',
            state: '',
            country: '',
            holderName: '',
            bankName: '',
            accountNumber: '',
            ifscCode: '',
          }}
          validationSchema={validateSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            toast.success('Form submitted successfully!');
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>

              <div>
                <label htmlFor="mobileNumber">Mobile Number</label>
                <Field type="text" name="mobileNumber" />
                <ErrorMessage name="mobileNumber" component="div" className="error-message" />
              </div>

              <div>
                <label htmlFor="street">Street</label>
                <Field type="text" name="street" />
                <ErrorMessage name="street" component="div" className="error-message" />
              </div>

              <div>
                <label htmlFor="city">City</label>
                <Field type="text" name="city" />
                <ErrorMessage name="city" component="div" className="error-message" />
              </div>

              <div>
                <label htmlFor="pincode">Pincode</label>
                <Field type="text" name="pincode" />
                <ErrorMessage name="pincode" component="div" className="error-message" />
              </div>

              <div>
                <label htmlFor="state">State</label>
                <Field type="text" name="state" />
                <ErrorMessage name="state" component="div" className="error-message" />
              </div>

              <div>
                <label htmlFor="country">Country</label>
                <Field type="text" name="country" />
                <ErrorMessage name="country" component="div" className="error-message" />
              </div>

              <div>
                <label htmlFor="holderName">Account Holder Name</label>
                <Field type="text" name="holderName" />
                <ErrorMessage name="holderName" component="div" className="error-message" />
              </div>

              <div>
                <label htmlFor="bankName">Bank Name</label>
                <Field type="text" name="bankName" />
                <ErrorMessage name="bankName" component="div" className="error-message" />
              </div>

              <div>
                <label htmlFor="accountNumber">Account Number</label>
                <Field type="text" name="accountNumber" />
                <ErrorMessage name="accountNumber" component="div" className="error-message" />
              </div>

              <div>
                <label htmlFor="ifscCode">IFSC Code</label>
                <Field type="text" name="ifscCode" />
                <ErrorMessage name="ifscCode" component="div" className="error-message" />
              </div>

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SellerRegistration;
