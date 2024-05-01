import { useState } from 'react';
import './List.css';
import Data from '../../assets/data.json';
import ListItem from '../LISTITEM/ListItem';

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

