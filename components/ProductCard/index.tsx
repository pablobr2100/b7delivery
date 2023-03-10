import { useAppContext } from '@/contexts/AppContext';
import { Product } from '@/types/Product';
import Link from 'next/link';
import styles from './styles.module.css';

type Props = {
    data: Product;
}

export const ProductCard = ({ data }: Props) => {
    const { tenant } = useAppContext();

    return (
        <Link href={`/${tenant?.slug}/product/${data.id}`} legacyBehavior>
            <a className={styles.container}>
                <div className={styles.head} style={{ backgroundColor: tenant?.secondColor }}></div>
                <div className={styles.info}>
                    <div className={styles.img}>
                        <img src={data.image} alt="" />
                    </div>
                    <div className={styles.category}>{data.category}</div>
                    <div className={styles.name}>{data.name}</div>
                    <div className={styles.price} style={{ color: tenant?.mainColor }}>{data.price}</div>
                </div>
            </a>
        </Link>
    )
}