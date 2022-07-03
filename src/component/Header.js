import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <div className="mb-5">
            <nav className="navbar px-3 py-0 navbar-expand-lg navbar-dark bg-dark text-white header ">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <h1 className="logo">Counter App </h1>
                    </Link>
                    <button
                        className="navbar-toggler mobile-expand-menu"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon">
                            <i class="fas fa-bars"></i>
                        </span>
                    </button>
                    
                        <div
                            className="collapse navbar-collapse justify-content-end"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav menu">
                                <li className="nav-item">
                                    <Link
                                        to="/counter1"
                                        className="nav-link active"
                                        aria-current="page"
                                    >
                                        Counter 1
                                    </Link>
                                </li>
                                <li className="nav-item">
                                <Link
                                        to="/counter3"
                                        className="nav-link active"
                                        aria-current="page"
                                    >
                                        Counter 3
                                    </Link>
                                </li>
                               
                            </ul>
                        </div>
                  
                </div>
            </nav>
        </div>
        </div>
    );
};

export default Header;