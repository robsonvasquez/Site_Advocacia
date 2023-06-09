import Card from '../card/card'
import style from './style.module.css'
import {Fade} from 'react-reveal';

import Img from '../../assets/user_adv.jpg'

export default function About() {

    return(   
        <section className={style.about_section}>
            <Fade left duration={1000}>
                <div className={style.about}>
                    <h2 className={style.title}>SOBRE</h2>
                    <div className={style.about_text}>
                        <p>
                            O escritório de advocacia Pires Roque é especializado em fornecer serviços jurídicos de alta qualidade
                            nas áreas trabalhista e criminal. Com uma equipe altamente qualificada de advogados experientes,
                            o escritório atende a uma ampla gama de clientes em todo o país, oferecendo soluções jurídicas
                            personalizadas e eficazes.
                        </p>
                        
                        <p>
                            Na área trabalhista, a equipe do Pires Roque trabalha com questões relacionadas a contratos de 
                            trabalho, rescisões, acordos coletivos, ações trabalhistas, entre outras demandas. 
                            Os advogados têm um amplo conhecimento das leis trabalhistas brasileiras e utilizam sua 
                            expertise para garantir que seus clientes sejam representados de forma justa e eficaz.
                        </p>

                        <p>
                            No campo criminal, o escritório fornece serviços jurídicos em questões relacionadas 
                            a crimes de qualquer natureza, incluindo defesa criminal, investigações, recursos, entre outras. 
                            Com uma vasta experiência em lidar com casos complexos e desafiadores, 
                            os advogados do Pires Roque estão comprometidos em proteger os direitos de seus clientes
                            e garantir que a justiça seja feita.
                        </p>

                        <p>
                            Com uma abordagem centrada no cliente e um compromisso em fornecer resultados excepcionais, 
                            o site de advocacia Pires Roque é uma escolha confiável para aqueles que buscam serviços jurídicos
                            especializados nas áreas trabalhista e criminal.
                        </p>
                    </div>

                    <Card img={Img} label='Alexane Pires Roque' sub_label='Fundadora' font='1rem' width='180px'/>
                </div>
            </Fade>
        </section>
    )
}