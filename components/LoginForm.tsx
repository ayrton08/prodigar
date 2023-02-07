import { useState } from "react";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { MainButton } from "ui/buttons";
import { BodyBold, SpanError, SpanSuccess } from "ui/typography";
import { InputText } from "ui/text-field";
import { RootState, setUserData } from "@/store";
import { useAppDispatch, useAppSelector } from "hooks/redux-toolkit";
import { getToken, sendCodeLogin } from "@/lib/api";
import { Loader } from "ui/loaders";

interface InitialEmailValue {
  email: string;
}
interface InitialCodeValue {
  code: string;
}
const initialEmailValue = { email: "" };
const initialCodeValue = { code: "" };
const emailSchema = yup
  .object()
  .shape({ email: yup.string().required().email() });
const codeSchema = yup.object().shape({ code: yup.number().required() });

export const LoginForm = () => {
  const [err, setErr] = useState() as any;
  const [success, setSuccess] = useState() as any;
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const { userData } = useAppSelector((state: RootState) => state.userData);
  const dispatch = useAppDispatch();

  const handleEmail = async (values: InitialEmailValue) => {
    setLoader(true);
    dispatch(setUserData({ email: values.email, fullname: "", address: "" }));

    try {
      await sendCodeLogin(values.email);
      setLoader(false);
    } catch (error) {
      return error;
    }
  };

  const handleCode = async (values: InitialCodeValue) => {
    setLoader(true);
    setErr("");

    try {
      await getToken(userData.email, values.code);
      setSuccess("Logueado con éxito");
      setTimeout(() => {
        router.push("/");
      }, 400);
    } catch (error) {
      setErr("Código inválido");
      setLoader(false);
      return error;
    }
  };

  return !userData.email ? (
    <Formik
      initialValues={initialEmailValue}
      onSubmit={async (values) => handleEmail(values)}
      validationSchema={emailSchema}
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
          <MainButton type="submit">
            {loader ? <Loader /> : "Continuar"}
          </MainButton>
        </Form>
      )}
    </Formik>
  ) : (
    <Formik
      initialValues={initialCodeValue}
      onSubmit={async (values) => handleCode(values)}
      validationSchema={codeSchema}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form className="flex flex-col gap-4">
          <BodyBold color="text-ligth-blue text-center text-[17px] md:text-xl  md:font-bold">
            Te enviamos un código a tu email
          </BodyBold>
          <InputText
            label="Code"
            id="code"
            type="password"
            md="md:text-lg"
            name="code"
            onChange={handleChange}
          />
          {success ? <SpanSuccess margin="mt-3.5">{success}</SpanSuccess> : ""}
          {err ? <SpanError>{err}</SpanError> : ""}
          <MainButton type="submit">
            {loader ? <Loader /> : "Ingresar"}
          </MainButton>
        </Form>
      )}
    </Formik>
  );
};
