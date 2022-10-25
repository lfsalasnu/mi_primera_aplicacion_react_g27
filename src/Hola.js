import React, {Component} from "react";
//class Hola extends React.Component{
class Hola extends Component{
    render(){
        return (<div className="display-1 text-white">Hola {this.props.nombre}</div>);    
    }
    
}

export default Hola;
        
    