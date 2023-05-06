import style from'./style.module.css'

import { FaFacebookSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function topBar() {
    
    return(

        <nav className={style.nav}>
            <ul>
                <li>Home</li>
                <li>Especialidade</li>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
            <ul className={style.icon}>
                <li><FaFacebookSquare/></li>
                <li><FaLinkedin/></li>
                <li><FaTwitter/></li>
            </ul>
        </nav>
    )
}