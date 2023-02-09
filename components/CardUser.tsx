import { FC, useState } from 'react';
import { BodyBold } from '../ui/typography/index';
import { InputText } from '../ui/text-field/index';
import fetchApi from '../lib/axios';
import { Form, Formik } from 'formik';
import { MainButton } from '../ui/buttons/index';
import { useAppDispatch } from 'hooks/redux-toolkit';
import { setUserData } from 'store';

interface IProps {
  address: string;
  email: string;
  edit?: boolean;
  fullName: string;
}

const initialValue: IProps = {
  fullName: '',
  email: '',
  address: '',
};

export const CardUser: FC<IProps> = ({ fullName, address, email, edit }) => {
  const dispatch = useAppDispatch();

  const currentDataUser = {
    address,
    email,
    fullName,
  };

  const updateUser = async (newDataUser: IProps) => {
    dispatch(
      setUserData({
        address: newDataUser.address
          ? newDataUser.address
          : currentDataUser.address,
        email: newDataUser.email ? newDataUser.email : currentDataUser.email,
        fullName: newDataUser.fullName
          ? newDataUser.fullName
          : currentDataUser.fullName,
      })
    );

    const data = await fetchApi.put('/user/update', {
      address: newDataUser.address
        ? newDataUser.address
        : currentDataUser.address,
      email: newDataUser.email ? newDataUser.email : currentDataUser.email,
      fullName: newDataUser.fullName
        ? newDataUser.fullName
        : currentDataUser.fullName,
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
              {isEditing && (
                <div className="flex items-center gap-4 h-12">
                  <>
                    <BodyBold color="text-white/70 w-28">Nombre:</BodyBold>
                    <InputText
                      label=""
                      className="bg-opacity-40 font-bold placeholder:text-white/80"
                      placeholder={fullName}
                      name="fullName"
                      onChange={handleChange}
                    />
                  </>
                </div>
              )}
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
