import { Product } from '@/types/Product';
import Link from 'next/link';
import styles from './styles.module.css';

type Props = {
    data: Product;
    mainColor: string;
    secondColor: string;
}

export const ProductCard = ({ data, mainColor, secondColor }: Props) => {
    return (
        <Link href={`/b7burger/product/${data.id}`} legacyBehavior>
            <a className={styles.container}>
                <div className={styles.head} style={{ backgroundColor: secondColor }}></div>
                <div className={styles.info}>
                    <div className={styles.img}>
                        <img src={data.image} alt="" />
                    </div>
                    <div className={styles.category}>{data.category}</div>
                    <div className={styles.name}>{data.name}</div>
                    <div className={styles.price} style={{ color: mainColor }}>{data.price}</div>
                </div>
            </a>
        </Link>
    )
}