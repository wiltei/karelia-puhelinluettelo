// kurssin diasta 45
//import { render } from "@testing-library/react";
import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
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
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
    
};


export const Consumer = Context.Consumer;