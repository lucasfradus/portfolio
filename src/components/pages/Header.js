import React from 'react';
import HeaderButton from '../layouts/HeaderButton'
import { header } from '../../profile'
import LangSwitch from '../layouts/LangSwitcher'
import {useTranslation} from "react-i18next";

const Header = () => {



    const [t] = useTranslation('common');

    const scrollTo = () => {
        window.scrollTo({
            top: 100000,
            left: 0,
            behavior: "smooth"
        })
    }

    const toggleDarkMode = () =>  {
        document.documentElement.classList.toggle('dark-mode')
        document.getElementById('not-dark').classList.toggle('inverse-dark')
        document.getElementById('not').classList.toggle('inverse-dark')
        var x = document.getElementsByClassName('img-pro')
        for(let i = 0; i < x.length; i += 1) {
          x.item(i).classList.toggle("inverse-dark");
        }
        
        if (document.documentElement.classList.contains('dark-mode'))
          localStorage.setItem('mode', 'Dark')
        else
          localStorage.setItem('mode', 'Light')
        }

    return (
        <div>
            <div className="Header">
                <h1>{t('intro.name')}</h1>

            <p className="line-1 anim-typewriter">y este es mi <mark>portfolio...</mark></p>
       
            <LangSwitch/>
            <HeaderButton/>

            </div>
            <img id="not-dark" onClick={scrollTo} alt="Contact Me" title="Contact Me" className="gtp" src="profile.png"></img>
        </div>
    )
    
}


export default Header;