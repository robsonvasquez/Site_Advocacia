import style from'./style.module.css'
import {FaWhatsapp, ImLocation} from 'react-icons/all';
import Img from '../../assets/dama.png'

export default function Header() {
    return(
        <div>
            <ul className={style.header}>
                <li>
                    <div className={style.icons}>
                        <img src={Img} alt="" />
                        <span> Escritório Pires Roque</span>
                    </div>
                </li>
                
                <li>
                    <div className={style.icons}>
                        <span className={style.icon}>
                            <ImLocation/>
                        </span>
                        Presidente Vargas
                    </div>
                    
                    <div className={style.icons}>
                        <span className={style.icon}>
                            <FaWhatsapp/>
                        </span>
                        (55) 98748248
                    </div>
                </li>
            </ul>
        </div>
    )
}
