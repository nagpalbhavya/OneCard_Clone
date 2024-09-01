import React from 'react';
import img from "./images/section_1_cards.png"
import img2 from "./images/section_1_banks.png"

function Header()
{
    return(
        <div className="section_1">
            <div className="flex_div_1">
                <h1 className="section_1_tagline">Say Hi to <br/></h1>
                <h1 className="section_1_onecard">OneCard</h1>
                <p className="section_1_hash">#FlauntYourMetal</p>
                <p className="section_1_info">India’s best metal credit card. Built with full-stack tech. Backed by the principles of simplicity, transparency, and giving back control to the user.</p>
                <button className="section_1_btn">Get OneCard Now!</button>
                <p style={{marginTop:'2rem', fontSize:'18px'}}>Select Authorised issuers:</p>
                <img src={img2} style={{height:'75px', width:'280px',objectFit:'contain'}}/>
            </div>
            <div>
                <img src={img} className="section_1_img"/>
            </div>
        </div>
    )
}

export default Header;