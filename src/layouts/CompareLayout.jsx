import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Compare/Header";
import { Outlet, useNavigate } from 'react-router-dom';

function Compare() {
    const countries = useSelector(state => state.countries);
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const result = countries.filter(country => {
            return country.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredCountries(result);
    }, [searchTerm, countries]);

    return (
        <div className="d-flex flex-column" style={{maxHeight: "92vh"}}>
            <Header
                search={{searchTerm, setSearchTerm}}
            />
            <div className="container-fluid px-lg-5 pt-3 flex-shrink-0">
                <h1 className="text-center">Country comparison</h1>
            </div>
            <Outlet context={{
                filteredCountries,
            }}/>
        </div>
    )
}

export default Compare;
