import Link from 'next/link';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

import { CancelButton, SuccessButton } from '@/ui/buttons';
import { Dropzone } from './Dropzone';
import { Mapbox } from './mapbox/index';
import { InputText } from '../ui/text-field/index';
import { RootState } from '../store/store';
import { useAppSelector } from '../hooks/redux-toolkit';
import fetchApi from '../lib/axios';
import { FC } from 'react';
import { DeleteButton } from '../ui/buttons/index';
import { Subtitle } from '@/ui/typography';

interface IEditForm {
  fullname?: string;
  item?: string;
  description?: string;
}

const initialValues = {
  fullname: '',
  item: '',
  description: '',
};

const schema = yup.object().shape({
  fullname: yup.string().required(),
  item: yup.string().required(),
  description: yup.string().required(),
});

export const EditForm: FC<IEditForm> = ({ description, fullname, item }) => {
  const { picture, location } = useAppSelector(
    (state: RootState) => state.items
  );

  const handlerForm = async (values: IEditForm) => {
    const { data } = await fetchApi.post('/users', {
      ...values,
      picture,
      location,
    });

    // todo: aqui va el fetcher que envia el form
    console.log({
      ...values,
      picture,
      location,
    });
  };

  const handlerDelete = () => {
    // todo: fetch para eliminar la publicacion
  };

  return (
    <div className="flex flex-col items-center px-3 gap-4 w-full">
      <Subtitle>{item}</Subtitle>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => handlerForm(values)}
        validationSchema={schema}
      >
        {({ handleChange }) => (
          <Form className="grid gap-2 md:gap-4 justify-items-center items-center m-0 w-full max-w-[400px] md:max-w-[600px]">
            <div className="w-full flex flex-col gap-4 lg:flex-row">
              <div className="w-full grid  items-center gap-3">
                <InputText
                  placeholder={fullname}
                  label="Tu nombre"
                  name="fullname"
                  onChange={handleChange}
                  className="placeholder:text-black"
                />
                <InputText
                  placeholder={item}
                  label="Título (Objeto que querés donar)"
                  name="item"
                  onChange={handleChange}
                  className="placeholder:text-black"
                />
                <InputText
                  placeholder={description}
                  label="Breve descripción"
                  name="description"
                  onChange={handleChange}
                  className="placeholder:text-black"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 w-full">
              <div className="w-full md:w-1/2">
                <Mapbox edit />
              </div>
              <div className=" flex flex-col w-full md:w-1/2 gap-4 justify-between">
                <Dropzone
                  edit
                  url="https://res.cloudinary.com/apx-m7-dwf/image/upload/v1660568717/journal-app/qrgev59njt7e1jhgsnaw.jpg"
                />
              </div>
            </div>
            <CancelButton type="button">
              <Link href="/">Cancelar</Link>
            </CancelButton>
            <SuccessButton type="submit">Actualizar</SuccessButton>
            <DeleteButton>Eliminar Publicación</DeleteButton>
            Copy
            <button
              data-modal-target="popup-modal"
              data-modal-toggle="popup-modal"
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Toggle modal
            </button>
            <div
              id="popup-modal"
              tabIndex={-1}
              className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
            >
              <div className="relative w-full h-full max-w-md md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="popup-modal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="p-6 text-center">
                    <svg
                      aria-hidden="true"
                      className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Are you sure you want to delete this product?
                    </h3>
                    <button
                      data-modal-hide="popup-modal"
                      type="button"
                      className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                    >
                      Yes, I&apos;m sure
                    </button>
                    <button
                      data-modal-hide="popup-modal"
                      type="button"
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                      No, cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
