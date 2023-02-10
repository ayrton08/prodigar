import { useState } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { sendEmailContact } from "@/lib/api";
import { MainButton } from "ui/buttons";
import { InputText } from "ui/text-field";
import { X } from "ui/icons";
import { SpanSuccess, SpanError } from "@/ui/typography";
import { Loader } from "@/ui/loaders";

interface InitialValues {
  fullname: string;
  email: string;
  message: string;
  phone: number;
}

const initialValues = {
  fullname: "",
  email: "",
  message: "",
  phone: Number(""),
};

const isRequired = "Campo obligatorio";
const schema = yup.object({
  fullname: yup.string().required(isRequired),
  email: yup.string().required(isRequired).email(),
  phone: yup.number().required(isRequired),
  message: yup.string(),
});

export const PostNearMeForm = ({ setModalOn, props }: any) => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null) as any;
  const [success, setSuccess] = useState(null) as any;

  const handleSubmit = async (values: InitialValues) => {
    setLoader(true);
    setError(null);

    const contactData = {
      fullName: values.fullname,
      phoneNumber: Number(values.phone),
      email: values.email,
      message: values.message,
      itemTitle: props.name,
      itemEmail: props.email,
    };

    const createContact: any = await sendEmailContact(props.id, contactData);

    if (createContact.status >= 200 && createContact.status < 300) {
      setLoader(false);
      setSuccess("Email enviado con éxito! Se contactaran contigo.");

      setTimeout(() => {
        setModalOn(false);
      }, 2000);
    } else {
      setLoader(false);
      setError("No fue posible enviar el email.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 opacity-95 bg-gray-700 ">
      <div className="flex h-screen justify-center items-center md:w-[650px] md:mx-auto">
        <div className="flex flex-col gap-7 bg-white py-12 px-7 border-4 border-sky-500 rounded-xl w-11/12 ">
          <div
            className="grid justify-end gap-3"
            onClick={() => setModalOn(false)}
          >
            <X
              size={"w-12 h-12 "}
              color="text-ligth-blue"
              hover={"hover:bg-custom-blue"}
            />
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={async (values) => handleSubmit(values)}
            validationSchema={schema}
          >
            {({ values, handleChange, handleSubmit }) => (
              <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <InputText
                  name="fullname"
                  label="Fullname"
                  id="fullname"
                  md="md:text-lg"
                  onChange={handleChange}
                />

                <InputText
                  name="email"
                  label="Email"
                  id="email"
                  type="email"
                  md="md:text-lg"
                  onChange={handleChange}
                />

                <InputText
                  name="phone"
                  label="Phone"
                  id="phone"
                  type="number"
                  md="md:text-lg"
                  onChange={handleChange}
                />

                <InputText
                  name="message"
                  label="Message"
                  id="message"
                  type="text"
                  md="md:text-lg"
                  onChange={handleChange}
                />

                <MainButton type="submit">
                  {loader ? <Loader /> : "Continuar"}
                </MainButton>
                <SpanSuccess>{success}</SpanSuccess>
                <SpanError>{error}</SpanError>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
