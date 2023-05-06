import style from'./style.module.css'

import Img from '../../assets/advogada.jpg'

export default function Cape() {

    return(

        <div className={style.cape}>
            <img className={style.img} src={Img} alt=""/>
            <h1 className={style.title}>Escritório Pires Roque</h1>
        </div>
    )
}