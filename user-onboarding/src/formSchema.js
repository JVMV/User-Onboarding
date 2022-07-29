import * as yup from 'yup';

const formSchema = yup.object().shape({
    firstName: yup
        .string()
        .trim()
        .min(2, 'Your first name really only has a single letter?')
        .required('Please enter a first name'),
    lastName: yup
        .string()
        .trim()
        .min(2, 'Your last name really only has a single letter?')
        .required('Please enter a last name'),
    email: yup 
        .string()
        .email('Your email please')
        .min(4, "That's not an email, enter an email...son")
        .required('Please enter a valid email'),
    password: yup
        .string()
        .min(5, 'Minimum of 5 characters please............')
        .required('please enter a password'),
    tos: yup
        .boolean()
        .oneOf([true], 'Please accept Terms and Conditions')
        

})

export default formSchema;