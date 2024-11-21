import Navbar from './Navbar.js'
import Statement from './Statement.js'
import Reviews from './Reviews.js'

function Header() {
  return (
    <div className="App">
        <Navbar />
        <Statement />
        <Reviews />
    </div>
  );
}

export default Header;
