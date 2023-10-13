import React, { Component } from 'react';
import PropTypes from "prop-types";

class Kpi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidad: ""
    };
  }

  apiCall(url, consecuencia) {
    fetch (url)
      .then (response => response.json())
      .then ( data => consecuencia(data))
      .catch (error => console.log(error))

  }

  componentDidMount() {
    this.apiCall(url, mostrarData)
  }

  mostrarData = (data) => {
    this.setState({
      cantidad: data.cantidad
    })
  }

  componentDidUpdate() {
    // Your code for component update
  }

  render() {
    let contenido;
    if (this.state.cantidad === "") {
      contenido = <p>Cargando...</p>;
    } else {
      contenido = <p>{this.state.cantidad}</p>;
    }

    const { children, cantidad } = this.props;

    return (
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{children}</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">{cantidad}</div>
            </div>
            <div className="col-auto">
              <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Kpi.propTypes = {
  children: PropTypes.node,
  cantidad: PropTypes.string
};

export default Kpi;
