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
import { useMe } from '../hooks/index';
import { useState } from 'react';
import { Loader } from '@/ui/loaders';
import { useRouter } from 'next/router';
import { Item } from '@/interfaces/Item';

interface InitialValues {
  fullName?: string;
  title?: string;
  description?: string;
}

const initialValues: InitialValues = {
  fullName: '',
  title: '',
  description: '',
};

const schema = yup.object().shape({
  fullName: yup.string().required(),
  title: yup.string().required(),
  description: yup.string().required(),
});

export const PostForm = () => {
  const {
    picture,
    location: { lat, lng },
  } = useAppSelector((state: RootState) => state.items);

  const { email, id } = useMe();
  const router = useRouter();

  const [isSending, setIsSending] = useState(false);

  const handlerForm = async (values: InitialValues) => {
    setIsSending(true);
    const { status } = await fetchApi.post<Item>('/item/new', {
      ...values,
      imgURL: picture,
      lat,
      lng,
      state: 'PUB',
      email,
      userId: id,
    });
    setIsSending(false);

    if (status === 200) {
      router.push({
        pathname: '/my-post',
        query: {
          item: values.title,
          status: 'PUB',
        },
      });
    }
  };

  return (
    <>
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
                  placeholder="John"
                  label="Tu nombre"
                  name="fullName"
                  onChange={handleChange}
                />
                <InputText
                  placeholder="Silla de Escritorio"
                  label="Título (Objeto que querés donar)"
                  name="title"
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
            <SuccessButton type="submit">
              {isSending ? <Loader /> : 'Publicar'}
            </SuccessButton>
          </Form>
        )}
      </Formik>
    </>
  );
};
