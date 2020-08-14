import React from 'react';
import BtnGroupe from './BtnGroupe';
import PageOeuvres from './PageOeuvres';
import {
  Route,
  Switch,
  Link,
  useRouteMatch
} from 'react-router-dom';
import datasHolder from '../DatasHolder';

export default function PageGroupes() {
  const { url } = useRouteMatch();
  const datas = datasHolder.getDatasFromRoute(url);
  const railRoad = datasHolder.getRailRoadFromRoute(url);

  let page

  if (datas && datas[0].type === "groupe") {
    page = <section className="page page-groupes">
      <h2 className="page-groupes--title">
        {railRoad.map((step, i) => {
          return (
            <React.Fragment key={i}>
              {(i > 0) && <span> / </span>}
              <Link to={step.route} className="btn ">{step.title}</Link>
            </React.Fragment>
          )})
        }
      </h2>
      <div className="page-groupes--container">
        {datas.map((groupe, i) => {
            return (
              <BtnGroupe
                key={i}
                {...groupe}
              />
            )
          })
        }
      </div>
    </section>;
  }
  else if (datas && datas[0].type === "oeuvre") {
    page = <PageOeuvres />
  }


  if (!datas) return (<></>);
  return (
    <>
      <Switch>
        <Route path={`${url}/:url`}>
          <PageGroupes />
        </Route>
        <Route path={`${url}`}>
          {page}
        </Route>
      </Switch>
    </>
  )
}