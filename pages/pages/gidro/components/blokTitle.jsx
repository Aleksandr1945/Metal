import styles from '../../../../styles/gidro/components/blokTitle.module.css'
import Image from 'next/image'
import Link from 'next/link'

function blokTitle({image, content, link}) {
    return ( 
        <>
            <Link href={link}>
                <div className={styles.block}>
                    <div className={styles.image}>
                        <Image className = {styles.imageGl}
                            src = {image} 
                            width={140}
                            height={110}
                            layout="intrinsic"
                        /> 
                    </div>
                    <div className={styles.content}>
                        <h3>{content}</h3>
                    </div>
                </div>
            </Link>
        </>
     );
}

export default blokTitle;