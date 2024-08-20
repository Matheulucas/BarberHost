import { Avatar } from "@mui/material"
import { useState } from "react"
import styles from "./Header.module.scss"
import Logo from "@assets/images/favicon.svg"

export default function Header () {
const [authenticate,setAuthentice] = useState(false)
    return <>
    
    <header className={styles.Stickbar}>

        
            <div className="navbar">
            <a  href=""><img className="Logo"  src={Logo} alt="Logo" /></a>
                <a href="">Home</a>
                <a href="">Agendar</a>
                <a href="">Loja</a>
                <a href="">Sobre</a>
            </div>
    
        <div className="sign-in">
            {authenticate?<Avatar>NE</Avatar>:<a>Faça Login</a>}
        </div>
    </header>
    </>
}