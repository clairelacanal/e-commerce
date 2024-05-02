import { useParams } from "react-router-dom";
import './ItemDetails.css';
import products from '../assets/data.json';
import Navbar from '../Components/NAVBAR/Navbar';
import Side from '../Components/SIDE/Side';
import Footer from '../Components/FOOTER/Footer';

function ItemDetails(){
    const {productId} = useParams();

    const product = products.find((product) => product.id === parseInt(productId));

    if (!product) {
        return <div>404 Products Not Found</div>;
      }
    const {title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images, deleteArticle} = product;

    return(
        <>
        <Navbar/>
        <Side/>
        <Footer/>
            <div className="card">
              <hgroup>
                <h2>{title}</h2>
                <h3>{description}</h3>
                <p>{price}</p>
                <p>{discountPercentage}</p>
                <p>{rating}</p>
                <p>{stock}</p>
                <p>{brand}</p>
                <p>{category}</p>
                <p>{thumbnail}</p>
                <p>{images}</p>
                <p>{deleteArticle}</p>
              </hgroup>
          </div>
        </>
    )
}

export default ItemDetails;






/*import { useParams } from "react-router-dom";

import characters from "../assets/characters.json";

function CharacterDetailsPage() {
  const { id } = useParams();

  const character = characters.find((char) => char.id === parseInt(id));

  if (!character) {
    return <div>404 Character Not Found</div>;
  }

  const { imageSrc, name, voiceActor, quote } = character;

  return (
    <div className="card">
      <img
        src={imageSrc}
        alt=""
      />
      <hgroup>
        <h2>{name}</h2>
        <h3>Voiced by: {voiceActor}</h3>
        <p>{quote}</p>
      </hgroup>
    </div>
  );
}

export default CharacterDetailsPage;*/