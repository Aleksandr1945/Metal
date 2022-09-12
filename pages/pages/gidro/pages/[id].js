import Header from '../../../components/Header'
import NavbarDop from '../../../components/navbarDop'
import styles from '../../../../styles/gidro/components/dinamPageId.module.css'
import Image from 'next/image'
import Footer from '../../../components/footer'
import { MarkIcons } from '../../../components/MarkIcons'


export const getServerSideProps = async (context) => {
  console.log(context)
  const { id } = context.params;
  const res = await fetch(`http://localhost:3000/api/data/stone/${id}`)
  const data = await res.json()

  console.log(data)


  if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { gid: data },
    }
    
}

const Gidro = ({ gid }) => {

  const advantages = gid.content.discripthion3
  console.log(advantages)

return (
  <>
      <Header title={gid.nameCat} />
      
      <div className={styles.glavBlock}>
        <div>
          <NavbarDop />
        </div>

        <div className={styles.content}>


          <div className={styles.title}>
              <h1>{gid.nameCat}</h1>
          </div> 

          <div>
          <Image className = {styles.imageGl}
                            src = {gid.content.image} 
                            width={3200}
                            height={1400}
                            layout="intrinsic"
                        /> 
          </div>
         
          <div className={styles.discripthion}>
              <h2>{gid.content.text}</h2>
          </div>

          {/* Технологии */}
          <div className={styles.title}>
            <h2>{gid.content.title1}</h2>
          </div>
          <div className={styles.discripthion}>
            <h3>{gid.content.discripthion}</h3>
          </div>
          {/* !!! */}

          {/* Особенности */}
          <div className={styles.title}>
            <h2>{gid.content.title2}</h2>
          </div>
          <div className={styles.discripthion}>
            <h3>{gid.content.discripthion2}</h3>
          </div>
          {/* !!! */}

          {/* Преимущества */}
          <div className={styles.title}>
            <h2>{gid.content.title3}</h2>
          </div>
          <div className={styles.discripthionPreim}>
            <ul className={styles.prem}>
              {advantages && advantages.map(({id, prem}) => 
              <li key={id} className={styles.list}><p><MarkIcons />{prem}</p></li>
              )}
            </ul>
          </div>
          {/* !!! */}
          {/* Почему стоит заказывать у нас */}
          <div className={styles.title}>
            <h2>{gid.content.title4}</h2>
          </div>
          <div className={styles.discripthion}>
            <h3>{gid.content.discripthion4}</h3>
          </div>
          {/* !!! */}
        </div>
      </div>
      <Footer />
  </>
)
}

export default Gidro;