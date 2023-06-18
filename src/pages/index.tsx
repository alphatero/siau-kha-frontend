import { Loading } from '@/components/common/Loading';
import { useGlobalAuth } from '@/hooks/useGlobalAuth';
import { useEffect } from 'react';

export const Home = () => {
  const { onRoute } = useGlobalAuth();

  useEffect(() => {
    onRoute();
  }, []);
  return (
    <Loading />
  );
};

export default Home;
