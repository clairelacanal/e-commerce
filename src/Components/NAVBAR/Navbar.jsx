
import './Navbar.css';
import Logo from '../../../public/e-Com.png';


function Navbar() {

  return (
      <nav>
            <img src={Logo} alt='logo-entreprise'></img>
            <p>E-comm</p>
      </nav>
  )
}

export default Navbar;
