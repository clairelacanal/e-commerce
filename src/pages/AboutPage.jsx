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
      <Footer />
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
      </div>
    </>
  );
}

export default AboutPage;
