import React, { Component } from "react";

class Navegacion extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">{this.props.titulo}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-current="page" href="#">{this.props.enlace2}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">{this.props.enlace3}</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" hidden={this.props.enlace4h}>
                                {this.props.enlace4}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">{this.props.enlace41}</a></li>
                                    <li><a className="dropdown-item" href="#">{this.props.enlace42}</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">{this.props.enlace43}</a></li>
                                </ul>
                            </li>
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                                <button className="btn btn-outline-secondary" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navegacion;