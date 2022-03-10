import {useEffect} from "react";
import albert from '../assets/albert.jpg'


const Pic = () => {

    useEffect(() => {
        let interval = setInterval(() => {
            console.log('Mounted');
        },1000);

    return () => {
        clearInterval(interval)
        console.log('unmounted');

    }

    }, [])


    return (
        <aside>
            <img src={albert} alt="genius man" />
        </aside>
    )
}

export default Pic