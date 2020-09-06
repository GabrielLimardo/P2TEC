import React, {Component} from 'react';

class ButtonStateFull extends Component {

    cambiarColor(){
            document.querySelector('body').style.background = "#dcdcdc"
    }

    volverABlanco(){
        document.querySelector('body').style.background = "#fff"
    }

    render(){
        return (
            <button className="btn btn-info mb-3"
            onClick={ () => { this.cambiarColor() } }
            onDoubleClick= {() => { this.volverABlanco() }}>
            Cambiar el fondo
            </button>
        )
    }
}

export default ButtonStateFull;