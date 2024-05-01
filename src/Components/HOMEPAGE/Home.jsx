import './Home.css';
import Navbar from '../NAVBAR/Navbar';
import Footer from '../FOOTER/Footer';
import Side from '../SIDE/Side';
import List from '../LIST/List';




function Homepage() {

  return (
    <>
        <Navbar/>
        <Side/>
        <List/>
        <Footer/>
    </>
  )
}

export default Homepage;