import React from 'react';
// import { Link } from 'react-router-dom';

export default function Footer(props) {
    const { 
        categories, 
    } = props;

    return (
        <footer className="App-footer">
            <ul className="App-footer--left">
                {categories.map((categorie) => {
                    return <li key={categorie.title}><a className="btn btn-link App-footer--link" href={categorie.route}>{categorie.title}</a></li>;
                })}
            </ul>
            <ul className="App-footer--right">
                <li><a className="btn btn-link App-footer--link" href="tel:+33384516336">+33 (0)3 84 51 63 36</a></li>
                <li><a className="btn btn-link App-footer--link" href="mailto:france@sablons.com">france@sablons.com</a></li>
                <li><span className="App-footer--right-small">made by Charles</span></li>
            </ul>
        </footer>
    )
}
