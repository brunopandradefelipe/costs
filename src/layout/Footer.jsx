import {FaFacebook, FaWhatsapp, FaInstagram} from "react-icons/fa"
import style from './Footer.module.css';

const Footer = () => {
    return ( 
        <footer className={style.footer}>
            <ul className={style.socialList}>
                <li><a href="https://facebook.com.br" target="_blank" rel="noopener noreferrer"><FaFacebook/></a></li>
                <li><FaWhatsapp/></li>
                <li><FaInstagram/></li>
            </ul>
            <p><span>Costs</span> &copy; 2021</p>
        </footer>
     );
}
 
export default Footer;
