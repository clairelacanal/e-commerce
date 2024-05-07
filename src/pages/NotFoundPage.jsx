import "./NotFoundPage.css";
import Navbar from "../Components/NAVBAR/Navbar";
import Side from "../Components/SIDE/Side";
import Footer from "../Components/FOOTER/Footer";
import image from "../../public/found681621.png";

function NotFoundPage() {
  return (
    <>
      <Navbar />
      <Side />
      <Footer />
      <img src={image} alt="image-404" />
    </>
  );
}

export default NotFoundPage;
