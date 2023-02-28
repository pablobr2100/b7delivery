import { Banner } from '@/components/Banner';
import { ProductCard } from '@/components/ProductCard';
import { SearchInput } from '@/components/SearchInput';
import styles from '@/styles/Home.module.css';

const Home = () => {
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
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput
            mainColor='#fb9400'
            onSearch={()=>null} 
          />
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
          mainColor="#fb9400"
          secondColor='#ccc'
        />
        <ProductCard 
          data={{
            id: 2,
            image: '/tmp/burger.png',
            category: 'Tradicional',
            name: 'Texa Burger',
            price: 'R$ 25,50'
          }}
          mainColor="#fb9400"
          secondColor='#ccc'
        />
        <ProductCard 
          data={{
            id: 3,
            image: '/tmp/burger.png',
            category: 'Tradicional',
            name: 'Texa Burger',
            price: 'R$ 25,50'
          }}
          mainColor="#fb9400"
          secondColor='#ccc'
        />
      </div>
    </div>
  );
}

export default Home;