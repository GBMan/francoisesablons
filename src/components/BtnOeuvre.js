import React from 'react';

export default function BtnOeuvre(props) {
    const { 
        // title,
        // infos,
        // dimensions,
        position, 
        path160,
        path320,
        alt, 
        handleClickImg,
        cssClass=""
    } = props;

    function onClickImg(position, event) {
        handleClickImg(position, event);
    }

    return (
        <div className={"btn btn--img-container "+cssClass}>
            <img className="btn--img" src={path160} srcSet={path160+" 1x, "+path320+" 2x"} sizes="160"  alt={alt} onClick={(event) => {return onClickImg(position, event);}} />
        </div>
    )
}
