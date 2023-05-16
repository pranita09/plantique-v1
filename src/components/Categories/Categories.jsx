import './Categories.css';
import { categories } from '../../backend/db/categories';

const CategoryCard = ({catImg, category}) =>{
    return(
        <div className='category-card-container'>
            <div className='category-card'>
                <img src={catImg} alt='category-img'/>
            </div>
            <p>{category}</p>
        </div>
    )
}

const Categories = () =>{
    return(
        <>
            <div className="category-outer-container">
                <h1>What are you looking for?</h1>
                <p>Gardening is not just a activity - for some, it is a stress release. For others, it is an escape into a world filled with hope and joy. So, choose your plants now!</p>
                <div className='category-cards'>
                    {
                        categories.map(({_id, img, categoryName}) => (
                            <CategoryCard key={_id} catImg={img} category={categoryName}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Categories;