import Header from '../../../components/Header'
import NavbarDop from '../../../components/navbarDop'
import BlokTitle from '../components/blokTitle'
import styles from '../../../../styles/gidro/pages/gidrorezka.module.css'
import Footer from '../../../components/footer'


export const getStaticProps = async () => {

    const res = await fetch('http://localhost:3000/api/data/stone')
    const data = await res.json();
    console.log(data)

    if(!data) {
        return {
          notFound: true,
        }
      }
      return {
        props: { gidro: data},
      }
    }
    

const Stone = ({ gidro }) => {
    return (
        <>
            <Header title='Гидроабразивная резка камня' />
            <div className={styles.glavBlok}>
                    <div>
                        <NavbarDop />
                    </div>

                    <div>
                        <div className={styles.title}>
                            <h1>Гидроабразивная резка камня</h1>
                        </div>
                        <ul className={styles.blokContent}>
                                {gidro && gidro.map(({id, imageCat, nameCat}) =>
                                    <li key={id} className={styles.blokContent}>
                                        <BlokTitle image={imageCat} content={nameCat} link={`/pages/gidro/pages/${id}`} />
                                    </li>
                                )}
                            
                        </ul>

                        
                    </div>
            </div>
            <Footer />
        </>
    )
}

export default Stone
