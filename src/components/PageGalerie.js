import React, {useContext} from 'react';
import BtnOeuvre from './BtnOeuvre';
import {CatalogueContext} from './App';
import {
    Link,
    useRouteMatch
} from 'react-router-dom';
import datas from '../DatasHolder';

export default function PageGalerie(props) {
    console.log("### PageGalerie");
    const {
        images, 
    } = props;
    const { handleOpenGalerie } = useContext(CatalogueContext);
    const { url } = useRouteMatch();
    const railRoad = datas.getRailRoadFromRoute(url);

    function handleClickImg(id) {
        handleOpenGalerie(id, images);
    }

    return (
        <>
            <section className="page-groupes">
                <h2 className="page-groupes--title">
                {railRoad.map((step, i) => {
                    return (
                        <React.Fragment key={i}>
                            {(i > 0) && <span> / </span>}
                            <Link to={step.route} className="btn">{step.title}</Link>
                        </React.Fragment>
                    )
                    })}
                </h2>
                <div className="page-groupes--container">
                    {images.map((oeuvre, i) => {
                    return (
                        <BtnOeuvre 
                            key={i} 
                            position={i} 
                            {...oeuvre} 
                            handleClickImg={handleClickImg}
                            cssClass="btn--groupe-img-container"
                        />
                    )})}
                </div>
            </section>
        </>
    )
}
