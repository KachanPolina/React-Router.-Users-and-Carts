import * as Yup from 'yup';

export const schemaUserForm = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too less symbols')
    .max(20, 'Too many symbols')
    .required('Name is reqiured field'),
  email: Yup.string().email().required('Email is reqiured field'),
  phone: Yup.string()
    .matches(/^[0-9+\s\-()]*$/, 'Phone must be like +3801234567890')
    .required('Phone is reqiured field'),
});

