import React, { Component } from 'react'
import ClipLoader from "react-spinners/ClipLoader";


class UltimoProducto extends Component {

    constructor() {
        super();
        this.state = {
            lastProduct: undefined,
        };
    }

    componentDidMount() {
        let url = 'http://localhost:3030/api/info';
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(data => {
                console.log(data.data)
                this.setState({
                    lastProduct: data.data.lastProduct
                })

            })

            .catch((error) => {
                console.log(error)
            })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Up: " + JSON.stringify(this.state.lastProduct))
    }

    render() {
        return (
            this.state.lastProduct ?
                <div class="col-lg-6 mb-4">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Last product in Database: {this.state.lastProduct.name}</h6>
                        </div>
                        <div class="card-body">
                            <div class="text-center">
                                <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src={"http://localhost:3030/img/" + this.state.lastProduct.image} alt="foto" />
                            </div>
                            <p>{this.state.lastProduct.descripcion}</p>
                            <a target="_blank" rel="nofollow" href="/">View product detail</a>
                        </div>
                    </div>
                </div> : <ClipLoader
                    size={150}
                    color={"#fff"} loading={true} />
        )
    }
};

export default UltimoProducto;