import React, {useState} from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainPage from './MainPage';
import ProductList from './ProductList';
import UserList from './UserList';
import CategoryList from './CategoryList';



function App() {
  const [Page, setPage] = useState(0)

  const onSetPage = (n) => {
    console.log("Page " + n)
    setPage(n)
  }
  return (
    <div id="wrapper">
      {/* Sidebar */}
      <Sidebar onSetPage={onSetPage} currentPage={Page}/>

      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" class="d-flex flex-column">

        {/*<!-- Main Content -->*/}
        <div id="content">

          {/*<!-- Topbar -->*/}
          <Navbar />
          {/*<!-- Begin Page Content -->*/}
          <div className="container-fluid">
              {Page === 0 ? <MainPage/> : 
              Page === 1 ? <ProductList/> :
              Page === 2 ? <CategoryList/> :
              <UserList/>}
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
