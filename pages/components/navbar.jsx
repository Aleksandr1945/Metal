import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './../../styles/navbar.module.css'
import Image from 'next/image'



export default function Navbar() {

    const { pathname } = useRouter();

    const navigation = [
        {id: 1, title: 'Главная', path: '/'},
        {id: 2, title: 'Услуги', path: '/pages/uslugi'},
        {id: 3, title: 'Контакты', path: '/pages/kontakt'},
    ]

    return (
        <>

            <div>
                <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Image 
                        src = '/logo.png' 
                        width={420}
                        height={100}
                        layout="responsive"
                    />
                </div>
                    <div className = {styles.main}>
                        {navigation.map(({id, title, path}) => (
                            <Link key={id} href={path}>
                                <a className = {pathname === path ? styles.active : styles.link}>{title}</a>
                            </Link>
                            ))}   
                    </div>
                    <div>
                        <h5 className={styles.kont}>+7(917)597-23-62 <br/> Email info@BestPoint.ru</h5>
                    </div>
                </nav>
            </div>
        </>
    )

}