import "./AboutPage.css";
import Navbar from "../Components/NAVBAR/Navbar";
import Side from "../Components/SIDE/Side";
import Footer from "../Components/FOOTER/Footer";
import Logo from "../../public/e-Com.png";
import photoClaire from "../../public/claire.jpg";
import photoYassin from "../../public/yassin.png";

function AboutPage() {
  return (
    <>
      <Navbar />
      <Side />
      <div className="container-about">
        <div className="titles">
          <img src={Logo} alt="logo" />
          <h1>About Our</h1>
          <p>
            Our e-commerce site sells all kinds of products, from perfumes to
            clothing and technology, you're sure to find something you love,
            we're certain of it.
          </p>
        </div>
        <div className="paragraphes">
          <div className="claire-p">
            <img src={photoClaire} alt="photo Claire"></img>
          </div>
          <div className="yassin-p">
            <img src={photoYassin} alt="photo Yassin"></img>
          </div>
        </div>
        <div className="presentation">
          <p>
            We are Yassin and Claire, students at Ironhack in the web
            development bootcamp aiming to become developers. We created this
            e-commerce project because we were interested in the topic and
            because Claire needs to work on an e-commerce site at her company.
            We designed this site for the site administrator so that they can
            showcase their merchandise by creating product cards, updating them,
            and deleting them. To do this project, we used Vite + React along
            with CRUD methods to implement our logic.
            <br />
            <br />
            Here are our GitHub and LinkedIn links.
            <br />
            <a href="https://www.linkedin.com/in/claire-lacanal/">
              Linkedin de Claire
            </a>
            <a href="https://github.com/clairelacanal">GitHub de Claire</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
