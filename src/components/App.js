import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../scss/app.scss';
import Header from './Header';
import Footer from './Footer';
import PageHome from './PageHome';
import PageCategorieSelector from './PageCategorieSelector';
// import datas from './DatasHolder';
// import PageSeries from './PageSeries';
// import PageSerie from './PageSerie';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useLocation
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

function App() {
  console.log("### App");
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  const [categories, setCategories] = useState([]);
  // let {location} = useLocation();

  useEffect(() => {
    console.log("Launched");
    let cancel;
    axios(
      {
          method: 'GET',
          url:'http://localhost:3000/assets/categories-francoise-sablons.json', 
      }
    )
    .then((response) => {
      setCategories((prevCategories) => {return response.data});
      console.log("Loaded");
      // setLoading(false);
    })
    .catch((error) => {
      console.log(error)
      if (axios.isCancel(error))
          return;
      // setError(true);
    });
    return (() => {return cancel()});
  },
  []);

  return (
    <>
      <Router>
        <Header />
          <Switch>
            <Route path="/:urlCategorie">
              <PageCategorieSelector categories={categories} />
            </Route>
            <Route path="/">
              <PageHome categories={categories} />
            </Route>
          </Switch>
        <Footer categories={categories} />
      </Router>
    </>
  );
}

export default App;