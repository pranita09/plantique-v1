import './Categories.css';

const categoryImages = [
    '/images/category-img-1.jpg',
    '/images/category-img-2.jpg',
    '/images/category-img-3.jpg',
    '/images/category-img-4.jpg'
]

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
                        categoryImages.map((catImg, index) => (
                            <CategoryCard key={index} catImg={catImg}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Categories;