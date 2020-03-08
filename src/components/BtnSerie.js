import React from 'react';
import { Link } from 'react-router-dom';

export default function BtnSerie(props) {
    const {
        title,
        route,
        path160,
        path320,
        path640,
        path960,
        path1280,
        path1600,
        alt
    } = props;

    return (
        <Link className="btn btn--serie btn--serie-img-container" to={route}>
            <img className="btn--img" src={path160} srcSet={path160+" 160w, "+path320+" 320w, "+path640+" 640w, "+path960+" 960w, "+path1280+" 1280w, "+path1600+" 1600w"} sizes="(min-width:320px) 160w, (min-width:640px) 320w, (min-width:1280px) 640w, (min-width:2560px) 960w" alt={alt} />
            <span className="btn--serie-title">{title}</span>
        </Link>
    )
}
