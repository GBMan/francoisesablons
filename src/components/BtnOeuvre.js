import React from 'react'

export default function BtnOeuvre(props) {
    const { 
        // title,
        // infos,
        // dimensions,
        path160,
        path320,
        alt
    } = props;

    return (
        <div className="btn btn--serie  btn--serie-img-container">
            <img className="btn--img" src={path160} srcSet={path160+" 1x, "+path320+" 2x"} sizes="160"  alt={alt} />
        </div>
    )
}
