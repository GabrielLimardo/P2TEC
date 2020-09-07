import React, { Component } from 'react';
import UltimoProducto from './UltimoProducto';
import Categories from './Categories';

class MainPage extends Component {

  constructor() {
    super();
    this.state = {
      infoParaCards: [],
    };
  }

  componentDidMount() {
    console.log("Montado Info");
    let url = ' http://localhost:3030/api/info';
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          infoParaCards: data.data.metrics
        })

      })

      .catch((error) => {
        console.log(error)
      })
  }

  componentDidUpdate() {
    console.log("Actualizado");
    console.log(this.state.infoParaCards);
  }

  componentWillUnmount() {
    console.log("Desmontado");
  }

  render() {
    const infoParaCards = this.state.infoParaCards;
    return (
      <React.Fragment>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 tituloDashboard">App Dashboard</h1>
        </div>
        <div className="row">
          {infoParaCards.map(function (info, idx) {
            return (
              <div className="col-md-4 mb-4" key={idx}>
                <div className={"card shadow h-100 py-2 " + info.borderColor}>
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> {info.title}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{info.value}</div>
                      </div>
                      <div className="col-auto">
                        <i className={"fas fa-2x text-gray-300 " + info.icon}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>) //<Card cardInfo={card} key={idx} />
            }
          )}
        </div>
        <div class="row">
          <UltimoProducto />
          <Categories />
        </div>
      </React.Fragment>
    )
  }
};

export default MainPage;