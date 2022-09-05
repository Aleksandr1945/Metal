import Image from 'next/image'
import styles from '../../styles/collage.module.css'


function collage({image}) {

    return ( 
        <>
            <div className={styles.blok}>
                <Image className={styles.collage} 
                    src = {image} 
                    width={350}
                    height={200}
                    layout="intrinsic"
                   
                />
            </div>

        </>
     );
}

export default collage;