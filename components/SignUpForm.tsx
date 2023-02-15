import { useState } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import { RootState } from "store/store";
import { setUserData, setUserEmail } from "store";
import { useAppDispatch, useAppSelector } from "hooks/redux-toolkit";
import { sendCodeSignUp } from "lib/api";
import { MainButton } from "ui/buttons";
import { InputText } from "ui/text-field";
import { Loader } from "ui/loaders";
import { SpanError, SpanSuccess } from "ui/typography";

interface InitialValues {
  email: string;
  fullName: string;
  address: string;
}

const initialValues = {
  email: "",
  fullName: "",
  address: "",
};

const schema = yup.object().shape({
  email: yup.string().required(),
  fullName: yup.string().required(),
  address: yup.string().required(),
});

export const SignUpForm = () => {
  const router = useRouter();
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [loader, setLoader] = useState(false);
  const { userData } = useAppSelector((state: RootState) => state.userData);
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: InitialValues) => {
    setLoader(true);

    const data: any = await sendCodeSignUp(
      values.email,
      values.fullName,
      values.address ? values.address : ""
    );

    if (data) {
      setLoader(false);
    }

    if (data.error) {
      setErr(data.error.message);
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    }

    console.log(data);
    if (data.status >= 200 && data.status < 300) {
      dispatch(
        setUserData({
          email: values.email,
          fullName: values.fullName,
          address: values.address,
        })
      );
      dispatch(setUserEmail(values.email));
      setSuccess("Logueado con éxito, redirigiendo a login...");
      setTimeout(() => {
        router.push("/login");
      }, 1500);
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
            id="fullName"
            type="text"
            md="md:text-lg"
            name="fullName"
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
            {loader ? <Loader /> : "Continuar"}
          </MainButton>

          <SpanError>
            {err ? `${err + ", redirecting to login..."}` : ""}
          </SpanError>

          <SpanSuccess>{success}</SpanSuccess>
        </Form>
      )}
    </Formik>
  );
};
