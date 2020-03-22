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
    const { alt } = {...images[positionImg], ...images[positionImg].imgs};
    let a = []
    for (let path in images[positionImg].imgs) {
        a.push(`${images[positionImg].imgs[path]} ${path}w`)
    }
    const srcSet = a.join(", ")

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
                        <img 
                            src={images[positionImg].imgs[0]} 
                            srcSet={srcSet} 
                            sizes="100vw" 
                            alt={alt} 
                        />
                    </div>
                </ReactTouchEvents>
                <div className="App-galerie--thumbs-container">
                    {images.map((oeuvre, i) => {
                        const selectedClass = (positionImg === i) ? "App-galerie--thumb-selected" : "";
                        return (
                            <BtnOeuvre 
                                key={i} 
                                position={i} 
                                {...oeuvre} 
                                handleClickImg={handleClickImg}
                                cssClass={`App-galerie--thumbs ${selectedClass}`}
                                sizes="80px"
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
