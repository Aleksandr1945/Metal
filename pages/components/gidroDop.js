import Header from './Header'
import Navbar from './navbar';

const gidroDop = ({ gid }) => {
    const { nameCat, content } = gid || {};
    const { title, text } = content || {}

    if (!gid) {
        return <h3>Нет контента</h3>
    }

    return (
        <>
            {/* <Header title={ nameCat } />
            <div>
                <strong>Категория: {nameCat}</strong>
            </div>
            <div>
                <h2>{ text }</h2>
            </div> */}
            <h2>work</h2>
        </>
    )
}

export default gidroDop