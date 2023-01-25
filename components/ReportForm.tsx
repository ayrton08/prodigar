import Image from "next/image";
import { InputText } from "@/ui/text-field";
import { MainButton, CancelButton, SuccessButton } from "@/ui/buttons";
import { MapBox } from "./Map";

export const ReportForm = () => {
  return (
    <form className="grid gap-2 md:gap-4 justify-items-center items-center m-0 w-full max-w-[400px] md:max-w-[600px]">
      <div className="w-full flex flex-col gap-4 lg:flex-row">
        <div className="w-full grid  items-center gap-1">
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

      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2">
          <MapBox />
        </div>
        <div className="md:w-1/2 flex flex-col gap-4 justify-between">
          <Image
            className="rounded-md object-cover w-full h-full"
            src="https://res.cloudinary.com/deooec1tp/image/upload/v1674505066/Prodigar/silla_lt0vzm.jpg"
            alt="img"
            width={200}
            height={100}
          />
          <MainButton>Agregar imagen</MainButton>
        </div>
      </div>

      <CancelButton>Cancelar</CancelButton>
      <SuccessButton>Publicar</SuccessButton>
    </form>
  );
};
