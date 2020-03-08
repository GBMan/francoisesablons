import React from 'react';
import {
    Link, 
//     Route,
//     Switch, 
//     useRouteMatch,
//     useParams
} from 'react-router-dom';

export default function BtnCategorie(props) {
    const {
        id,
        title,
        route,
        path160,
        path320,
        alt
    } = props;

    return (
        <Link to={route} className="btn btn--categorie" key={id}>
            <div className="btn btn--img-container btn--categorie-img">
                <img className="btn--img" src={path160} srcSet={path160+" 1x, "+path320+" 2x"} sizes="160"  alt={alt} />
            </div>
            <div className="btn--categorie-txt">{title}</div>
        </Link>
    )
}
