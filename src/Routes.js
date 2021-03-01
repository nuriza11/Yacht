import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header'
// import AboutUs from "./pages/AboutUs/AboutUs";
import MainPage from "./pages/MainPage/MainPage";
import ProductsSection from './pages/ProductsSection/ProductsSection';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ShoppingCartProducts from './pages/ShoppingCart/ShoppingCartProducts/ShoppingCartProducts';
import PaymentForm from "./pages/ShoppingCart/CreditCard/CreditCard";
import WishList from "./pages/WishList/WishList";
import Charters from "./pages/Charters/Charters";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import FormPage from "./components/FormPage/FormPage";

const Routes = ()=>{
    return( 
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                {/* <Route exact path='/about' component={AboutUs}/> */}
                <Route exact path="/products" component={ProductsSection} />
                <Route exact path="/admin" component={AdminPanel} />
                <Route exact path="/details/:id" component={ProductDetails} />
                <Route exact path="/shopping-cart" component={ShoppingCartProducts} />
                <Route exact path="/credit" component={PaymentForm} />
                <Route exact path='/wishes' component={WishList}/>
                <Route exact path='/charters' component={Charters}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/pay-form' component={FormPage}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}
export default Routes;