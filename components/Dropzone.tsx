import React, { forwardRef, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { MainButton } from '../ui/buttons/index';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../hooks/redux-toolkit';
import { setPicture } from '@/store';
import { RootState } from '../store/store';

interface IDropzone {
  edit?: boolean;
  url?: string;
}

export const Dropzone = ({ edit, url }: IDropzone) => {
  const { picture } = useAppSelector((state: RootState) => state.items);

  const dispatch = useAppDispatch();

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      acceptedFiles.forEach((file: any) => {
        const reader = new FileReader();
        reader.onload = () => {
          dispatch(setPicture(`${reader.result}`));
        };
        reader.readAsDataURL(file);
      });
    },
    [dispatch]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const { ref, ...rootProps } = getRootProps();

  return (
    <div className="grid gap-3">
      <div
        className="flex items-center justify-center w-full "
        {...getRootProps()}
      >
        <label
          htmlFor="dropzone-file"
          className={`${
            picture && 'hidden'
          } flex flex-col items-center justify-center w-full ${
            edit ? 'hidden' : 'h-64'
          } border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>

          <input {...getInputProps()} className="hidden" />
        </label>
      </div>
      {picture && (
        <Image
          src={picture}
          width={500}
          height={300}
          key={'hola'}
          alt="dropzone"
          className="w-full h-60 object-contain  shadow-2xl border-gray-300 rounded-lg py-4"
        />
      )}

      {edit && !picture && (
        <Image
          src={
            url ||
            'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns='
          }
          width={500}
          height={300}
          key={'hola'}
          alt="dropzone"
          className="w-full h-52 object-contain  shadow-2xl border-gray-300 rounded-lg py-4"
        />
      )}

      {edit ? (
        <MainButton {...rootProps} type="button">
          Cambiar imagen
        </MainButton>
      ) : (
        <MainButton {...rootProps} type="button">
          {picture ? 'Cambiar imagen' : 'Agregar imagen'}
        </MainButton>
      )}
    </div>
  );
};
