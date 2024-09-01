import React from 'react';
import data from './data'
import Feature from './Feature'

function Header()
{
    const items=data;
    const feature=items.map((item)=>{
        return(
            <Feature data={item}></Feature>
        )
    })
    return(
        <div className="section_2">
            <div className="section_2_statements">
                <h1>No hidden fees ever.</h1>
                <h3>no joining fees.</h3>
                <h3>no annual fees.</h3>
                <h3>no rewards redemption fees.</h3>
            </div>
            <div style={{margin:'3rem'}}>
                {feature}
            </div>
        </div>
    )
}

export default Header;