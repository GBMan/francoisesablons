import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="App-header">
            <h1><Link to="/" className="btn App-header--h1-link">Françoise Sablons</Link></h1>
            <aside className="App-header--right">
                <a className="btn btn-link App-header--link" href="tel:+33384516336">+33 (0)3 84 51 63 36</a><br />
                <a className="btn btn-link App-header--link" href="mailto:france@sablons.com">france@sablons.com</a>
            </aside>
        </header>
    )
}
