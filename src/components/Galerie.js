import React, {useContext} from 'react';
import {CatalogueContext} from './App';
import BtnOeuvre from './BtnOeuvre';
import ReactTouchEvents from 'react-touch-events'


export default function Galerie(props={}) {
    console.log("### Galerie");
    const {
        positionImg,
        images
    } = props;
    const { handleOpenGalerie, handleCloseGalerie } = useContext(CatalogueContext);
    
    const imgsLength = images.length;
    const positionPrevious = (positionImg-1+imgsLength) % imgsLength;
    const positionNext = (positionImg+1) % imgsLength;
    const { path160, path320, path640, path960, path1280, path1600, alt } = {...images[positionImg], ...images[positionImg].imgs};

    function handleSwipe (direction) {
        switch (direction) {
            case "left":
                handleOpenGalerie(positionNext, images);
                break;
            case "right":
                handleOpenGalerie(positionPrevious, images);
                break;
            case "bottom":
            case "top":
            default:
                break;
        }
    }

    function onClickImg(position, event) {
        handleOpenGalerie(position, images);
        event.stopPropagation();
    }

    function handleClickImg(id, event) {
        handleOpenGalerie(id, images);
        event.stopPropagation();
    }

    function onClickClose(event) {
        console.log("Les lèvres de Karine se referme sur mon sexe.");
        handleCloseGalerie();
        event.stopPropagation();
    }
    return (
        <>
            <div className="App-galerie--container" onClick={(event) => {return onClickClose(event);}}>
                <div className="btn App-galerie--arrow App-galerie--arrow-left icon-left" onClick={(event) => {return onClickImg(positionPrevious, event);}}></div>
                <div className="btn App-galerie--arrow App-galerie--arrow-right icon-right" onClick={(event) => {return onClickImg(positionNext, event);}}></div>
                
                <ReactTouchEvents onSwipe={ handleSwipe }>
                    <div className="App-galerie--img-container">
                        <img src={path160} srcSet={path160+" 160w, "+path320+" 320w, "+path640+" 640w, "+path960+" 960w, "+path1280+" 1280w, "+path1600+" 1600w"} sizes="(min-width:320px) 160w, (min-width:640px) 320w, (min-width:1280px) 640w, (min-width:2560px) 960w" alt={alt} />
                    </div>
                </ReactTouchEvents>
                <div className="App-galerie--thumbs-container">
                    {images.map((oeuvre, i)=> {
                        const selectedClass = (positionImg === i) ? "App-galerie--thumb-selected" : "";
                        return (
                            <BtnOeuvre 
                                key={i} 
                                position={i} 
                                {...oeuvre} 
                                handleClickImg={handleClickImg}
                                cssClass={`App-galerie--thumbs ${selectedClass}`}
                            />
                        )
                    })}
                </div>
                <div className="App-galerie--counter-container">
                    {positionImg+1}/{images.length}
                </div>
                <div className="btn App-galerie--close-bg" onClick={onClickClose}></div>
            </div>
        </>
    )
}
