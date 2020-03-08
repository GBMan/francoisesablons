import React from 'react';
import PageSeries from './PageSeries';
import PageGalerie from './PageGalerie';
// import { categories2 } from './App';
import {
    Route,
    Switch, 
    useRouteMatch,
    useParams,
    useLocation,
    useHistory
} from 'react-router-dom';

export default function PageCategorieSelector(props) {
    console.log("### PageCategorieSelector");
    const {
        // title, 
        // series, 
        categories, 
    } = props;

    let { path, url } = useRouteMatch();
    console.log("path", path);
    console.log("url", url);
    console.log("categories", categories);
    let location = useLocation();
    console.log("location", location);
    let pathname = useLocation().pathname;
    console.log("pathname", pathname);
    let history = useHistory();
    console.log("history", history);
    let { urlCategorie } = useParams();
    console.log("urlCategorie", urlCategorie);
    let data = categories.find((categorie) => {
        return categorie.idRoute === urlCategorie;
    });
    console.log("data", data);
    let page;
    if (data) {
        if (data.hasOwnProperty("series")) {
            console.log("Séries");
            if (pathname && pathname.split("/").length > 2) {
                console.log("Séries -> Galerie");
                data = data.series.find((serie) => {
                    return serie.idRoute === pathname.split("/")[2];
                });
                page = <PageGalerie {...data} />;
            } 
            else {
                console.log("Séries");
                page = <PageSeries {...data} />;
            }
        }
        else {
            console.log("Galerie");
            page = <PageGalerie {...data} />;
        }
    }
    else {
        return (<></>);
    }

    return (
      <>
        <Switch>
          <Route path={`${path}/:urlGalerie`}>
              {page}
          </Route>
          <Route path={`${path}`}>
              {page}
          </Route>
        </Switch>
      </>
    )
}