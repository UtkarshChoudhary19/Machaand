import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faInstagram, faWhatsapp , } from '@fortawesome/free-brands-svg-icons';
import {Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      

      <div className="page-footer font-small stylish-color-dark pt-4" style={{ marginTop: '15px',borderTop: '2px solid black'}}>
        <div className="container text-center text-md-left">
          <div className="row">
            

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-2 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Customer Service</h5>

              <ul className="list-unstyled">
                <li>
                  <Link to="/contactUs" style={{color: 'black' , textDecoration: 'none'}}>Contact Us</Link>
                </li>
                <li>
                  <Link to="/trackOrder" style={{color: 'black' , textDecoration: 'none'}}>Track Order</Link>
                </li>
                <li>
                  <Link  to="/cancelReturn" style={{color: 'black' , textDecoration: 'none'}}>Cancel & Return Order</Link >
                </li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-2 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Company</h5>

              <ul className="list-unstyled">
                <li>
                  <Link  to="/aboutUs" style={{color: 'black' , textDecoration: 'none'}}>About Us</Link >
                </li>
                <li>
                  <Link  to="/termsCondition" style={{color: 'black' , textDecoration: 'none'}}>Terms & Conditions</Link >
                </li>
                <li>
                  <Link to="/privacyPolicy" style={{color: 'black' , textDecoration: 'none'}}>Privacy Policy</Link>
                </li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-2 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Partners</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="https://www.creativemafia.in/" target="_blank" style={{color: 'black' , textDecoration: 'none'}}>Creative Mafia</a>
                </li>
                <li>
                  <a href="https://www.creativemafia.in/konzeptionpdi/" target="_blank" style={{color: 'black' , textDecoration: 'none'}}>Konzeption PDI</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                100% Secure Payments
              </h5>
              <p>
              <img src="https://machaand.com/wp-content/uploads/2019/12/secure-payments-image.png" alt="..."/>
              </p>
            </div>
          </div>
        </div>

        <ul className="list-unstyled list-inline text-center py-2">
          <li className="list-inline-item">
            <h5 className="mb-1">Register for free</h5>
          </li>
          <li className="list-inline-item">
            <Link to="/" className="btn btn-danger btn-rounded">
              Sign up!
            </Link>
          </li>
        </ul>

        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a href="https://m.facebook.com/MachaandOfficial/" target="_blank" className="btn-floating btn-fb mx-1" style={{color: 'blue' , textDecoration: 'none'}}>
            <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.instagram.com/machaandofficial/?utm_medium=copy_link" target="_blank" className="btn-floating btn-tw mx-1"style={{color: 'red' , textDecoration: 'none'}}>
            <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://api.whatsapp.com/send/?phone=918097797791&text&app_absent=0" target="_blank" className="btn-floating btn-gplus mx-1"style={{color: 'green' , textDecoration: 'none'}}>
            <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
        </ul>
        
        <div className="footer-copyright text-center py-3">
          © 2021 Copyright:
          <a href="https://machaand.com/" target="_blank" style={{color: 'black' , textDecoration: 'none'}}> Machaand.com</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
