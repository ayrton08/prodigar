import { FC, useState } from 'react';
import { BodyBold } from '../ui/typography/index';
import { InputText } from '../ui/text-field/index';
import fetchApi from '../lib/axios';
import { Form, Formik } from 'formik';
import { MainButton } from '../ui/buttons/index';

interface IProps {
  address: string;
  email: string;
  edit?: boolean;
  fullName?: string;
}

export const CardUser: FC<IProps> = ({ fullName, address, email, edit }) => {
  const initialValue = {
    email,
    address: '',
  };

  const currentDataUser = {
    address,
    email,
    fullName,
  };

  const updateUser = async (newDataUser: IProps) => {
    const data = await fetchApi.put('/user/update', {
      ...currentDataUser,
      address: newDataUser.address
        ? newDataUser.address
        : currentDataUser.address,
      email: newDataUser.email ? newDataUser.email : currentDataUser.email,
    });
  };

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className=" w-full rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 ">
      <div className="h-full w-full bg-custom-blue/70 text-white px-6 py-12 min-h-50 grid gap-5 rounded-lg">
        <Formik
          initialValues={initialValue}
          onSubmit={async (values) => await updateUser(values)}
        >
          {({ handleChange }: any) => (
            <Form>
              <div className="flex items-center gap-4 h-12">
                <BodyBold color="text-white/70 w-28">Direccion:</BodyBold>

                {isEditing ? (
                  <InputText
                    label=""
                    className="bg-opacity-40 font-bold placeholder:text-white/80"
                    placeholder={address}
                    name="address"
                    onChange={handleChange}
                  />
                ) : (
                  <BodyBold>{address}</BodyBold>
                )}
              </div>
              <div className="flex items-center gap-4 h-12">
                <BodyBold color="text-white/70 w-28">Email:</BodyBold>
                {isEditing ? (
                  <InputText
                    label=""
                    className="bg-opacity-40 font-bold placeholder:text-white/80"
                    placeholder={email}
                    name="email"
                    onChange={handleChange}
                  />
                ) : (
                  <BodyBold>{email}</BodyBold>
                )}
              </div>
              <MainButton
                onClick={() => setIsEditing(!isEditing)}
                type="submit"
                className="mt-8"
              >
                {isEditing ? 'Guardar' : 'Editar'}
              </MainButton>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
