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

interface InitialValues {
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

export const PostForm = () => {
  const { picture, location } = useAppSelector(
    (state: RootState) => state.items
  );

  const handlerForm = async (values: InitialValues) => {
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

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => handlerForm(values)}
        validationSchema={schema}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form className="grid gap-2 md:gap-4 justify-items-center items-center m-0 w-full max-w-[400px] md:max-w-[600px]">
            <div className="w-full flex flex-col gap-4 lg:flex-row">
              <div className="w-full grid  items-center gap-3">
                <InputText
                  placeholder="John"
                  label="Tu nombre"
                  name="fullname"
                  onChange={handleChange}
                />
                <InputText
                  placeholder="Silla de Escritorio"
                  label="Título (Objeto que querés donar)"
                  name="item"
                  onChange={handleChange}
                />
                <InputText
                  placeholder="Esta es una silla de escritotio, muy comoda. Esta revestida con cuerina y..."
                  label="Breve descripción"
                  name="description"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="w-full flex flex-col  gap-2">
              <Mapbox />
              <div className=" flex flex-col gap-4 justify-between">
                <Dropzone />
              </div>
            </div>

            <CancelButton type="button">
              <Link href="/">Cancelar</Link>
            </CancelButton>
            <SuccessButton type="submit">Publicar</SuccessButton>
          </Form>
        )}
      </Formik>
    </>
  );
};
