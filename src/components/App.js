import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../scss/app.scss';
import Header from './Header';
import Footer from './Footer';
import PageHome from './PageHome';
import PageCategorieSelector from './PageCategorieSelector';
import PageGroupes from './PageGroupes';
import datasHolder from '../DatasHolder';
// import PageSeries from './PageSeries';
// import PageSerie from './PageSerie';
import Galerie from './Galerie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useLocation
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

export const CatalogueContext = React.createContext();

function App() {
  console.log("### App");
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  const [categories, setCategories] = useState([]);
  const [positionImageGalerie, setPositionImageGalerie] = useState(null);
  const [imagesGalerie, setImagesGalerie] = useState(null);
  // let {location} = useLocation();

  useEffect(() => {
    let cancel;
    axios(
      {
          method: 'GET',
          url: 'http://localhost:3000/assets/categories-francoise-sablons.json'
      }
    )
    .then((response) => {
      console.log("%cDatas loaded", "color:#0c0");
      datasHolder.setDatas(response.data);
      setCategories((prevCategories) => {return datasHolder.getDatas()});
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
  //datas.setDatas(categories);

  const catalogueContextValue = {
    handleOpenGalerie:handleOpenGalerie,
    handleCloseGalerie:handleCloseGalerie
  };

  function handleOpenGalerie(positionImage, images) {
    setPositionImageGalerie(positionImage);
    setImagesGalerie(images);
  }

  function handleCloseGalerie() {
    setImagesGalerie(null);
    setPositionImageGalerie(null);
  }

  return (
    <>
      <CatalogueContext.Provider value={catalogueContextValue}>
        {imagesGalerie && <Galerie positionImg={positionImageGalerie} images={imagesGalerie}></Galerie>}
        <Router>
          <Header />
          <Switch>
            {/* <Route path={`:url1/:urlGalerie`}>
              <PageGroupes categories={categories} />
            </Route> */}
            <Route path="/:urlCategorie">
              <PageCategorieSelector categories={categories} />
              {/* <PageGroupes categories={categories} /> */}
            </Route>
            <Route path="/">
              <PageHome categories={categories} />
            </Route>
          </Switch>
          <Footer categories={categories} />
        </Router>
      </CatalogueContext.Provider>
    </>
  );
}

export default App;