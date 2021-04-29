import React from 'react';
import HeaderButton from '../layouts/HeaderButton'
import LangSwitch from '../layouts/LangSwitcher'

const Header = ({translate}) => {


    const scrollTo = () => {
        window.scrollTo({
            top: 100000,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            <div className="Header">
                <h1>{translate('intro.name')}</h1>
            <p className="line-1 anim-typewriter">{translate('intro.porfolioln1')} <mark>{translate('intro.porfolioln2')}</mark> </p>
                <LangSwitch/>
                <HeaderButton translate={translate} />
            </div>
        </div>
    )
    
}


export default Header;