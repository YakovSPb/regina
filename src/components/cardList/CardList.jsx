import styles from './cardList.module.css'
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const getData = async (page, cat) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,{
        cache: "no-store"
    } )

    if(!res.ok) {
        throw new Error('Failed')
    }
    return res.json()
}
const CardList = async ({page, cat}) => {

    const {posts, count} = await getData(page, cat)
    const POST_PER_PAGE = 3;

    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page -1) + POST_PER_PAGE < count

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Товары</h1>
            <div>
                {posts?.map(card=> <Card card={card} key={card._id}/>)}
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
        </div>
    )
}

export default CardList