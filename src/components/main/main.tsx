import style from './style.module.css'


import Contact from "../contact/contact";

export default function Main() {
    
    return(
        <div className={style.main}>
            <Contact/>
        </div>
    )
}