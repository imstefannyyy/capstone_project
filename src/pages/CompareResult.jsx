import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import TableCard from "../components/Compare/TableCard";

function CompareResult() {
    const { code1, code2 } = useParams();
    const countries = useSelector(state => state.countries);
    const firstCountry = countries.find(country => country.cca2 === code1);
    const secondCountry = countries.find(country => country.cca2 === code2);

    return (
        <>
            <div className="container-fluid px-lg-5 pt-3 d-flex flex-wrap gap-1 justify-content-center" style={{maxHeight: "calc(100vh - 10rem)", flexGrow: 1, overflowY: "auto"}}>
                <div className="row w-75">
                    <div className="col-lg-6 col-12 d-flex justify-content-end">
                        <TableCard data={firstCountry}/>
                    </div>
                    <div className="col-lg-6 col-12">
                        <TableCard data={secondCountry}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareResult;
