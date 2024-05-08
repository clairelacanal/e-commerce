import "./ListItem.css";
import { Link } from "react-router-dom";
import { FaTag, FaDollarSign, FaPercent, FaStar } from "react-icons/fa";

function ListItem({
  id,
  title,
  description,
  price,
  discountPercentage,
  rating,
  deleteArticle,
  handleEdit,
}) {
  const veryGoodProduct = rating > 4.5;
  const goodProduct = rating < 4.5;
  const msgRating = veryGoodProduct ? "Amazing" : "Nice";

  return (
    <div className="card-item">
      <h2>{title}</h2>
      <p className="description">
        <FaTag /> {description}
      </p>
      <div className="container-fa">
        <p className="price">
          {price}
          <FaDollarSign />{" "}
        </p>
        <p className="discount">
          {discountPercentage}
          <FaPercent />{" "}
        </p>
        <p className="rate">
          {rating}
          <FaStar />
        </p>
      </div>
      {veryGoodProduct && <div className="tag very-good">{msgRating}</div>}
      {goodProduct && <div className="tag good">{msgRating}</div>}
      <Link to={`/product-details/${id}`} className="details">
        En savoir +
      </Link>
      <button onClick={() => deleteArticle(title)}>Delete</button>
      <button onClick={() => handleEdit(id)}>Edit</button>
    </div>
  );
}

export default ListItem;
