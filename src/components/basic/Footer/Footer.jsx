import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = (props) => {
  return (
    <section className="footer">
      <section className="footer__seccion">
        <div className="footer__contenedor">
          <div className="footer__izquierda">
            <h2>Nosotros</h2>
            <p>
              Pethouse es una empresa fundada en Buenos Aires en el año 2020,
              impulsada por el dificil contexto de la cuarentena que se
              encontraba en continua expansion. Nuestro objetivo es ofrecer la
              mejor calidad de accesorios y alimentos a un precio accesible.
            </p>
            <ul className="footer__iconos">
              <li><a href="https://www.facebook.com/patitaspethouse"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://twitter.com/?lang=es"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.instagram.com/?hl=es-la"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://www.youtube.com/"><i className="fa fa-youtube-play" /></a></li>
            </ul>
            {/* <div className="footer__appLogo">
              <a href="https://play.google.com/store?hl=es_419&gl=US">
                <img src="img/play-store.png" alt="PlayStore" />
              </a>
              <a href="https://www.apple.com/la/app-store/">
                <img src="img/app-store.png" alt="AppStore" />
              </a>
            </div> */}
          </div>
          <div className="footer__medio">
            <h2>Links</h2>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/productos">Productos</Link>
              </li>
              <li>
                <Link to="/preguntas">Preguntas Frecuentes</Link>
              </li>
              <li>
                <Link to="/nosotros">Quienes Somos</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
          <div className="footer__derecha">
            <h2>Contacto</h2>
            <ul className="informacionContacto">
              <li>
                <span>
                  <i className="fa fa-map-marker" aria-hidden="true" />
                </span>
                <span>
                  Calle 999 <br />
                  San Miguel, Buenos Aires
                  <br />
                  Argentina
                </span>
              </li>
              <li>
                <span>
                  <i className="fa fa-phone" aria-hidden="true" />
                </span>
                <p>
                  <a href="tel:541139520920">11 3952-0920</a>
                  <br />
                  <a href="tel:46647339">4664-7339</a>
                </p>
              </li>
              <li>
                <span>
                  <i className="fa fa-envelope" aria-hidden="true" />
                </span>
                <p>
                  <a href="mailto:pethouse@gmail.com">Pethouse@gmail.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="footer__copyRightText">
        <p>
          Copyright © 2021 Diego Javier Conchillo Wagner. Todos los derechos
          Reservados.
        </p>
      </div>
    </section>
  );
};

export default Footer;
