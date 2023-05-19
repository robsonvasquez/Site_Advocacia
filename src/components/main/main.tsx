import style from './style.module.css'

import Cape from '../cape/cape'
import About from '../about/about';
import Contact from "../contact/contact";
import Location from '../location/location';
import Area from '../area/area';

export default function Main() {
    
    return(
        <main className={style.main}>
            <Cape/>
            <About/>
            <Location/>
            <Area/>
            <Contact/>
        </main>
    )
}