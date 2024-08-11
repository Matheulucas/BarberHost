import { Avatar } from "@mui/material"
import { useState } from "react"
import styles from "./Header.module.scss"

export default function Header () {
const [authenticate,setAuthentice] = useState(false)
    return <>
    
    <header className={styles.Stickbar}>

        
           <div className="Logo"> <img  src="" alt="Logo" /></div>
            <div className="navbar">
                <a href="">Home</a>
                <a href="">Agendar</a>
                <a href="">Loja</a>
                <a href="">Sobre</a>
            </div>
    
        <div className="sign-in">
            {authenticate?<Avatar>NE</Avatar>:<button>Faça Login</button>}
        </div>
    </header>
    </>
}