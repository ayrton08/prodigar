import { Layout } from '../../ui/layout/index';
import { useRouter } from 'next/router';
import fetchApi from '../../lib/axios';
import { EditForm, Item } from '@/components/EditForm';
import { useState, useEffect } from 'react';

export const ItemPage = () => {
  const [item, setItem] = useState<Item>();

  const {
    query: { itemId },
  } = useRouter();

  useEffect(() => {
    if (itemId) {
      fetchApi.get<Item>(`/item/${itemId}`).then(({ data }) => {
        setItem(data);
      });
    }
  }, [itemId]);

  return (
    <Layout>
      <div className="w-full flex justify-center">
        <EditForm
          description={item?.description || ''}
          fullName="Ayrton"
          title="Mesa"
          imgURL={item?.imgURL}
          lat={item?.lat as number}
          lng={item?.lng as number}
        />
      </div>
    </Layout>
  );
};

export default ItemPage;
