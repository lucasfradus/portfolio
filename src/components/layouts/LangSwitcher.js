import styled from 'styled-components'
import {useTranslation} from "react-i18next";
import React, { useState } from 'react'



const LangSwitcher = () => {
    const [t, i18n] = useTranslation('common');

    const flag_es = "https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_Spain.png"
    const flag_en = "https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_United_Kingdom.png"

    const [Currentlang, SetCurrentlang] = useState(i18n.language);
    const [CurrentlangFlag, setIsSetLangFlag] = useState(flag_es);
    const [CurrentlangText, setIsSetLangText] = useState('Español');


    const SwitcherHandler = (lang) => {
        if (lang === 'en'){
            SetCurrentlang('en')
            setIsSetLangFlag(flag_en)
            setIsSetLangText('English')
            i18n.changeLanguage('en')
        }else{
            SetCurrentlang('es')
            setIsSetLangFlag(flag_es)
            setIsSetLangText('Español')
            i18n.changeLanguage('es')
        }
    }
   

    const LangDropdown = () => {
        let tmp_flag
        let tmp_lang
        let futureLang
        if (Currentlang === 'en'){
            tmp_flag = flag_es
            tmp_lang = "Español"
            futureLang = 'es'
        }else{
            tmp_flag = flag_en
            tmp_lang = "English"
            futureLang = 'en'

        }

        return (
            <div  className="selecting-lang" onClick={() => SwitcherHandler(futureLang)} >    
                <img src={tmp_flag} className="lang-flag" alt=""/>
                <p className="lang-text">{tmp_lang}</p>
            </div>
        )
    };

    return (
        <LangSwitch>
            <img src={CurrentlangFlag} className="lang-flag" alt=""/>
            <p className="lang-text">{CurrentlangText}</p>
            <div className="lang-dropdown">
              <LangDropdown/>
            </div>
        </LangSwitch>

    )
};


const LangSwitch = styled.a`

  width: 110px;
  text-align: left;
  cursor: pointer;
  z-index :50;
  position :absolute ;
  top: 20px;
  right: 20px;
  &:hover{
    .lang-dropdown{
        display: block;
    } 
  }

    .switcher-link{
    color: #fff;
        &:hover{
            color: #fff;
        }
    }
    .current-lang{
        background: #fff;
        padding: 3px 5px 0px 5px;
        border-radius: 5px;
    }
    .lang-flag{
        width: 20px;
        display: inline-block;
    }
    .lang-text{
        display: inline-block;
        margin-left: 5px;
        vertical-align: top;
        margin-top: 2px;
        color:#000;
    }
 
  
.lang-dropdown{
        display: none;
        background: transparent;
        border-radius: 5px;
        margin-top: 2px;
}

  
.selecting-lang{
    padding: 3px 5px 3px 5px;
  cursor: pointer;
  &:hover{
    background: transparent ;

  }
}

 
ul > :first-child { 
  border-radius: 5px 5px 0px 0px;
 }
 
 ul > :last-child { 
  border-radius: 0px 0px 5px 5px;
 }
 
 li{
    list-style-type: none;
 }
   
  
.menu-arrow{
    display: inline-block;
  width: 10px;
  margin-left: 10px;
  vertical-align: top;
  margin-top: 6px;
}
 

    
`

export default LangSwitcher;

