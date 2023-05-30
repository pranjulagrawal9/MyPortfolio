import * as Yup from 'yup';

export const formValidationSchema= Yup.object().shape({
    user_name: Yup.string().required("Please enter your name").min(2, "Name should be atleast 2 characters long"),
    user_email: Yup.string().email("Please enter a valid email").required("Please enter your email"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Please enter your message")
});