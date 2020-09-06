import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainPage from './MainPage';


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
              <MainPage/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
