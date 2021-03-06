import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';


import './RentalForm.css';
import { startConfirmation } from '../../store/actions/orders';

const RentalForm = ({ /// destrukturyzacja props'ów
    values,
    errors,
    touched,
    isSubmitting
}) => {

    const createNumbersArr = (start, end) => {
        const numbersArr = [];
        for(let i = start; i <= end; i++) {
            numbersArr.push(i);
        }
        return numbersArr;
    }

    const today = new Date();

    const renderDateSelect = () => {

        const calculateMonthLength = (year, month) => {
            return new Date(year, month, 0).getDate();
        }

        return (
            <React.Fragment>
                { touched.startYear && errors.startYear && <div className='error-container'><p className='error-message'>{errors.startYear}</p></div> }
                <div className={ touched.startYear && errors.startYear ? 'data-container error-date' : 'data-container' }>
                    <div className='data-start'>
                        <div className='span-item'>
                            <span>Start: </span>
                        </div>
                        <div className='date-items'>
                            <Field component='select' name='startYear' className='input-select'>
                                {createNumbersArr(today.getFullYear(),today.getFullYear() + 3).map(el => {
                                    return <option key={el} value={el}>{el}</option>
                                })}
                            </Field>
                            <Field component='select' name='startMonth' className='input-select'>
                                {createNumbersArr(1,12).map(el => {
                                    return <option key={el} value={el}>{el}</option>
                                })}
                            </Field>
                            <Field component='select' name='startDay' className='input-select'>
                                {createNumbersArr(1, calculateMonthLength(values.startYear, values.startMonth)).map(el => {
                                    return <option key={el} value={el}>{el}</option>
                                })}
                            </Field>
                        </div>
                    </div>
                    <div className='data-end'>
                        <div className='span-item'>
                            <span>End: </span>
                        </div>
                        <div className='date-items'>
                            <Field component='select' name='endYear' className='input-select'>
                                {createNumbersArr(today.getFullYear(),today.getFullYear() + 3).map(el => {
                                    return <option key={el} value={el}>{el}</option>
                                })}
                            </Field>
                            <Field component='select' name='endMonth' className='input-select'>
                                {createNumbersArr(1,12).map(el => {
                                    return <option key={el} value={el}>{el}</option>
                                })}
                            </Field>
                            <Field component='select' name='endDay' className='input-select'>
                                {createNumbersArr(1, calculateMonthLength(values.endYear, values.endMonth)).map(el => {
                                    return <option key={el} value={el}>{el}</option>
                                })}
                            </Field>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };

    const renderHoursSelect  = () => {

        const calculateMonthLength = (year, month) => {
            return new Date(year, month, 0).getDate();
        }

        return (
            <React.Fragment>
            { touched.startYear && errors.startYear && <div className='error-container'><p className='error-message'>{errors.startYear}</p></div> }
                <div className={ touched.startYear && errors.startYear ? 'data-container error-date' : 'data-container' }>
                    <div className='data-start'>
                        <div className='span-item'>
                            <span>Start: </span>
                        </div>
                        <div className='date-items'>
                            <Field component='select' name='startYear' className='input-select'>
                                {createNumbersArr(today.getFullYear(),today.getFullYear() + 3).map(el => {
                                    return <option key={el} value={el}>{el}</option>
                                })}
                            </Field>
                            <Field component='select' name='startMonth' className='input-select'>
                                {createNumbersArr(1,12).map(el => {
                                    return <option key={el} value={el}>{el}</option>
                                })}
                            </Field>
                            <Field component='select' name='startDay' className='input-select'>
                                {createNumbersArr(1, calculateMonthLength(values.startYear, values.startMonth)).map(el => {
                                    return <option key={el} value={el}>{el}</option>
                                })}
                            </Field>
                            <Field component='select' name='startHour' className='input-select'>
                                {createNumbersArr(6,21).map(el => {
                                    return <option key={el} value={el}>{`${el}:00`}</option>
                                })}
                            </Field>
                        </div>
                    </div>
                    <div className='data-end'>
                        <div className='span-item'>
                            <span>End: </span>
                        </div>
                        <div className='date-items'>
                            <Field component='select' name='endHour' className='input-select'>
                                {createNumbersArr(7,22).map(el => {
                                    return <option key={el} value={el}>{`${el}:00`}</option>
                                })}
                            </Field>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    return (
        <Form className='Form'>
            <div className='Form-inputDiv'>
                { touched.name && errors.name && <p className='error-message'>{errors.name}</p> }
                <Field type='text' name='name' placeholder='Name' className={ touched.name && errors.name ? 'field-text error-text-field' : 'field-text' } />
            </div>
            <div className='Form-inputDiv'>
                { touched.surname && errors.surname && <p className='error-message'>{errors.surname}</p> }
                <Field type='text' name='surname' placeholder='Surname' className={ touched.surname && errors.surname ? 'field-text error-text-field' : 'field-text' } />
            </div>
            <div className='Form-inputDiv'>
                { touched.email && errors.email && <p className='error-message'>{errors.email}</p> }    
                <Field type='email' name='email' placeholder='Email' className={ touched.email && errors.email ? 'field-text error-text-field' : 'field-text' } />
            </div>
            <div className='Form-inputDiv'>   
                { touched.phone && errors.phone && <p className='error-message'>{errors.phone}</p> }
                <Field type='text' name='phone' placeholder='Phone' className={ touched.phone && errors.phone ? 'field-text error-text-field' : 'field-text' } />
            </div>
            <div className='select-div'>
                <p>City: </p>
                <Field component="select" name='city' className='input-select no-margin'>
                    <option value='Gdańsk'>Gdańsk</option>
                    <option value='Kraków'>Kraków</option>
                    <option value='Warszawa'>Warszawa</option>
                    <option value='Wrocław'>Wrocław</option>
                </Field>
            </div>
            <div className='select-div'>
                <p>Rental option: </p>
                <Field component="select" name='rentalOption' className='input-select no-margin'>
                    <option value='short'>Rent for hours</option>
                    <option value='long'>Rent for longer period</option>
                </Field>
            </div>
            <p className='form-p'>Please select date:</p>
            {values.rentalOption === 'short' ? renderHoursSelect() : renderDateSelect()}
            <button type='submit' disabled={isSubmitting} className='btn'>Submit</button>    
        </Form>
    );
}

const FormikForm = withFormik({
    mapPropsToValues: props => ({ //ustawia dane początkowe
        testValue: props.testValue,
        name: '',
        surname: '',
        email: '',
        phone: '',
        city: 'Gdańsk',
        rentalOption: 'short',
        startHour: Number(6),
        endHour: Number(7),
        startYear: Number(new Date().getFullYear()),
        endYear: Number(new Date().getFullYear()),
        startMonth: Number(new Date().getMonth() + 1),
        endMonth: Number(new Date().getMonth() + 1),
        startDay: Number(1),
        endDay: 1
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email is not valid').required('Email is required!'),
        name: Yup.string().min(2, 'Too short!').max(30, 'Too long!').required('Name is required!'),
        surname: Yup.string().min(2, 'Too short!').max(30, 'Too long!').required('Surname is required!'),
        phone: Yup.number().min(5, 'At least 5 digits').required('Phone is required!').integer().positive()
    }),
    handleSubmit(values, { resetForm, setErrors, setSubmitting, props }) { ///dzięki dodaniu tu 'props' mam dostep do redux store
        
        const now = new Date().getTime();

        /* name: values.name,
            surname: values.surname,
            email: values.email,
            phone: values.phone,
            city: values.city, 
            rentalOption: values.rentalOption, */

        const formData = {
            rentalOption: values.rentalOption,
            selectedModel: props.selectedModel,
            city: values.city,
            userId: props.userId,
            start: values.rentalOption === 'short' ? {startHour: Number(values.startHour), startDay: Number(values.startDay), startMonth: Number(values.startMonth), startYear: Number(values.startYear)} : {startHour: 6, startDay: Number(values.startDay), startMonth: Number(values.startMonth), startYear: Number(values.startYear)},
            end: values.rentalOption === 'short' ? {endHour: Number(values.endHour), endDay: Number(values.startDay), endMonth: Number(values.startMonth), endYear: Number(values.startYear)} : {endHour: 22, endDay: Number(values.endDay), endMonth: Number(values.endMonth), endYear: Number(values.endYear)}
        }

        if( new Date(formData.end.endYear, formData.end.endMonth - 1, formData.end.endDay, formData.end.endHour).getTime() > new Date(formData.start.startYear, formData.start.startMonth - 1, formData.start.startDay, formData.start.startHour).getTime() && new Date(formData.start.startYear, formData.start.startMonth - 1, formData.start.startDay, formData.start.startHour).getTime() >= now ){
            props.onFormSubmit(formData);
        } else {
            setErrors({startYear: 'Incorrect date'});
        }

        
       
        setSubmitting(false);
    } 
})(RentalForm);

const mapStateToProps = state => {
    return {
        testValue: state.orders.testValues,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFormSubmit: form => dispatch(startConfirmation(form)) //tak naprawdę to nie będzie submit tylko przejscie do modala
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormikForm);