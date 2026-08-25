import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { schemaUserForm } from '../../../utils/formValidationShema';
import { updateUser } from '../../../store/slices/usersSlice';

function UserForm() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersList.users);
  const { id } = useParams();
  const currentUser = users.find((user) => user.id === Number(id));
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

    dispatch(updateUser(updatedValues));
  };


  const goBack = () => navigate(-1);

  const renderForm = ({ isValid }) => {
    return (
      <Form id='users-form'>
        <div>
          <label htmlFor='name'>Name</label>
          <Field type='text' name='name' id='name' placeholder='name' />
        </div>
        <ErrorMessage name='name'>
          {(message) => <div>{message}</div>}
        </ErrorMessage>

        <fieldset id='contact' form='users-form'>
          <legend>Contact</legend>
          <div>
            <label htmlFor='email'>Email</label>
            <Field type='email' name='email' id='email' placeholder='Email' />
            <ErrorMessage name='email'>
              {(message) => <div>{message}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor='phone'>Phone</label>
            <Field type='text' name='phone' id='phone' placeholder='Phone' />
            <ErrorMessage name='phone'>
              {(message) => <div>{message}</div>}
            </ErrorMessage>
          </div>
        </fieldset>
        <fieldset id='contact' form='users-form'>
          <legend>Address</legend>
          <div>
            <label htmlFor='city'>City</label>
            <Field
              type='text'
              name='address.city'
              id='city'
              placeholder='City'
            />
          </div>
          <div>
            <label htmlFor='state'>State</label>
            <Field
              type='text'
              name='address.state'
              id='state'
              placeholder='State'
            />
          </div>
          <div>
            <label htmlFor='address'>Address</label>
            <Field
              type='text'
              name='address.address'
              id='address'
              placeholder='Address'
            />
          </div>
        </fieldset>
        <button type='submit' disabled={!isValid}>
          Save
        </button>
        <button type='reset'>Reset</button>
        <button type='button' onClick={goBack}>
          Return
        </button>
      </Form>
    );
  };

  return (
    <Formik
      initialValues={getInitialValues()}
      onSubmit={onFormSubmit}
      validationSchema={schemaUserForm}
    >
      {renderForm}
    </Formik>
  );
}

export default UserForm;
