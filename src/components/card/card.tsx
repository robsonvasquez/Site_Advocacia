import style from './style.module.css'

interface cardProps{
    img: string;
    label: string;
    sub_label?: string;
    width?: string;
    height?: string;
    font?: string;
    font_weight?: string;
}

export default function Card({img, label, sub_label, width, height, font, font_weight}: cardProps){

    return(
        <div className={style.card} style={{width: width}}>
            <img src={img} alt="" style={{width: width, height: height}}/>
            <div className={style.about}>
                <h6 style={{fontSize: font, fontWeight: font_weight}}>{label}</h6>
                <span style={{fontSize: font, fontWeight: font_weight}}>{sub_label}</span>                
            </div>
        </div>
    )
}