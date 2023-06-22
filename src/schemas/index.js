import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name : Yup.string().min(2).max(25).required("Please enter your name."),
    email : Yup.string().email().required("Please enter your email."),
    subject : Yup.string().required("Please enter Subject."),
    message : Yup.string().required("Please enter Message.")
})