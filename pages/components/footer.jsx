import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './../../styles/footer.module.css'

function Footer() {

    const { pathname } = useRouter();

    const navigation = [
        {id: 1, title: 'Главная', path: '/'},
        {id: 2, title: 'Услуги', path: '/pages/uslugi'},
        {id: 3, title: 'Контакты', path: '/pages/kontakt'},
    ]

    return ( 
        <>
        <div className={styles.navbar}>
            <nav className={styles.nav}>
                <div className = {styles.main}>
                    {navigation.map(({id, title, path}) => (
                        <Link key={id} href={path}>
                            <a className = {pathname === path ? styles.active : styles.link}>{title}</a>
                        </Link>
                    ))}
                </div>
            </nav>
        
            <div className={styles.kontBlok}>
                <div className={styles.kont}>
                    <h4>Контакты</h4>
                    <h4>Телефон: +7(917)597-23-62 <br /> Email: info@bestPoint.ru <br/> Адрес: Москва посёлок Щапово 25</h4>
                </div>
                {/* ошибка */}
                {/* <div className={styles.map}>
                <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0995ec12c057fea7ee34e085247cff414ec69e682cfb70f26e3b77e90d4c2c9d&amp;width=613&amp;height=240&amp;lang=ru_RU&amp;scroll=true"></script>
                </div> */}
            </div>
        </div>
    </>
     );
}

export default Footer;