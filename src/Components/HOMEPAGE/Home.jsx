import './Home.css';
import Navbar from '../NAVBAR/Navbar';
import Form from '../FORM/Form';
import Footer from '../FOOTER/Footer';
import Side from '../SIDE/Side';
import List from '../LIST/List';
import { useState } from 'react';
import data from '../../assets/data.json';




function Homepage() {

  const [product, setProduct] = useState(data);

  return (
    <>
        <Navbar/>
        <Side/>
        <Form product={product} setProduct={setProduct}/>
        <List articles={product} setArticles={setProduct}/>
        <Footer/>
    </>
  )
}

export default Homepage;