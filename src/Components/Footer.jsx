import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/GlobalContext'

const Footer = () => {

    const { Theme } = useContext(ContextGlobal)

    return (
        <footer style={{background:Theme.backgroundNav, color:Theme.color}}>
            <div>
                <p>Powered by</p>
                <img src="/images/DH.png" alt='DH-logo' style={{filter:Theme.inverted}}/>
            </div>
            <div>
                <i className="fa-brands fa-facebook face"></i>
                <i className="fa-brands fa-instagram insta"></i>
                <i className="fa-brands fa-tiktok tiktok"></i>
                <i className="fa-brands fa-whatsapp wha"></i>
            </div>
        </footer>
    )
}

export default Footer
