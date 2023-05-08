import style from './style.module.css'


import Contact from "../contact/contact";
import Location from '../location/location';
import About from '../about/about';

export default function Main() {
    
    return(
        <div className={style.main}>
            <Location/>
            <About/>
            <Contact/>
        </div>
    )
}