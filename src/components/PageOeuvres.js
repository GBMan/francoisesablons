import React, { useContext } from 'react';
import { CatalogueContext } from './App';
import BtnOeuvre from './BtnOeuvre';
import {
  Link,
  useRouteMatch
} from 'react-router-dom';
import datasHolder from '../DatasHolder';

export default function PageOeuvres() {
  const { handleOpenGalerie } = useContext(CatalogueContext);
  const { url } = useRouteMatch();
  const datas = datasHolder.getDatasFromRoute(url);
  const railRoad = datasHolder.getRailRoadFromRoute(url);

  function handleClickImg(id) {
    handleOpenGalerie(id, datas);
  }


  if (!datas) return (<></>);
  return (
    <>
      <section className="page page-oeuvres">
        <h2 className="page-oeuvres--title">
          {railRoad.map((step, i) => {
            return (
              <React.Fragment key={i}>
                {(i > 0) && <span> / </span>}
                <Link to={step.route} className="btn ">{step.title}</Link>
              </React.Fragment>
            )})
          }
        </h2>
        <div className="page-oeuvres--container">
          {datas.map((oeuvre, i) => {
              return (
                <BtnOeuvre
                  key={i}
                  position={i}
                  {...oeuvre}
                  handleClickImg={handleClickImg}
                  cssClass="btn--oeuvre-img-container"
                />
              )
            })
          }
        </div>
      </section>
    </>
  )
}