import "./App.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';

function App() {
  return (
    <div className="App">
      <div className="header__logo">
        <StorefrontIcon className="header__logoImgage" fontSize="large"/>
        <h2 className="header__logoTitle">eShop</h2>
      </div>
      <div className="header__search"></div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineOne">Hello Guest</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineOne">Shop</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne"><ShoppingBasketIcon fontSize="large" /></span>
          <span className="nav__itemLineOne">0</span>
        </div>
      </div>
    </div>
  );
}

export default App;
