import React from 'react';
import PageGalerie from './PageGalerie';
import BtnSerie from './BtnSerie';
import {
    Route,
    Switch, 
    useRouteMatch,
    useParams
} from 'react-router-dom';

export default function PageSeries(props) {
  console.log("### PageSeries");
    const {
        title, 
        series
    } = props;

    let { path, url } = useRouteMatch();
    console.log("path", path);
    console.log("url", url);
    // console.log("categories", categories);
    // let { categorie } = useParams();
    let params = useParams();
    console.log("params", params);

    return (
      <>
      <section className="page-series">
        <h2 className="page-series--title">{title}</h2>
        <div className="page-series--container">
          {series.map((serie) => {
          return (
              <BtnSerie 
                  key={serie.id} 
                  {...serie} 
              />
          )})}
        </div>
      </section>
        {/* <Switch>
          <Route path={`${path}/:sub`}>
            <PageGalerie {...series[0]} />
          </Route>
          <Route path={`${path}`}>
            <section className="page-series">
              <h2 className="page-series--title">{title}</h2>
              <div className="page-series--container">
                {series.map((serie) => {
                return (
                    <BtnSerie 
                        key={serie.id} 
                        {...serie} 
                    />
                )})}
              </div>
            </section>
          </Route>
        </Switch> */}
      </>
    )
}