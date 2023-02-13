import { FC, useState } from 'react';
import Link from 'next/link';
import { Form, Formik } from 'formik';

import { CancelButton, SuccessButton } from '@/ui/buttons';
import { Dropzone } from './Dropzone';
import { Mapbox } from './mapbox/index';
import { InputText } from '../ui/text-field/index';
import { RootState } from '../store/store';
import { useAppSelector } from '../hooks/redux-toolkit';
import { Subtitle } from '@/ui/typography';
import ButtonModal from './ButtonModal';
import fetchApi from '../lib/axios';
import { useRouter } from 'next/router';
import { Loader } from '../ui/loaders/index';
import { Item } from '@/interfaces/Item';

const initialValues = {
  fullName: '',
  title: '',
  description: '',
};

export const EditForm: FC<Item> = (item) => {
  const { picture, location } = useAppSelector(
    (state: RootState) => state.items
  );

  const [isSending, setIsSending] = useState(false);
  const router = useRouter();

  const { description, id, fullName, title, lat, lng, imgURL, userId, email } =
    item;

  const currentItemUpdated: Partial<Item> = {
    description,
    email,
    fullName,
    title,
    lat: location.lat ? location.lat : lat,
    lng: location.lng ? location.lng : lng,
    state: 'PUB',
    userId,
  };

  const updateItem = async (values: any) => {
    setIsSending(true);
    const { data } = await fetchApi.put(`/item/update/${id}`, {
      ...currentItemUpdated,
      ...values,
      fullName: values.fullName || currentItemUpdated.fullName,
      title: values.title || currentItemUpdated.title,
      description: values.description || currentItemUpdated.description,
      imgURL: picture || item.imgURL,
    });
    setIsSending(false);

    router.push({
      pathname: '/my-post',
      query: {
        item: data.title,
        status: 'UPDATE',
      },
    });
  };

  const deleteItem = async () => {
    setIsSending(true);
    const { data } = await fetchApi.put(`/item/update/${id}`, {
      ...currentItemUpdated,
      state: 'DEL',
    });
    setIsSending(false);

    router.push({
      pathname: '/my-post',
      query: {
        item: title,
        status: 'DEL',
      },
    });
  };

  return (
    <div className="flex flex-col items-center px-3 gap-4 w-full max-w-[400px] md:max-w-[620px]">
      <Subtitle>{title}</Subtitle>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => updateItem(values)}
      >
        {({ handleChange }) => (
          <Form
            className="grid gap-2 md:gap-4 justify-items-center items-center m-0 w-full max-w-[400px] md:max-w-[600px]"
            noValidate
          >
            <div className="w-full flex flex-col gap-4 lg:flex-row">
              <div className="w-full grid  items-center gap-3">
                <InputText
                  placeholder={fullName}
                  label="Tu nombre"
                  name="fullName"
                  onChange={handleChange}
                  className="placeholder:text-black"
                  type="text"
                />
                <InputText
                  placeholder={title}
                  label="Título (Objeto que querés donar)"
                  name="title"
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
                <Mapbox edit location={{ lat, lng }} />
              </div>
              <div className=" flex flex-col w-full md:w-1/2 gap-4 justify-between">
                <Dropzone edit url={imgURL} />
              </div>
            </div>
            <CancelButton type="button">
              <Link href="/">Cancelar</Link>
            </CancelButton>
            <SuccessButton type="submit">
              {isSending ? <Loader /> : 'Actualizar'}
            </SuccessButton>
          </Form>
        )}
      </Formik>
      <ButtonModal onClick={deleteItem}>
        {isSending ? <Loader /> : 'Eliminar Publicacion'}
      </ButtonModal>
    </div>
  );
};
