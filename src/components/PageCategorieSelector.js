import React from 'react';
import PageGroupes from './PageGroupes';
// import PageGalerie from './PageGalerie';
// import { categories2 } from './App';
import {
    Route,
    Switch, 
    useRouteMatch,
    // useParams,
    // useLocation,
    // useHistory
} from 'react-router-dom';

export default function PageCategorieSelector(props) {
    console.log("### PageCategorieSelector");
    const {
        categories
    } = props;

    const { path } = useRouteMatch();
    // let pathname = useLocation().pathname;
    // let { urlCategorie } = useParams();
    // let data = categories.find((categorie) => {
    //     return categorie.idRoute === urlCategorie;
    // });

    if (!categories) {
        return (<></>);
    }

    return (
      <>
        <Switch>
          <Route path={`${path}/:urlGalerie`}>
              {/* <PageGroupes {...categories} /> */}
              <PageGroupes />
          </Route>
          <Route path={`${path}`}>
              {/* <PageGroupes {...categories} /> */}
              <PageGroupes />
          </Route>
        </Switch>
      </>
    )
}