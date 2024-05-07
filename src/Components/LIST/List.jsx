import { useState } from 'react';
import './List.css';
//import Data from '../../assets/data.json';
import ListItem from '../LISTITEM/ListItem';
//import ItemDetails from '../../pages/ItemDetails';
//import { Link } from 'react-router-dom';

function List({articles, setArticles}){
    //const [articles, setArticles] = useState(Data);

   
    function deleteArticle(title){
        const articleToKeep = articles.filter((article) => article.title !== title);
        setArticles(articleToKeep);
    }

    const emptyForm = {
        title: "",
        description: "",
        price: "",
        discountPercentage: "",
        stock: "",
        brand: "",
        category: "",
        thumbnail: "",
        images: ""
      };
      const [articleForm, setArticleForm] = useState(emptyForm);
    
      function handleSubmit(event) {
        event.preventDefault();
    
        if (articleForm.id) {
          const articleToEditIndex = articles.findIndex(
            (article) => article.id === articleForm.id
          );
    
          setArticles([
            ...articles.slice(0, articleToEditIndex),
            ...articles.slice(articleToEditIndex + 1),
            articleForm
          ]);
        } else {
          setArticleForm([
            ...articles,
            { ...articleForm, id: (articles.length + 1).toString() }
          ]);
        }
    
        setArticleForm(emptyForm); 
      }

    function handleEdit(id){
        const articleToEdit = articles.find((article) => article.id === id);

        setArticleForm(articleToEdit);
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
                handleEdit={handleEdit}
                />
            ))}
        </div>  
    )
}

export default List;







/*{students &&
    students.map((student) => {
      return (
        <Link key={student._id} to={`/students/${student._id}`}><StudentCard {...student} /> </Link>
      );
    })}'/product-details/:productId'
<Link key={product._id} to={`/product-details/${product._id}`}><ItemDetails {...article}/>
*/