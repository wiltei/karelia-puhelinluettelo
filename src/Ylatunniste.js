import React from "react"
import PropTypes from 'prop-types'

const Ylatunniste = (props) => {
    // objektin destrukturoinnista kyse?
    const { turvataso } = props;
    return (
        <nav className="navbar navbar-expand-smnavbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">
                    Yhteystietoja
                </a>
                <pre>tietoturvataso {turvataso}</pre>
            </div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Alkuun
                        </a>
                    </li>
                </ul>
        
        </nav>
    );
};

// defaultti, jota käyttää siinä tapauksessa ettei elementin ilmentymässä ole ko. attribuuttia
Ylatunniste.defaultProps = {
    turvataso:"pieni",
}

// varmistetaan että käytetään merkkijonoa turvatason sisältönä (tai muuten tulee varoitus)
// elikkäs tietotyyppien tarkistus ilmeisesti kyseessä. joka on tärkeää. kaitsiis
Ylatunniste.propTypes = {
    turvataso: PropTypes.string.isRequired,
};

export default Ylatunniste;