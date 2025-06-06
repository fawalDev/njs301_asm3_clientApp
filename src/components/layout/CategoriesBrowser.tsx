import { Link } from "react-router-dom";
import Container from "../UI/Container";
import SectionTitle from "../UI/SectionWithTitle";
import classes from './CategoriesBrowser.module.css'


function CategoriesBrowser() {
    /**
     * In this `categoriesCollections` Array:
     * ---- [0]: category url
     * ---- [1]: className in '/CategoriesBrowser.module.css'
     * ---- [2]: imgSrc
     * ---- [3]: alt text
     */
    const categoriesCollections = [
        ['iphone', 'item-1', "/iphone.png", "iphone"],
        ['mac', 'item-2', "/mac.png", "mac"],
        ['ipad', 'item-3', "/ipad.png", "ipad"],
        ['watch', 'item-4', "/watch.png", "watch"],
        ['airpod', 'item-5', "/airpods.png", "airpods"]
    ]
    return (
        <Container className="text-center uppercase italic">
            <SectionTitle h4="Browse Our Categories" h5='Carefull Created Collections' />
            <div className={`${classes['categories-grid']} fade-in`}>
                {
                    categoriesCollections.map(i => (
                        <Link to={`/shop/${i[0]}`} className={classes[i[1]]} key={i[2]}>
                            <img src={i[2]} alt={i[3]} />
                        </Link>
                    ))
                }
            </div>
        </Container>
    );
}

export default CategoriesBrowser;