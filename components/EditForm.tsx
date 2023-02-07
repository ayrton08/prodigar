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
          </Form>
        )}
      </Formik>
    </div>
  );
};
