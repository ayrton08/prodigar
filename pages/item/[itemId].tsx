import { Layout } from '../../ui/layout/index';
import { PostForm } from '../../components/PostForm';
import { EditForm } from '../../components/EditForm';

export const ItemPage = () => {
  return (
    <Layout>
      <div className="w-full flex justify-center">
        <EditForm
          description="Hola esto es una mesa"
          fullname="Ayrton"
          item="Mesa"
        />
      </div>
    </Layout>
  );
};

export default ItemPage;
