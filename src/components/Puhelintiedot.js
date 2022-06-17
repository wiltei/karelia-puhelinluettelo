import React, { Component } from 'react'
import Puhelintieto from "./Puhelintieto"
import { Consumer } from '../context';

export default class Puhelintiedot extends 
Component {
    state = {
            yhteystiedot: [
                {
                    id: 1,
                    nimi: "Darth Vader",
                    puhelin: "044-2346343"
                },
                {
                    id: 2,
                    nimi: "Sheev Palpatine",
                    puhelin: "044-144044"
                },
                {
                    id: 3,
                    nimi: "Jar-Jar Binks",
                    puhelin: "123-4567890"
                },
            ],

        };
    
poistaPuhelintieto = (id) => {
    const { yhteystiedot } = this.state;

    const uudetYhteystiedot = yhteystiedot.filter(
        (yhteystieto) => yhteystieto.id !== id
    );
    this.setState({
        yhteystiedot: uudetYhteystiedot,
    });
};
    
// Ennen putsausta diassa 35
/*     export default class Puhelintiedot extends Component {
        constructor() {
            super();
            // This state is to be equal to an object. As it is here,
            // the initial state contain many states?
            this.state = {
                yhteystiedot: [
                    {
                        id: 1,
                        nimi: "Darth Vader",
                        puhelin: "044-2346343"
                    },
                    {
                        id: 2,
                        nimi: "Sheev Palpatine",
                        puhelin: "044-144044"
                    },
                    {
                        id: 3,
                        nimi: "Zhoran Dendxara",
                        puhelin: "123-4567890"
                    },
                ],
    
            };
    
        } 
        */

        render() {
            return (
                <Consumer>
                    {(value) => {
                        const { yhteystiedot } = value;
                        return (
                            <div>
                                {yhteystiedot.map((yhteystieto) => (
                                    <Puhelintieto
                                    key={yhteystieto.id}
                                    yhteystieto={yhteystieto}
                                    deleteClickHandler={this.poistaPuhelintieto.bind(
                                        this,
                                        yhteystieto.id
                                    )}
                                    />
                                ))}
                            </div>
                        );
                    }}
                </Consumer>
            )
        }

/*     render() {
        const { yhteystiedot } = this.state;
        return (
          <div>
            {yhteystiedot.map((yhteystieto) => (
              <Puhelintieto 
              key={yhteystieto.id} 
              yhteystieto={yhteystieto}
              deleteClickHandler={this.poistaPuhelintieto.bind(
                this,
                yhteystieto.id
                )}
              />
            ))}
          </div>
        );
    } */
}

    // Ennen putsausta diassa 35
    /* render() {
        const { yhteystiedot } = this.state;
        return (
          <div>
            {yhteystiedot.map((yhteystieto) => (
              <Puhelintieto nimi={yhteystieto.nimi} puhelin={yhteystieto.puhelin}/>
            ))}
          </div>
        );
    }} */