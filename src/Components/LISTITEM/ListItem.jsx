import './ListItem.css';

function ListItem({title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images, deleteArticle}){
    const note = rating > 4.5;
    const msgRating = note ? "Good product !" : "Bad product";
    
    return(
       <div className="card-item">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <p>{discountPercentage}</p>
            <p>{rating}</p>
            <p className='msgRating'>{msgRating}</p>
            <p>{stock}</p>
            <p>{brand}</p>
            <p>{category}</p>
            <img src={thumbnail} alt={`${title} thumbnail`}></img>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`${title} image ${index + 1}`} />
            ))}
            <button onClick={() => deleteArticle(title)}>Delete</button>
       </div>
    )
}

export default ListItem;




