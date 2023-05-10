import style from'./style.module.css'


export default function Contact() {
    return(
        <section className={style.contact}>
            <h1>Escritório Pires Roque</h1>
            <form className={style.form} action="">
                <input type="text" placeholder="NOME" />
                <input type="text" placeholder="E-MAIL" />
                <input type="text" placeholder="ASSUNTO" />
                <textarea placeholder="MENSAGEM" />
            </form>
        </section>
    )
}