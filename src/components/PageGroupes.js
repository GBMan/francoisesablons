import React from 'react';
// import PageGalerie from './PageGalerie';
import BtnGroupe from './BtnGroupe';
import {
    // Route,
    // Switch, 
    useRouteMatch,
    // useParams
    Link
} from 'react-router-dom';
import datas from '../DatasHolder';

export default function PageGroupes(props) {
    console.log("### PageGroupes");
    const {
        groupes
    } = props;

    
    const { url } = useRouteMatch();
    const railRoad = datas.getRailRoadFromRoute(url);
    console.log("groupes", groupes);
    console.log("datas", datas.getDatasFromRoute(url));
    // console.log("path", path);
    // console.log("url", url);
    // let { categorie } = useParams();
    // let params = useParams();
    // console.log("params", params);

    return (
      <>
      <section className="page-groupes">
        <h2 className="page-groupes--title">
          {railRoad.map((step, i) => {
            return (
              <Link key={i} to={step.route} className="btn">{step.title}</Link>
            )
            })}
        </h2>
        <div className="page-groupes--container">
          {groupes.map((groupe) => {
          return (
              <BtnGroupe 
                  key={groupe.id} 
                  {...groupe} 
              />
          )})}
        </div>
      </section>
      </>
    )
}