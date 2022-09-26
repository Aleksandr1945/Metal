import Link from 'next/link'
import styles from '../../styles/DropDawnMenu.module.css'
import { useRouter } from 'next/router'
import MarkIcons from './MarkIcons'
import Image from 'next/image'


const Menu = () => {

    const { pathname } = useRouter();

    return (
        <>
            <nav className={styles.menuWrap}>
                <ul className={styles.menu}>
                    <li><Link href='/'>
                            <a className={pathname === '/' ? styles.active : styles.link}>
                                Главная
                            </a>
                        </Link>
                    </li>
                    <li><Link href='/'>
                            <a className={pathname === '/route/Category' ? styles.active : styles.link}>
                                Услуги <Image
                            src = {'/down_rrow.svg'} 
                            width={16}
                            height={16}
                            layout="intrinsic"
                        /> 
                            </a>
                        </Link>
                        <ul>
                            <li><Link href='/route/Category'>
                                    <a className={pathname === '/route/Category' ? styles.active : styles.link}>
                                        Категория 10
                                    </a>
                                </Link>
                            </li>
                            <li><Link href='/'><a>Категория 2</a></Link>
                                <ul>
                                    <li><Link href='/'><a>Категория 1</a></Link>
                                        <ul>
                                            <li><Link href='/'><a>Категория 100</a></Link></li>
                                            <li><Link href='/'><a>Категория 1</a></Link></li>
                                            <li><Link href='/'><a>Категория 1</a></Link></li>
                                            <li><Link href='/'><a>Категория 1</a></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href='/'><a>Категория 1</a></Link></li>
                                    <li><Link href='/'><a>Категория 1</a></Link></li>
                                    <li><Link href='/'><a>Категория 1</a></Link></li>
                                </ul>
                            </li>
                            <li><Link href='/'><a>Категория 3</a></Link></li>
                            <li><Link href='/'><a>Категория 4</a></Link></li>
                        </ul>
                    </li>
                    <li><Link href='/'><a className={pathname === '/route/Stati' ? styles.active : styles.link}>Статьи</a></Link></li>
                    <li><Link href='/'><a>Контакты</a></Link></li>
                    <li><Link href='/'><a>О Нас</a></Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Menu;