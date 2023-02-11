import Link from 'next/link';
import { useUserPublished } from '@/hooks';
import { ObjectCard } from './ObjectCard';
import { SuccessButton } from '@/ui/buttons';
import { LargeBold, Title } from 'ui/typography';

export const MyPost = () => {
  const res = useUserPublished();
  return (
    <section className="min-h-[50vh] px-8 pt-10 md:pt-0 pb-28 flex flex-col gap-12 center md:gap-20 md:w-[800px] lg:w-full lg:max-w-[1500px] md:grid md:col-[none] md:min-h-[50vh] ">
      <Title align="center">Mis Publicaciones</Title>

      {res?.data?.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {res?.data?.map((r: any) => (
            <ObjectCard
              description={r.description}
              email={r.email}
              fullName={r.fullName}
              id={r.id}
              imgURL={r.imgURL}
              lat={r.lat}
              lng={r.lng}
              state={r.state}
              title={r.title}
              key={r.id}
              userId={r.userId}
            />
          ))}
        </div>
      ) : (
        <div className="grid gap-3 justify-center">
          <LargeBold align="center" color={'ligth-blue'}>
            AÚN NO TIENES OBJETOS PUBLICADOS
          </LargeBold>
          <SuccessButton className="lg:w-full ">
            <Link href={'/item/post'}>Publicar Objeto</Link>
          </SuccessButton>
        </div>
      )}
    </section>
  );
};
