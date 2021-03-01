import './App.css';
import ProductsContextProvider from './contexts/ProductsContext';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCartContextProvider from './contexts/ShoppingCartContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import WishListContextProvider from './contexts/WishListContext';
import CommentsContextProvider from './contexts/CommentsContext';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <ParallaxProvider>
      <ProductsContextProvider>
        <CommentsContextProvider>
          <WishListContextProvider>
            <ShoppingCartContextProvider>
              <AuthContextProvider>
                <Routes />
              </AuthContextProvider>
            </ShoppingCartContextProvider>
          </WishListContextProvider>
        </CommentsContextProvider>
      </ProductsContextProvider>
    </ParallaxProvider>

  );
}

export default App;
