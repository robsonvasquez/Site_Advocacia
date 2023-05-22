import Card from '../card/card'
import style from './style.module.css'
import Civil from '../../assets/civil.png'
import Trabalhista from '../../assets/trabalhista.png'
import Ambiental from '../../assets/ambiental.png'

export default function Area() {
    return(
        <section className={style.area_section}>
            <div className={style.area}>

                <h2 className={style.title}>ÁREAS DE ATUAÇÃO</h2>

                <div className={style.card}>
                    <Card img={Civil} label='Civil' width='100px' height='100px' font='1.5rem'/>
                    <Card img={Trabalhista} label='Trabalhista' width='100px' height='100px' font='1.5rem'/>
                    <Card img={Ambiental} label='Ambiental' width='100px' height='100px' font='1.5rem'/>
                    <Card img={Civil} label='Civil' width='100px' height='100px' font='1.5rem'/>
                    <Card img={Civil} label='Civil' width='100px' height='100px' font='1.5rem'/>
                    <Card img={Civil} label='Civil' width='100px' height='100px' font='1.5rem'/>
                    <Card img={Trabalhista} label='Trabalhista' width='100px' height='100px' font='1.5rem'/>
                    <Card img={Ambiental} label='Ambiental' width='100px' height='100px' font='1.5rem'/>
                    <Card img={Civil} label='Civil' width='100px' height='100px' font='1.5rem'/>
                    <Card img={Civil} label='Civil' width='100px' height='100px' font='1.5rem'/>
                </div>
            </div>
        </section>
    )
}