import style from'./style.module.css'

import Img from '../../assets/advogada.jpg'

export default function Cape() {

    return(

        <section className={style.cape}>
            <img className={style.img} src={Img} alt=""/>
            <h1 className={style.title}>
                EXPERIÊNCIA, CREDIBILIDADE 
                <p> E TRANSPARÊNCIA</p>
            </h1>
        </section>
    )
}