import Link from "next/link";
import { useUserPublished } from "@/hooks";
import { ObjectCard } from "./ObjectCard";
import { SuccessButton } from "@/ui/buttons";
import { LargeBold, Title } from "ui/typography";

export const MyPost = () => {
  const res = useUserPublished();
  console.log({res})
  return (
    <section className="min-h-[50vh] px-8 pt-10 md:pt-0 pb-28 flex flex-col gap-12 center md:gap-20 md:w-[700px] md:grid md:col-[none] md:min-h-[50vh] ">
      <Title align="center">Mis Publicaciones</Title>

      {res?.data?.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-10">
          {res?.data?.map((r: any) => (
            <ObjectCard
              img={r.imgURL}
              name={r.title}
              state={r.state}
              id={r.id}
              last_location_lat={r.lat}
              last_location_lng={r.lng}
              key={r.id}
              email={r.email}
            />
          ))}
        </div>
      ) : (
        <div className="grid gap-3">
          <LargeBold align="center" color={"ligth-blue"}>
            AÚN NO TIENES OBJETOS PUBLICADOS
          </LargeBold>
          <SuccessButton>
            <Link href={"/item/post"}>Publicar Objeto</Link>
          </SuccessButton>
        </div>
      )}
    </section>
  );
};
