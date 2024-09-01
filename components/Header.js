import React from 'react';
import img from "../public/images/header_img.svg"

function Header()
{
    return(
        <div>
            <img src={img} className="header_img"/>
        </div>
    )
}

export default Header;