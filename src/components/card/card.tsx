import style from './style.module.css'

interface cardProps{
    img: string;
    label: string;
    sub_label?: string
}

export default function Card({img, label, sub_label}: cardProps){

    return(
        <div className={style.card}>
            <img className={style.img} src={img} alt="" />
            <div className={style.about}>
                <span>{label}</span>
                <span>{sub_label}</span>                
            </div>
        </div>
    )
}