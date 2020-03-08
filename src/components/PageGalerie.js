import React from 'react';
import BtnOeuvre from './BtnOeuvre';
import {
    Link,
    // Route,
    // Switch, 
    useRouteMatch,
    useParams
} from 'react-router-dom';

export default function PageGalerie(props) {
    console.log("### PageGalerie");
    const {
        title,
        images, 
        series 
    } = props;

    let { path, url } = useRouteMatch();
    let { urlGalerie } = useParams();
    console.log("series", series);
    console.log("images", images);


    // Temp
    let newImages;
    // if (!images) {
    //     let tempSeries = series.find((serie) => {return serie.idRoute === urlGalerie});
    //     if (tempSeries) {
    //         newImages = tempSeries.images;
    //     }
    //     else {
    //         return (<></>);
    //     }
    // }
    // else {
    //     newImages = images;
    // }
    newImages = images;
    console.log("newImages", newImages);

    return (
        <>
            <section className="page-series">
                <h2 className="page-series--title"><Link className="btn" to={url}>{newImages.title}</Link></h2>
                <div className="page-series--container">
                    {newImages.map((oeuvre) => {
                    return (
                        <BtnOeuvre 
                            key={oeuvre.id} 
                            {...oeuvre} 
                        />
                    )})}
                </div>
            </section>
        </>
    )
}
