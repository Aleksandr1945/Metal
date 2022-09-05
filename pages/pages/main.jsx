import Link from "next/link"

export const getStaticProps = async () => {

    const res = await fetch('http://localhost:3000/api/disc')
    const data = await res.json()
    // console.log(data[0].category)


    // for (let arr of data[0].category) {
    //     console.log(arr.nameCat)
    // }

    if(!data) {
        return {
          notFound: true,
        }
      }
    
      return {
        props: { gidro: data },
      }
    }

    const main = ({ gidro }) => {
        return (
            <>
                <h1>main work</h1>
                    <ul>
                        {gidro && gidro.map(({ id, nameCategory, url }) => 
                        <li key={id}>
                            <Link href={url}>{nameCategory}</Link>
                        </li>
                )}
            </ul>
            </>
        )
    }
    

    

export default main