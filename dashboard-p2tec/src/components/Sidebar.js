import React from 'react';

function Sidebar(props) {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/*  < !--Sidebar - Brand-- >*/}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="logoP2tec">
                    <img src="./images/numero.png" className="logoP2tec" alt="Logo P2Tec" />
                </div>
                <div className="sidebar-brand-text mr-3">Admin</div>
            </a>

            {/*<!-- Divider -->*/}
            <hr className="sidebar-divider my-0" />

            {/*<!-- Nav Item - Dashboard -->*/}
            <li className={"nav-item " + (props.currentPage === 0 ? "active" : "")} onClick={(e) => props.onSetPage(0)}>
                <div className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></div>
            </li>

            {/*<!-- Divider -->*/}
            <hr className="sidebar-divider" />

            {/*<!-- Heading -->*/}
            <div className="sidebar-heading">Actions</div>

            {/*<!-- Nav Item - Pages -->*/}
            <li className={"nav-item " + (props.currentPage === 1 ? "active" : "")} onClick={(e) => props.onSetPage(1)}>
                <div className="nav-link collapsed">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Productos</span>
                </div>
            </li>

            {/*<!-- Nav Item - Charts -->*/}
            <li className={"nav-item " + (props.currentPage === 2 ? "active" : "")} onClick={(e) => props.onSetPage(2)}>
                <div className="nav-link collapsed">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Categorías</span>
                </div>
            </li>

            {/*<!-- Nav Item - Tables -->*/}
            <li className={"nav-item " + (props.currentPage === 3 ? "active" : "")} onClick={(e) => props.onSetPage(3)}>
                <div className="nav-link collapsed">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Usuarios</span>
                </div>
            </li>

            {/*<!-- Divider -->*/}
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    );
}

export default Sidebar;