import Head from 'next/head'
import Header from './components/Header'
import Image from 'next/image'
import Footer from './components/footer'
import CardContent from './components/Cardcontent'
import Collage from './components/collag'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <div className= {styles.glav}>
        <div>
          <Header title = 'Металлообработка BestPoint'/>
        </div>
        
        <div className={styles.greeting}>
              <div className={styles.collage}>
                <div className={styles.collageblok}>
                  <div className={styles.coll}>
                    <Collage image='/images/main/rezka.jpg'/>
                  </div>
                  <div className={styles.coll}>
                    <Collage image='/images/main/rezka.jpg'/>
                  </div>
                </div>
                <div className={styles.collageblok}>
                  <div className={styles.coll}>
                    <Collage image='/images/main/rezka.jpg'/>
                  </div>
                  <div className={styles.coll}>
                    <Collage image='/images/main/rezka.jpg'/>
                  </div>
                </div>
              </div>

              
              <Image className = {styles.imageGl}
                src = '/images/main/rezka2.jpg' 
                width={3258}
                height={700}
                layout="intrinsic"
              />  
            {/* </div> */}
        </div>
      </div>
      <div className={styles.h1}>
        <h1 >
          Металообработка
        </h1>
      </div>
      <div className={styles.discrip}>
          <h2>
          Повседневная практика показывает, что постоянное информационно-техническое обеспечение нашей деятельности требует определения и уточнения форм воздействия!
Соображения высшего порядка, <br/> а также повышение уровня гражданского сознания позволяет выполнить важнейшие задания по разработке ключевых компонентов планируемого обновления.
Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание дальнейших...
          </h2>
        </div>
      <div className={styles.blokContent}>
          <CardContent image='/images/main/gidro2.svg' title='Гидрообразивная резка' content='Дорогие друзья, постоянное информационно-техническое обеспечение нашей деятельности способствует подготовке и реализации дальнейших направлений развитая системы...' link='/pages/uslugi/gidrorezka' />
          <CardContent image='/images/main/lazer.svg' title='Лазерная резка' content='Дорогие друзья, постоянное информационно-техническое обеспечение нашей деятельности способствует подготовке и реализации дальнейших направлений развитая системы...' link='/pages/uslugi/laser'/>
          <CardContent image='/images/main/gibka.svg' title='Гибка листового металла' content='Дорогие друзья, постоянное информационно-техническое обеспечение нашей деятельности способствует подготовке и реализации дальнейших направлений развитая системы...' link='/pages/uslugi/gibka'/>
      </div>
      <div className={styles.blokContent}>
        <CardContent image='/images/main/tokar.svg' title='Токарные работы' content='Дорогие друзья, постоянное информационно-техническое обеспечение нашей деятельности способствует подготовке и реализации дальнейших направлений развитая системы...' link='/pages/uslugi/tokar'/>
        <CardContent image='/images/main/frezer.svg' title='Фрейзерные работы' content='Дорогие друзья, постоянное информационно-техническое обеспечение нашей деятельности способствует подготовке и реализации дальнейших направлений развитая системы...' link='/pages/uslugi/frezer'/>
        <CardContent image='/images/main/valcovka.svg' title='Вальцовка' content='Дорогие друзья, постоянное информационно-техническое обеспечение нашей деятельности способствует подготовке и реализации дальнейших направлений развитая системы...' link='/pages/uslugi/valcovka'/>
      </div>
      <div>
        <Footer />
      </div>

    </>
  )
}
