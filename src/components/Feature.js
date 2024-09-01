import React from 'react';
import data from './data'

function Feature(props)
{
    if(props.data.id%2!=0)
    return(
        <div style={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>
            <div>
                <img src={props.data.img} style={{height:'auto',width:'420px'}}/>
            </div>
            <div className="feature_text">
                <h1 className="feature_text_title ralign">{props.data.title}</h1>
                <p className="feature_text_desc ralign">{props.data.desc}</p>
            </div>
        </div>
    )
    else
    return(
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div className="feature_text">
                <h1 className="feature_text_title">{props.data.title}</h1>
                <p className="feature_text_desc">{props.data.desc}</p>
            </div>
            <div>
                <img src={props.data.img} style={{height:'auto',width:'420px'}}/>
            </div>
        </div>
    )
}

export default Feature;