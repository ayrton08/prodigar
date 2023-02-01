import Image from "next/image";
import { InputText } from "@/ui/text-field";
import { MainButton, CancelButton, SuccessButton } from "@/ui/buttons";
import { MapBox } from "./Map";
import { Dropzone } from "./Dropzone";
import { Form, Formik } from "formik";

export const PostForm = () => {
  return (
    <>
      <Formik initialValues={{}} onSubmit={() => console.log("Formik")}>
        {() => (
          <Form className="grid gap-2 md:gap-4 justify-items-center items-center m-0 w-full max-w-[400px] md:max-w-[600px]">
            <div className="w-full flex flex-col gap-4 lg:flex-row">
              <div className="w-full grid  items-center gap-3">
                <InputText placeholder="John" label="Tu nombre"></InputText>
                <InputText
                  placeholder="Silla de Escritorio"
                  label="Título (Objeto que querés donar)"
                ></InputText>
                <InputText
                  placeholder="Esta es una silla de escritotio, muy comoda. Esta revestida con cuerina y..."
                  label="Breve descripción"
                ></InputText>
              </div>
            </div>

            <div className="w-full flex flex-col  gap-4">
              <MapBox />
              <div className=" flex flex-col gap-4 justify-between">
                <Dropzone />
                <MainButton>Agregar imagen</MainButton>
              </div>
            </div>

            <CancelButton>Cancelar</CancelButton>
            <SuccessButton>Publicar</SuccessButton>
          </Form>
        )}
      </Formik>
    </>
  );
};
