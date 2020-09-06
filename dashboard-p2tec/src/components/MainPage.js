import React, { Component } from 'react';
import Card from './Card';
import UltimoProducto from './UltimoProducto';
import Categories from './Categories';
import ButtonStateFull from './ButtonStateFull';
import ProductList from './ProductList';

const cardData = [
  {
    borderColor: "border-left-primary",
    title: "Products in Database",
    content: "135",
    icon: "fa-clipboard-list"
  },
  {
    borderColor: "border-left-success",
    title: "Amount in products",
    content: "$546.456",
    icon: "fa-dollar-sign"
  },
  {
    borderColor: "border-left-warning",
    title: "Users quantity",
    content: "38",
    icon: "fa-user-check"
  }
];

class MainPage extends Component {

  constructor(){
    super();
    this.state= {
      infoParaCards: [],
      
    };
  }

  componentDidMount() {
    console.log("Montado Info");
    let url = 'localhost:3030/api/info';
    fetch(url)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        console.log(data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidUpdate() {
    console.log("Actualizado");
  }

  componentWillUnmount() {
    console.log("Desmontado");
  }

  render () {
    return (
    <React.Fragment>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 tituloDashboard">App Dashboard</h1>
      </div>
      <div className="row">
        {cardData.map(function (card, idx) {
          return <Card cardInfo={card} key={idx} />
        }
        )}
      </div>
      <div class="row">
        <UltimoProducto />
        <Categories />
        <ProductList />
      </div>
      <ButtonStateFull />
    </React.Fragment>
    )
  }
};

export default MainPage;