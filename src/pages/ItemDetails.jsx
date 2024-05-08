import { useParams } from "react-router-dom";
import "./ItemDetails.css";
import products from "../assets/data.json";
import Navbar from "../Components/NAVBAR/Navbar";
import Side from "../Components/SIDE/Side";
import Footer from "../Components/FOOTER/Footer";

function ItemDetails() {
  const { productId } = useParams();

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return <div>404 Products Not Found</div>;
  }
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    thumbnail,
    deleteArticle,
  } = product;

  return (
    <>
      <Navbar />
      <Side />
      <Footer />
      <div className="card">
        <hgroup>
          <h2>{title}</h2>
          <h3>{description}</h3>
          <div className="group-color">
            <p>{price} $</p>
            <p>{discountPercentage} %</p>
            <p>{rating}</p>
            <p>{stock} in stock</p>
          </div>
          <img src={thumbnail} alt={title} />
          <p>{deleteArticle}</p>
        </hgroup>
      </div>
    </>
  );
}

export default ItemDetails;
