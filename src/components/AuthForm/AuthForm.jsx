import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

const AuthForm = ({ initialValues, onSubmit, scheme, type, title }) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={scheme}
      >
        <Form>
          {type === 'register' && (
            <label>
              Name
              <Field type="text" name="name" placeholder="Enter your name" />
              <ErrorMessage component="div" name="name" />
            </label>
          )}
          <label>
            Email
            <Field type="email" name="email" placeholder="Enter your email" />
            <ErrorMessage component="div" name="email" />
          </label>
          <label>
            Password
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage component="div" name="password" />
          </label>
          <button type="submit">{title}</button>
          {type === 'register' ? (
            <div>
              <p>Do you have an account?</p>
              <Link to="/login">Login</Link>
            </div>
          ) : (
            <div>
              <p>You don`t have an account?</p>
              <Link to="/register">Register</Link>
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default AuthForm;
