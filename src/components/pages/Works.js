import React from 'react'
import Project from '../layouts/Project'
import { projects, miscellaneous, section3Title, section4Title } from '../../profile'

const Works = ({translate}) => {
    return (
        <div id="Projects" className="effect2">

        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{translate('projects.past')}</h1>
                    </div>
                </>
                <div className="row">
                {projects && projects.map((x) => 
                <Project key={x.id} id={x.id} url={x.url} name={x.name} skills={x.skills}/>
                )}
                </div>
            </div>

     
        </>
        </div>
    )
}

export default Works
