import { useEffect } from 'react';
import { GetServerSideProps } from 'next';

import styles from '@/styles/Home.module.css';

import { Banner } from '@/components/Banner';
import { ProductCard } from '@/components/ProductCard';
import { SearchInput } from '@/components/SearchInput';

import { useAppContext } from '@/contexts/AppContext';
import { createApi } from '@/libs/createApi';
import { Tenant } from '@/types/Tenant';

const Home = (data: Props) => {
  const { tenant, setTenant } = useAppContext();

  useEffect(() => {
    setTenant(data.tenant);
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>
              Seja Bem-Vindo 👋
            </div>
            <div className={styles.headerSubtitle}>
              O que deseja pra hoje?
            </div>
          </div>
          <div className={styles.headerTopRight}>
            <div className={styles.menuButton}>
              <div className={styles.menuButtonLine} style={{backgroundColor: tenant?.mainColor}}></div>
              <div className={styles.menuButtonLine} style={{backgroundColor: tenant?.mainColor}}></div>
              <div className={styles.menuButtonLine} style={{backgroundColor: tenant?.mainColor}}></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput onSearch={()=>null} />
        </div>
      </header>

      <Banner />

      <div className={styles.grid}>
        <ProductCard 
          data={{
            id: 1,
            image: '/tmp/burger.png',
            category: 'Tradicional',
            name: 'Texa Burger',
            price: 'R$ 25,50'
          }}
        />
        <ProductCard 
          data={{
            id: 2,
            image: '/tmp/burger.png',
            category: 'Tradicional',
            name: 'Texa Burger',
            price: 'R$ 25,50'
          }}
        />
        <ProductCard 
          data={{
            id: 3,
            image: '/tmp/burger.png',
            category: 'Tradicional',
            name: 'Texa Burger',
            price: 'R$ 25,50'
          }}
        />
      </div>
    </div>
  );
}

export default Home;

type Props = {
  tenant: Tenant;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;
  const api = createApi();

  const tenant = await api.getTenant(tenantSlug as string)
  if (!tenant) {
    return { redirect: { destination: '/', permanent: false } }
  }

  return {
    props: {
      tenant
    }
  }
}