import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Card from './Card';
import UltimoProducto from './UltimoProducto';

const cardData = [
  {
    borderColor: "border-left-primary",
    title: "Products in Database",
    content: "135",
    icon: "fa-clipboard-list",
  },
  {
    borderColor: "border-left-success",
    title: "Amount in products",
    content: "$546.456",
    icon: "fa-dollar-sign",
  },
  {
    borderColor: "border-left-warning",
    title: "Users quantity",
    content: "38",
    icon: "fa-user-check",
  }
];


function App() {
  return (
    <div id="wrapper">
      {/* Sidebar */}
      <Sidebar />

      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" class="d-flex flex-column">

        {/*<!-- Main Content -->*/}
        <div id="content">

          {/*<!-- Topbar -->*/}
          <Navbar />
          {/*<!-- Begin Page Content -->*/}
          <div className="container-fluid">

            {/*<!-- Page Heading -->*/}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
