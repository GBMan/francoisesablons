import React, {useContext} from 'react';
import {CatalogueContext} from './App';
import BtnGroupe from './BtnGroupe';
import BtnOeuvre from './BtnOeuvre';
import {
    useRouteMatch,
    Link
} from 'react-router-dom';
import datasHolder from '../DatasHolder';

export default function PageGroupes(props) {
    console.log("### PageGroupes");
    const {
        categories
    } = props;
    const { handleOpenGalerie } = useContext(CatalogueContext);
    const { url } = useRouteMatch();
    const datas = datasHolder.getDatasFromRoute(url);
    const railRoad = datasHolder.getRailRoadFromRoute(url);

    function handleClickImg(id) {
        handleOpenGalerie(id, datas);
    }
    // console.log(groupes);
    console.log(categories);
    console.log(datas);
    if (!datas) return <></>;
    // console.log(datas[0].type === "groupe");
    // console.log(datas[0].type === "oeuvre");
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
          {(datas[0].type === "groupe") &&
            datas.map((groupe, i) => {
              return (
                <BtnGroupe 
                    key={i} 
                    {...groupe} 
                />
              )})}
          {(datas[0].type === "oeuvre") &&
            datas.map((oeuvre, i) => {
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