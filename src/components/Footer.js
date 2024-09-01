import React from 'react';
import img1 from './images/footer_img1.svg'
import img2 from './images/footer_img2.svg'
import github from './images/github.png'
import linkedin from './images/linkedin.png'

function Header()
{
    return(
        <div style={{display:'flex', flexDirection:'column'}} className="footer">
            <img src={img1}/>
            <img src={img2}/>
            <h3>We are all ears!</h3>
            <p>We are a new kid on the block, eager to learn.<br/>All ideas and suggestions are welcome.</p>
            <p style={{marginTop:'4rem', fontSize:'10px'}}>This is a project made by Bhavya Nagpal. This is not intended for any illegal or unjust practices.<br/>June 2023</p>
        </div>
    )
}

export default Header;