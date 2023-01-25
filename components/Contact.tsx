import { Subtitle, Small, BodyBold } from "../ui/typography/index";
import { Formik, Form } from "formik";
import { useFetch } from "../hooks/index";
import { Loader } from "../ui/loaders/index";
import { ToastContainer } from "react-toastify";
import * as Yup from "yup";

const initialvalue: { email: string } = {
  email: "",
};

export const Contact = () => {
  const { onFetch, isSending, notify } = useFetch();

  return (
    <section className="text-gray-600 bg-[#FEF5E7]" id="news">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow  flex flex-col md:text-left items-center text-center gap-6">
          <Subtitle>¡Ingresa tu mail para saber las novedades!</Subtitle>

          {
            <Formik
              initialValues={initialvalue}
              onSubmit={async ({ email }, { setFieldValue }) => {
                const res = await onFetch(email, "/users");
                setFieldValue("email", "");
                res.created ? notify(email, true) : notify(email, false);
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string().email().required("Email is required"),
              })}
            >
              {({ handleChange, resetForm, values }) => (
                <Form className="flex w-full justify-center items-end">
                  <div className="relative mr-4 lg:w-full xl:w-1/3 w-2/4 ">
                    <Small>Email</Small>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      className="w-full mt-2 h-11 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-11 items-center text-white bg-blue-300  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    <BodyBold>{isSending ? <Loader /> : "Enviar"}</BodyBold>
                  </button>
                  <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                </Form>
              )}
            </Formik>
          }
        </div>
      </div>
    </section>
  );
};
