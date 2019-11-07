import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);      
            this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        window.alert('hola! esta alerta existe solo para mostrar que el boton tiene una accion relacionada')
    }

    render() {
        return (
            <button type='button' 
                    className={`btn btn--${this.props.theme} btn--${this.props.size} ${this.props.classN}`} 
                    onClick={this.handleClick}>
             {this.props.children}
            </button>
        );
    }
}

export default Button;