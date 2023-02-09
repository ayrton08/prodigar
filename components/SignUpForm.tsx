import { useState } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { RootState } from 'store/store';
import { setUserData } from 'store';
import { useAppDispatch, useAppSelector } from 'hooks/redux-toolkit';
import { sendCodeSignUp } from 'lib/api';
import { MainButton } from 'ui/buttons';
import { InputText } from 'ui/text-field';
import { Loader } from 'ui/loaders';

interface InitialValues {
  email: string;
  fullName: string;
  address: string;
}

const initialValues = {
  email: '',
  fullName: '',
  address: '',
};

const schema = yup.object().shape({
  email: yup.string().required().email(),
  fullname: yup.string().required(),
  address: yup.string().required(),
});

export const SignUpForm = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const { userData } = useAppSelector((state: RootState) => state.userData);
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: InitialValues) => {
    setLoader(true);
    dispatch(setUserData(values));

    const data: any = await sendCodeSignUp(
      userData.email,
      userData.fullName,
      userData.address ? userData.address : ''
    );

    if (data) {
      setLoader(false);
    }

    if (data.status >= 200 && data.status < 300) {
      router.push('/login');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => handleSubmit(values)}
      validationSchema={schema}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form className="flex flex-col gap-4">
          <InputText
            label="Email"
            id="email"
            type="email"
            md="md:text-lg"
            name="email"
            onChange={handleChange}
          />
          <InputText
            label="Full name"
            id="fullname"
            type="text"
            md="md:text-lg"
            name="fullname"
            onChange={handleChange}
          />
          <InputText
            label="Address"
            id="address"
            type="text"
            md="md:text-lg"
            name="address"
            onChange={handleChange}
          />

          <MainButton type="submit">
            {loader ? <Loader /> : 'Continuar'}
          </MainButton>
        </Form>
      )}
    </Formik>
  );
};
