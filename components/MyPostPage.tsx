import { Title } from "ui/typography";
import { ObjectCard } from "./ObjectCard";

export const MyPost = () => {
  return (
    <section className="min-h-[50vh] px-8 pt-10 md:pt-0 pb-28 flex flex-col gap-12 center md:gap-20 md:w-[700px] md:grid md:col-[none] md:min-h-[50vh] ">
      <Title align="center">Mis Publicaciones</Title>
      <div className="grid md:grid-cols-2 gap-10">
        <ObjectCard
          img="https://res.cloudinary.com/apx-school/image/upload/v1672695885/sillamadrid_z269xh.jpg"
          location={"Mendoza"}
          name={"Silla Madrid"}
          state={"Disponible"}
        />
        <ObjectCard
          img="https://res.cloudinary.com/apx-school/image/upload/v1672696036/lamparakelly_ki7mxd.jpg"
          location={"Mendoza"}
          name={"Silla Madrid"}
          state={"Disponible"}
        />
        <ObjectCard
          img="https://res.cloudinary.com/apx-school/image/upload/v1672696001/sillaikrone_vun1pd.jpg"
          location={"Mendoza"}
          name={"Silla Madrid"}
          state={"Disponible"}
        />
        <ObjectCard
          img="https://res.cloudinary.com/apx-school/image/upload/v1672695524/estanteria_ja3qaj.jpg"
          location={"Mendoza"}
          name={"Silla Madrid"}
          state={"Disponible"}
        />
        <ObjectCard
          img="https://res.cloudinary.com/apx-school/image/upload/v1672694213/estanteriasamari_cx9umu.jpg"
          location={"Mendoza"}
          name={"Silla Madrid"}
          state={"Disponible"}
        />
      </div>
    </section>
  );
};
