
import { useState, useEffect, useRef } from "react";
import sun from "./sun.svg";
import moon from "./moon.svg";
import "./btnDarkMode.css"


const BtnDarkMode = () => {

    const [darkMode, setDarkMode] = useState('light');
    const btnRef = useRef(null)

    useEffect(() => {
     if (darkMode === 'light') {
        document.body.classList.add('dark')
     } else {
        document.body.classList.remove('dark')
     }
    }, [darkMode])

    const toggleDarkMode = () => {setDarkMode((currentValue) => {
        return currentValue === 'light'? 'dark' : 'light'
    })}
    return ( 
        <button onClick={toggleDarkMode} className="dark-mode-btn">
        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
      </button>

     );
}
 
export default BtnDarkMode;