import Header from '../../components/Header'
import NavbarDop from '../../components/navbarDop';
import Footer from '../../components/footer'
import styles from '../../../styles/gidro/pages/gidrorezka.module.css'
import BlokTitle from '../gidro/components/blokTitle'

export const getStaticProps = async () => {

    const res = await fetch('http://localhost:3000/api/disc')
    const data = await res.json()
    console.log(data)

    if(!data) {
        return {
          notFound: true,
        }
      }
    
      return {
        props: { gidro: data },
      }
    }

const gidrorezka =({ gidro }) => {
    return ( 
        <>
            <Header title='Гидрообразивная резка' />
            <div className={styles.glavBlok}>
                <div>
                    <NavbarDop />
                </div>
                <div className={styles.BlokTitle}>
                    <div className={styles.title}>
                        <h1>Гидроабразивная резка</h1>
                    </div>
                        <ul className={styles.blokContent}>
                            {gidro && gidro.map(({id, nameCategory, image, url}) =>
                                <li key={id} className={styles.blokContent}>
                                    <BlokTitle image={image} content={nameCategory} link={url} />
                                </li>
                            )}
                            
                    </ul>
                </div>
            </div>
            
            <Footer />
        </>
     );
}

export default gidrorezka;