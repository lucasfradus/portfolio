import React from 'react'

const HeaderButton = ({translate}) => {

    return (
        <>
            <div className="mx-auto">
                <a href="#Projects"><button className="see">{translate('intro.mywork')} <i className="fas fa-eye"></i></button></a>
            </div>
        </>
    )
}

export default HeaderButton
