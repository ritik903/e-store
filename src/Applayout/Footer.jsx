import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidCreditCardAlt } from "react-icons/bi";

export const Footer = () => {
    const date = new Date().getFullYear()

    const sendWhatsAppMessage = () => {
        const phoneNumber = "919056659781";
        const message = "Hello! I want to contact you. pls call me us";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return <section className="container bg_footer_color">
        <div className="grid__four_column">
            <div>
                <h2>Products</h2>
                <div className="lists">
                    <li>Price Drop</li>
                    <li>New Products</li>
                    <li>Best Sales</li>
                    <li>Contact Us</li>
                    <li>Price Drop</li>
                    <li>Site Map</li>
                </div>
            </div>
            <div>
                <h2>Our Compuny</h2>
                <div className="lists">
                    <li>Delivery</li>
                    <li>Legal Notice</li>
                    <li>Terms and Conditions of us</li>
                    <li>About Us</li>
                    <li>secure payment</li>
                </div>
            </div>
            <div>
                <h2>Store Information</h2>
                <div className="lists">
                    <li>Ritik - E-Store</li>
                    <li>01-Ludiana, punjab (IND)</li>
                    <li>United States</li>
                    <li>+91-9056659781</li>
                    <li>ritikchoudhary90566@gmail.com</li>
                </div>
            </div>
            <div>
                <h2>Join Our Milling List</h2>
                <div className="lists">
                    <li>There are many variations</li>
                    <li>of Lorem Ipsum available</li>
                    <span> <input type="email" placeholder="enter your email" /></span>
                </div>
            </div>
        </div>

        <div className="grid__three_columns">
            <div>
                <h2>Follow us</h2>
                <div className="lists_row_g">
                    <a href="https://www.instagram.com/yoboy_ritik/" className="anchor"><li><FaInstagram /></li></a>
                    <a className="anchor" onClick={sendWhatsAppMessage}><li><FaWhatsapp /></li></a>
                    <a href="https://www.facebook.com/share/jo692o84YthyYwgY/?mibextid=qi20mg" className="anchor"><li><FaFacebook /></li></a>
                    <a href="https://www.linkedin.com/in/ritik-choudhary-a29480319" className="anchor"><li><FaLinkedin /></li></a>
                    <a href="tel:9056659781" className="anchor"><li><FaPhoneAlt /></li></a>
                </div>
            </div>
            <div>
                <h2>Download APPS</h2>
                <div className="lists_row">
                    <li>
                        <img src="/images/appstore.jpg" alt="invailed" className="footerimg" />
                    </li>
                    <li>
                        <img src="/images/GooglePlay.webp" alt="invailed" className="footerimg" />
                    </li>
                    <li>
                        <img src="/images/window.png" alt="invailed" className="footerimg" />
                    </li>
                </div>
            </div>
            <div>
                <h2>Payment Accept</h2>
                <div >
                    <ul className="lists_row_g">
                        <li><FaCcVisa /></li>
                        <li><FaCcDiscover /></li>
                        <li><FaCcPaypal /></li>
                        <li><MdOutlinePayment /></li>
                        <li><BiSolidCreditCardAlt /></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="whitye" />
        <div className="c">
            <h1 className="footerCode">&copy;<span className="date">{date}</span> <span>Design and Code by Ritik Choudhary</span></h1>
        </div>
    </section>
}