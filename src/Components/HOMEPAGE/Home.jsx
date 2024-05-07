import "./Home.css";
import Navbar from "../NAVBAR/Navbar";
import Form from "../FORM/Form";
import Footer from "../FOOTER/Footer";
import Side from "../SIDE/Side";
import List from "../LIST/List";
import { useState } from "react";
import data from "../../assets/data.json";

function Homepage() {
  const [product, setProduct] = useState(data);
  const emptyForm = {
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    images: "",
  };
  const [productForm, setProductForm] = useState(emptyForm);

  return (
    <>
      <Navbar />
      <Side />
      <Form
        product={product}
        setProduct={setProduct}
        productForm={productForm}
        setProductForm={setProductForm}
        emptyForm={emptyForm}
      />
      <List
        articles={product}
        setArticles={setProduct}
        setProductForm={setProductForm}
      />
      <Footer />
    </>
  );
}

export default Homepage;
