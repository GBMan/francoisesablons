import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../scss/app.scss';
import Header from './Header';
import Footer from './Footer';
import PageHome from './PageHome';
import PageGroupes from './PageGroupes';
import datasHolder from '../DatasHolder';
import Galerie from './Galerie';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DevInfos from './DevInfos';

export const CatalogueContext = React.createContext();

export default function App() {
  console.log("### App");
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  const dev = false;
  const [categories, setCategories] = useState([]);
  const [positionImageGalerie, setPositionImageGalerie] = useState(null);
  const [imagesGalerie, setImagesGalerie] = useState(null);
  // let {location} = useLocation();

  useEffect(() => {
    let cancel;
    axios({
      method: 'GET',
      url: 'http://localhost:3000/assets/categories-francoise-sablons.json'
    })
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
      {dev && <DevInfos />}
      <CatalogueContext.Provider value={catalogueContextValue}>
        {imagesGalerie && <Galerie positionImg={positionImageGalerie} images={imagesGalerie}></Galerie>}
        <Router>
          <Header />
          <Switch>
            <Route path="/:url">
              <PageGroupes />
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