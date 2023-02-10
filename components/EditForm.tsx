import Link from 'next/link';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

import { CancelButton, SuccessButton } from '@/ui/buttons';
import { Dropzone } from './Dropzone';
import { Mapbox } from './mapbox/index';
import { InputText } from '../ui/text-field/index';
import { RootState } from '../store/store';
import { useAppSelector } from '../hooks/redux-toolkit';
import { FC } from 'react';
import { Subtitle } from '@/ui/typography';
import ButtonModal from './ButtonModal';

export interface Item {
  id?: number;
  fullName: string;
  title: string;
  description: string;
  imgURL?: string;
  lat: number;
  lng: number;
  state?: string;
  email?: string;
  userId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const initialValues = {
  fullName: '',
  title: '',
  description: '',
};

const schema = yup.object().shape({
  fullname: yup.string().required(),
  item: yup.string().required(),
  description: yup.string().required(),
});

export const EditForm: FC<Item> = ({
  description,
  title,
  fullName,
  imgURL,
  lat,
  lng,
}) => {

  const { picture, location } = useAppSelector(
    (state: RootState) => state.items
  );


  const handlerForm = async (values: any) => {
    console.log(values);
  };

  const handlerDelete = () => {
    console.log('Eliminando');
    // todo: fetch para eliminar la publicacion
  };

  return (
    <div className="flex flex-col items-center px-3 gap-4 w-full">
      <Subtitle>{title}</Subtitle>
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
                  placeholder={fullName}
                  label="Tu nombre"
                  name="fullname"
                  onChange={handleChange}
                  className="placeholder:text-black"
                />
                <InputText
                  placeholder={title}
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
                <Mapbox edit location={{ lat, lng }} />
              </div>
              <div className=" flex flex-col w-full md:w-1/2 gap-4 justify-between">
                <Dropzone edit url={imgURL} />
              </div>
            </div>
            <CancelButton type="button">
              <Link href="/">Cancelar</Link>
            </CancelButton>
            <SuccessButton type="submit">Actualizar</SuccessButton>

            <ButtonModal onClick={handlerDelete}>
              Eliminar Publicacion
            </ButtonModal>
          </Form>
        )}
      </Formik>
    </div>
  );
};
