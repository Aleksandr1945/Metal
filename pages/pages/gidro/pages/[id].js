import Header from '../../../components/Header'
import NavbarDop from '../../../components/navbarDop'
import styles from '../../../../styles/gidro/components/dinamPageId.module.css'
import Image from 'next/image'


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
                            height={1000}
                            layout="intrinsic"
                        /> 
          </div>
         
          <div className={styles.title}>
              <h2>{gid.content.text}</h2>
          </div>

          <div className={styles.title}>
            <h3>{gid.content.text}</h3>
          </div>
        </div>
      </div>
  </>
)
}

export default Gidro