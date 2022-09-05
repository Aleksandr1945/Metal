import Header from '../../../components/Header'
import NavbarDop from '../../../components/navbarDop'
import BlokTitle from '../components/blokTitle'
import styles from '../../../../styles/gidro/pages/gidrorezka.module.css'
import Footer from '../../../components/footer'

const Glass = () => {
    return (
        <>
            <Header title='Гидроабразивная резка стекла' />
            <div className={styles.glavBlok}>
                    <div>
                        <NavbarDop />
                    </div>
                    <div className={styles.BlokTitle}>
                        <div className={styles.title}>
                            <h1>Гидроабразивная стекла</h1>
                        </div>
                        <div className={styles.blokContent}>
                        <BlokTitle image='/images/main/rezka.jpg' content='Фигурная резка стекла' link='/pages/gidro/pages/stone' />
                            <BlokTitle image='/images/main/rezka.jpg' content='Гидроабразивная резка зеркала' link='/pages/gidro/pages/glass' />
                            <BlokTitle image='/images/main/rezka.jpg' content='Резка старых стекол' link='/' />
                            <BlokTitle image='/images/main/rezka.jpg' content='Резка цветных стекол' link='/' />
                            <BlokTitle image='/images/main/rezka.jpg' content='Резка круглого стекла' link='/' />
                            <BlokTitle image='/images/main/rezka.jpg' content='Резка толстого стекла' link='/' />
                            <BlokTitle image='/images/main/rezka.jpg' content='Гидроабразивная резка акрилового стекла' link='/' />
                            <BlokTitle image='/images/main/rezka.jpg' content='Гидроабразивная резка армированного стекла' link='/' />
                        </div>
                    </div>
            </div>
            <Footer />
        </>
    )
}

export default Glass