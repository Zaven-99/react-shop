import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/logoFooter.svg";
import twitter from "../../assets/icons/social/twitter.svg";
import facebook from "../../assets/icons/social/facebook.svg";
import tiktok from "../../assets/icons/social/tiktok.svg";
import instagram from "../../assets/icons/social/instagram.svg";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-inner"]}>
          <div className={styles["links-block"]}>
            <ul className={styles.links}>
              <li className={styles["links-item"]}>
                <img
                  className={styles.logo}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  src={logo}
                  alt="logo"
                />
              </li>
              <li className={styles["links-item"]}>
                We are a residential interior design firm located in Portland.
                Our boutique-studio offers more than
              </li>
            </ul>
            <ul className={styles.links}>
              <li className={styles["links-item"]}>
                <Link to="#">Services</Link>
              </li>
              <li className={styles["links-item"]}>
                <Link to="#">Bonus program</Link>
              </li>
              <li className={styles["links-item"]}>
                <Link to="#">Gift cards</Link>
              </li>
              <li className={styles["links-item"]}>
                <Link to="#">Credit and payment</Link>
              </li>
              <li className={styles["links-item"]}>
                <Link to="#">Service contracts</Link>
              </li>
              <li className={styles["links-item"]}>
                <Link to="#">Non-cash account</Link>
              </li>
              <li className={styles["links-item"]}>
                <Link to="#">Payment</Link>
              </li>
            </ul>
            <ul className={styles.links}>
              <li className={styles["links-item"]}>
                <Link to="#">Assistance to the buyer</Link>
              </li>
              <li className={styles["links-item"]}>
                <Link to="#">Find an order</Link>
              </li>
              <li className={styles["links-item"]}>
                <Link to="#">Terms of delivery</Link>
              </li>
              <li className={styles["links-item"]}>
                <Link to="#">Exchange and return of goods</Link>
              </li>
              <li className={styles["links-item"]}>
                <Link to="#">Guarantee</Link>
              </li>
              <li className={styles["links-item"]}>
                <Link to="#">Frequently asked questions</Link>
              </li>
              <li className={styles["links-item"]}>
                <Link to="#">Terms of use of the site</Link>
              </li>
            </ul>
            <div className={styles["social"]}>
              <NavLink
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt={twitter} />
              </NavLink>
              <NavLink
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="facebook" />
              </NavLink>
              <NavLink
                to="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tiktok} alt="tiktok" />
              </NavLink>
              <NavLink
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="instagram" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
