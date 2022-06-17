import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Puhelintieto extends Component {
  state = {
    naytaPuhelintieto: false,
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };

  onShowClick = (e) => {
    this.setState({ naytaPuhelintieto: !this.state.naytaPuhelintieto});
    console.log(this.state);
  };

  render() {
    // curly braces with variable declaration are destructuring assignment
    const { nimi, puhelin } = this.props.yhteystieto;
    const { naytaPuhelintieto } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {nimi}{" "}
          <button
            className="button"
            onClick={this.onShowClick.bind(this)}>
            +
          </button>
          <button className="button_right" onClick={this.onDeleteClick}>
            Poista
          </button>


        </h4>
        {naytaPuhelintieto ? (
          <ul className="list-group">
            <li className="list-group-item">Puhelin: {puhelin}</li>
          </ul>
        ) : null}
              </div>
    )
  }
}

Puhelintieto.propTypes = {
    yhteystieto: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired,
};

//ennen putsausta diassa 36
/* export default class Puhelintieto extends Component {
  render() {
    // curly braces with variable declaration are destructuring assignment
    const { nimi, puhelin } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>{nimi}</h4>
        <ul className="list-group">
            <li className="list-group-item">Puhelin: {puhelin}</li>
        </ul>
              </div>
    )
  }
} */


// ennen putsausta dia 37, what is this....
/* export default class Puhelintieto extends Component {
  render() {
    // curly braces with variable declaration are destructuring assignment
    const { yhteystieto } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>{yhteystieto.nimi}</h4>
        <ul className="list-group">
            <li className="list-group-item">Puhelin: {yhteystieto.puhelin}</li>
        </ul>
              </div>
    )
  }
} */