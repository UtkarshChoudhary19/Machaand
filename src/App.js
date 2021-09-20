
import './App.css';
import BestSeller from './components/BestSeller';
import Footer from './components/Footer';
import Interest from './components/Interest';
import NavBar from './components/NavBar';
import Slider from './components/Slider';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Men from './components/Men';
import Women from './components/Women';
import MyAccount from './components/MyAccount';
import ProductPage from './components/ProductPage';
import Desc from './components/Desc';
import CancelReturn from './components/CancelReturn';
import AboutUs from './components/AboutUs';
import TermsCondition from './components/TermsCondition';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TrackOrder from './components/TrackOrder';
import Feedback from './components/Feedback';


function App() {
  return (
    <>
    <Router>
          <NavBar/>
          <Route exact path="/">
            <Slider/>
          <Interest/>
          <BestSeller/>
            </Route>
          <Switch>
            <Route exact path="/men">
              <Men/>
            </Route>
            <Route exact path="/women">
              <Women/>
            </Route>
            <Route exact path="/myAccount">
              <MyAccount/>
            </Route>
            <Route exact path="/productpage">
              <ProductPage/>
              <Desc/>
            </Route>
            <Route exact path="/cancelReturn">
              <CancelReturn/>
            </Route>
            <Route exact path="/aboutUs">
              <AboutUs/>
            </Route>
            <Route exact path="/termsCondition">
              <TermsCondition/>
            </Route>
            <Route exact path="/contactUs">
              <ContactUs/>
            </Route>
            <Route exact path="/privacyPolicy">
              <PrivacyPolicy/>
            </Route>
            <Route exact path="/trackOrder">
              <TrackOrder/>
            </Route>
            <Route exact path="/feedback">
              <Feedback/>
            </Route>
          </Switch>
          <Footer/>
      </Router>
    </>
  );
}

export default App;
