import './Categories.css';
import { categories } from '../../backend/db/categories';

const CategoryCard = ({catImg}) =>{
    return(
        <div className='category-card'>
            <img src={catImg} alt='category-img'/>
        </div>
    )
}

const Categories = () =>{
    return(
        <>
            <div className="category-container">
                <h1>Gardening</h1>
                <p>Gardening is not just a activity - for some, it is a stress release. For others, it is an escape into a world filled with hope and joy.</p>
                <div className='category-cards'>
                    {
                        categories.map(({_id, img}) => (
                            <CategoryCard key={_id} catImg={img}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Categories;