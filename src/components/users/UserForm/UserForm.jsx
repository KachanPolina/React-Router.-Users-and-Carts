import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { schemaUserForm } from '../../../utils/formValidationShema';
import { updateUser } from '../../../store/slices/usersSlice';
import './UserForm.css';
import { Button, TextField } from '@mui/material';
import { useGetCertainUserQuery } from '../../../store/api/usersApi';
import { EMPTY_USER_FORM } from '../../../constants';

function UserForm() {
  // const dispatch = useDispatch();
  // const users = useSelector((state) => state.usersList.users);
  const { id } = useParams();

  const { data: currentUser = {} } = useGetCertainUserQuery(id);
  // console.log(currentUser.firstName)

  // const currentUser = users.find((user) => user.id === Number(id));
  const navigate = useNavigate();

  const getInitialValues = () => {
    return {
      ...currentUser,
      name: `${currentUser.firstName} ${currentUser.lastName}`,
    };
  };

  const onFormSubmit = (values) => {
    const [firstName, lastName] = values.name.split(' ');
    const updatedValues = {
      ...values,
      firstName,
      lastName,
    };

    // dispatch(updateUser(updatedValues));
  };

  // const getInitialValues = () => {
  //   // return {
  //   //   ...currentUser,
  //   //   name: `${currentUser.firstName} ${currentUser.lastName}`,
  //   // };

  //   return {
  //     ...currentUser,
  //     name: currentUser?.firstName && currentUser?.lastName
  //         ? `${currentUser.firstName} ${currentUser.lastName}`
  //         : '',

  //     email: currentUser?.email || '',
  //     phone: currentUser?.phone || '',

  //     // Глибокий захист для вкладеного об'єкта адреси
  //     address: {
  //       city: currentUser?.address?.city || '',
  //       state: currentUser?.address?.state || '',
  //       address: currentUser?.address?.address || '',
  //     },

  //     // Передаємо id та інші системні поля, якщо вони вже завантажились
  //     id: currentUser?.id || '',
  //   };
  // };

  const goBack = () => navigate(-1);

  const renderForm = ({ isValid }) => {
    return (
      <Form id='user-form'>
        <div className='input-container'>
          <label htmlFor='name'>Name</label>
          <Field
            type='text'
            name='name'
            id='name'
            placeholder='name'
            as={TextField}
            className='input'
          />
        </div>
        <div className='error-message'>
          <ErrorMessage name='name'>
            {(message) => <div>{message}</div>}
          </ErrorMessage>
        </div>
        <fieldset id='contact' form='users-form' className='form-fieldset'>
          <legend>Contact</legend>
          <div className='input-container'>
            <label htmlFor='email'>Email</label>
            <Field
              type='email'
              name='email'
              id='email'
              placeholder='Email'
              as={TextField}
              className='input'
            />
          </div>
          <div className='error-message'>
            <ErrorMessage name='email'>
              {(message) => <div>{message}</div>}
            </ErrorMessage>
          </div>
          <div className='input-container'>
            <label htmlFor='phone'>Phone</label>
            <Field
              type='text'
              name='phone'
              id='phone'
              placeholder='Phone'
              as={TextField}
              className='input'
            />
          </div>
          <div className='error-message'>
            <ErrorMessage name='phone'>
              {(message) => <div>{message}</div>}
            </ErrorMessage>
          </div>
        </fieldset>
        <fieldset id='contact' form='users-form' className='form-fieldset'>
          <legend>Address</legend>
          <div className='input-container'>
            <label htmlFor='city'>City</label>
            <Field
              type='text'
              name='address.city'
              id='city'
              placeholder='City'
              as={TextField}
              className='input'
            />
          </div>
          <div className='input-container'>
            <label htmlFor='state'>State</label>
            <Field
              type='text'
              name='address.state'
              id='state'
              placeholder='State'
              as={TextField}
              className='input'
            />
          </div>
          <div className='input-container'>
            <label htmlFor='address'>Address</label>
            <Field
              type='text'
              name='address.address'
              id='address'
              placeholder='Address'
              as={TextField}
              className='input'
            />
          </div>
        </fieldset>
        <div className='buttons-container'>
          <Button
            type='submit'
            disabled={!isValid}
            variant='contained'
            endIcon={<SaveAltIcon />}
            color='success'
          >
            Save
          </Button>
          <Button
            type='reset'
            variant='contained'
            endIcon={<RestartAltIcon />}
            color='error'
          >
            Reset
          </Button>
          <Button
            type='button'
            onClick={goBack}
            variant='contained'
            endIcon={<KeyboardReturnIcon />}
          >
            Return
          </Button>
        </div>
      </Form>
    );
  };

  return (
    <div className='main-form-container'>
      <Formik
        initialValues={getInitialValues() || EMPTY_USER_FORM}
        onSubmit={onFormSubmit}
        validationSchema={schemaUserForm}
        enableReinitialize
      >
        {renderForm}
      </Formik>
    </div>
  );
}

export default UserForm;
