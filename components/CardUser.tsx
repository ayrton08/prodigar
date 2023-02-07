import { FC } from 'react';
import { BodyBold } from '../ui/typography/index';

interface IProps {
  city: string;
  address: string;
  email: string;
}

export const CardUser: FC<IProps> = ({ address, city, email }) => {
  return (
    <div className=" w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 max-w-[550px]">
      <div className="h-full w-full bg-custom-blue/70 text-white px-6 py-12 min-h-50 grid gap-5">
        <div className="flex gap-2">
          <BodyBold color="text-white/70">Ciudad:</BodyBold>
          <BodyBold>{city}</BodyBold>
        </div>
        <div className="flex gap-2">
          <BodyBold color="text-white/70">Direccion:</BodyBold>
          <BodyBold>{address}</BodyBold>
        </div>
        <div className="flex gap-2">
          <BodyBold color="text-white/70">Email:</BodyBold>
          <BodyBold>{email}</BodyBold>
        </div>
      </div>
    </div>
  );
};
