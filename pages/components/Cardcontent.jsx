import styles from '../../styles/cardContent.module.css'
import Image from 'next/image'
import Link from 'next/link'

function CardContent({image, title, content, link}) {
    return ( 
        <>
            <Link href={link}>
                <div className={styles.blok}>
                    <Image className = {styles.image}
                        src = {image} 
                        width={150}
                        height={150}
                        layout="intrinsic"
                    />
                    <h2 className={styles.h2}>{title}</h2>
                    <h4 className={styles.h4}>{content}</h4>
                </div>
            </Link>
        </>
     );
}

export default CardContent;