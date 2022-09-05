import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './../../styles/navbarDop.module.css'

function NavbarDop() {

    const { pathname } = useRouter();

    const navigation = [
        {id: 1, title: 'Гидрообразивная резка', path: '/pages/uslugi/gidrorezka'},
        {id: 2, title: 'Лазерная резка металла', path: '/pages/uslugi/laser'},
        {id: 3, title: 'Гибка листового металла', path: '/pages/uslugi/gibka'},
        {id: 4, title: 'Токарные работы', path: '/pages/uslugi/tokar'},
        {id: 5, title: 'Фрейзерные работы', path: '/pages/uslugi/frezer'},
        {id: 6, title: 'Вальцовка', path: '/pages/uslugi/valcovka'},
    ]

    return ( 
        <nav className={styles.nav}>
            <div className = {styles.main}>
                {navigation.map(({id, title, path}) => (
                    <Link key={id} href={path}>
                        <a className = {pathname === path ? styles.active : styles.link}>{title}</a>
                    </Link>
                ))}
            </div>
        </nav>
     );
}

export default NavbarDop;