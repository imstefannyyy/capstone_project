import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Navbar, Nav } from 'react-bootstrap';
import { fetchCountries } from "../store/actions";

function MainLayout() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountries());
    }, []);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
                <div className="container-fluid mx-lg-4">
                    <Navbar.Brand as={Link} to="/">🌎 WorldRankHub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/compare">Compare</Nav.Link>
                            <Nav.Link as={Link} to="/news">News/Articles</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <Outlet />
        </>
    )   
}

export default MainLayout;
