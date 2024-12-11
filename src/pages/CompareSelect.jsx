import React, { useState } from "react";
import Kanban from "../components/Compare/Kanban";
import { useOutletContext, useNavigate } from 'react-router-dom';

function CompareSelect() {
    const { filteredCountries } = useOutletContext();

    const [firstCountry, setFirstCountry] = useState(null);
    const [secondCountry, setSecondCountry] = useState(null);
    const navigate = useNavigate();

    function handleCountrySelected(country) {
        if (!firstCountry) {
            setFirstCountry(country);
        } else if (!secondCountry) {
            setSecondCountry(country);
        } else {
            alert("Both countries have already been selected!");
        }
    }

    function handleCompare() {
        navigate(`/compare/${firstCountry.cca2}/n/${secondCountry.cca2}`)
    }

    return (
        <>
            <div className="container-fluid px-lg-5 py-2 border-bottom border-2">
                <div className="py-3 row">
                    <div className="col-12 col-lg-6 d-flex justify-content-end pb-2 pb-lg-0 border-end border-dark border-2 pe-4" style={{height: "20vh"}}>
                        <i className="fas fa-trash me-3 my-auto" aria-hidden="true" onClick={() => setFirstCountry(null)}></i>
                        <div className="col-11 col-lg-5 border border-dark">
                            <img src={firstCountry?.flags.png} alt="Select country" className="img-fluid" style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex pt-2 pt-lg-0 ps-4" style={{height: "20vh"}}>
                        <div className="col-11 col-lg-5 border border-dark">
                            <img src={secondCountry?.flags.png} alt="Select country" className="img-fluid" style={{ height: "100%", width: "100%" }} />
                        </div>
                        <i className="fas fa-trash ms-3 my-auto" aria-hidden="true" onClick={() => setSecondCountry(null)}></i>
                    </div>
                </div>
                <button className="btn btn-outline-dark d-flex mx-auto mb-3" disabled={!firstCountry || !secondCountry} onClick={handleCompare}>
                    Compare
                </button>
            </div>
            <div className="container-fluid px-lg-5 pt-3 d-flex flex-wrap gap-1 justify-content-around" style={{maxHeight: "calc(100vh - 20vh - 14rem)", flexGrow: 1, overflowY: "auto"}}>
                {filteredCountries && filteredCountries.map((country, index) => {
                    return <Kanban data={country} key={index} onClick={() => handleCountrySelected(country)} />
                })}
            </div>
        </>
    )
}

export default CompareSelect;
