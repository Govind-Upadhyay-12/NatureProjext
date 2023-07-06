import { Link } from 'react-router-dom';
import img1 from '../images/letter-g-logo-design-template-free-vector.jpg';
import './Content.css';

function Header() {
  return (
    <div className="hero">
      <div className="logo">
        <img src={img1} width={50} alt="Logo" />
      </div>
      <div className="items">
        <Link to="/" className='h1'>Home</Link>
        <Link to="/contect" className='h1'>Service</Link>
        <Link to="/products" className='h1'>Products</Link>
        <button className='btn'>SIGN UP</button>
      </div>
    </div>
  );
}

export default Header;
