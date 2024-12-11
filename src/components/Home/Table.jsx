import React from "react";
import { useNavigate } from 'react-router-dom';

function Table({datas, handleSort, sortConfig, currentPage, countriesPerPage}) {
    const navigate = useNavigate();

    function handleDetails(code) {
        navigate(`/country/${code}`)
    }

    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead className="text-center">
                    <tr>
                        <th>Rank</th>
                        <th>Flag</th>
                        <th onClick={() => handleSort("name")}>
                            Name {sortConfig.key === "name" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                        </th>
                        <th onClick={() => handleSort("cca2")}>
                            Code {sortConfig.key === "cca2" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                        </th>
                        <th onClick={() => handleSort("capital")}>
                            Capital {sortConfig.key === "capital" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                        </th>
                        <th onClick={() => handleSort("population")}>
                            Population {sortConfig.key === "population" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                        </th>
                        <th onClick={() => handleSort("area")}>
                            Area {sortConfig.key === "area" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                        </th>
                        <th>Region</th>
                    </tr>
                </thead>
                <tbody>
                    {datas && datas.map((data, index) => (
                        <tr key={index} onClick={() => handleDetails(data.cca2)}>
                            <td className="text-center">{(currentPage - 1) * countriesPerPage + index + 1}</td>
                            <td className="text-center">
                                <img
                                    src={data.flags.png}
                                    alt={`${data.name} flag`}
                                    className="img-fluid"
                                    style={{ height: "30px", width: "50px" }}
                                />
                            </td>
                            <td>{data.name}</td>
                            <td className="text-center">{data.cca2}</td>
                            <td>{data.capital}</td>
                            <td className="text-end">
                                {new Intl.NumberFormat("en-US", {
                                    notation: "compact",
                                    compactDisplay: "short",
                                }).format(data.population)}
                            </td>
                            <td className="text-end">
                                {new Intl.NumberFormat("en-US").format(data.area)}
                            </td>
                            <td>{data.region}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
