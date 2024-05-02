import { useState } from 'react';
import './List.css';
import Data from '../../assets/data.json';
import ListItem from '../LISTITEM/ListItem';
import ItemDetails from '../../pages/ItemDetails';
import { Link } from 'react-router-dom';

function List(){
    const [articles, setArticles] = useState(Data);

    //Supprime un article
    function deleteArticle(title){
        const articleToKeep = articles.filter((article) => article.title !== title);
        setArticles(articleToKeep);
    }

    

    return(
        <div className='product-list'>
            {articles.map((article) => (
                <ListItem
                key={article.id}
                id={article.id}
                title={article.title}
                description={article.description}
                price={article.price}
                discountPercentage={article.discountPercentage}
                rating={article.rating}
                stock={article.stock}
                brand={article.brand}
                category={article.category}
                thumbnail={article.thumbnail}
                images={article.images}
                deleteArticle={deleteArticle}
                />
            ))}
        </div>  
    )
}

export default List;

//<Link to={`/product-details/${product._id}`}><ItemDetails/><button>Détails</button></Link>
//<Link key={product._id} to={`/product-details/${product._id}`}><ItemDetails {...article}/>





/*{students &&
    students.map((student) => {
      return (
        <Link key={student._id} to={`/students/${student._id}`}><StudentCard {...student} /> </Link>
      );
    })}'/product-details/:productId'
<Link key={product._id} to={`/product-details/${product._id}`}><ItemDetails {...article}/>
*/