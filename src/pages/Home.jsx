import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Home/Header";
import Table from "../components/Home/Table";

function Home() {
    const countries = useSelector(state => state.countries);
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const [sortedCountries, setSortedCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortConfig, setSortConfig] = useState({ key: "population", direction: "desc" });
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(15);

    useEffect(() => {
        const result = countries.filter(country => {
            return country.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredCountries(result);
        setCurrentPage(1);
    }, [searchTerm, countries]);

    useEffect(() => {
        const sorted = [...filteredCountries].sort((a, b) => {
            if (!sortConfig.key) return 0;
            const valueA = a[sortConfig.key];
            const valueB = b[sortConfig.key];
            if (valueA < valueB) return sortConfig.direction === "asc" ? -1 : 1;
            if (valueA > valueB) return sortConfig.direction === "asc" ? 1 : -1;
            return 0;
        });
        setSortedCountries(sorted);
        setCurrentPage(1);
    }, [filteredCountries, sortConfig]);

    function handleSort(key) {
        setSortConfig({
            key,
            direction: sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc",
        });
    };

    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = sortedCountries.slice(indexOfFirstCountry, indexOfLastCountry);

    const totalPages = Math.ceil(sortedCountries.length / countriesPerPage);
    function handleNextPage() {
        setCurrentPage(currentPage + 1);
    }
    function handlePrevPage() {
        setCurrentPage(currentPage - 1);
    }

    return (
        <>
            <Header
                search={{searchTerm, setSearchTerm}}
                pagination={{
                    currentPage,
                    totalPages,
                    handleNextPage,
                    handlePrevPage,
                }}
            />
            <Table datas={currentCountries} handleSort={handleSort} sortConfig={sortConfig} currentPage={currentPage} countriesPerPage={countriesPerPage}/>
        </>
    )
};

export default Home;
