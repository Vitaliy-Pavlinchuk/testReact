import { Formik, Form, Field, ErrorMessage } from 'formik';

import styled from 'styled-components';
import * as yup from 'yup';

const schema = yup.object().shape({
  login: yup.string().min(6).max(32).required(),
  password: yup.string().required(),
});

const initialValues = {
  login: '',
  password: '',
};

const Input = styled(Field)`
  font-size: 20px;
  border: thick double #32a1ce;
`;

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Input type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
// const { login, password } = e.target.elements;
// console.log(login.value, password.value);
//   };
