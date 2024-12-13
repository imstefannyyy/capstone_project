import Map from "../utils/Maps";

function TableCard({ data, flagSize }) {
    return (
        <div className="w-100 card pt-3 px-1">
            <div className="d-flex justify-content-between border-bottom border-4 border-dark pb-2 px-2">
                <div className="d-flex flex-column justify-content-center">
                    <div className="d-flex">
                        <h6 className="text-muted me-2">
                            <a href={data.maps.googleMaps} target="_blank" rel="noopener noreferrer" className="text-dark">
                                <i className='fas fa-external-link' ></i>
                            </a>
                        </h6>
                        <h3>{data.name}</h3>
                        <h6 className="text-muted ms-2">
                            {data.cca2}
                        </h6>
                    </div>
                </div>
                <div className="d-flex">
                    <img
                        src={data.coatOfArms.png || "default-coat-of-arms.png"}
                        alt={`${data.name} coat of arms`}
                        className="img-fluid"
                        style={{ height: "50px", width: "50px" }}
                    />
                </div>
            </div>
            <div className="d-flex flex-column px-2">
                <div className="col-12 col-lg-6 my-2">
                    <img
                        src={data.flags.png}
                        alt={`${data.name} flag`}
                        className="img-fluid border border-dark w-50"
                        style={{ height: flagSize || "100px" }}
                    />
                </div>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td className="fw-bold w-25">Official Name</td>
                            <td>{data.officialName}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold w-25">Capital</td>
                            <td>{data.capital}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold w-25">Region</td>
                            <td>{data.region}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold w-25">Population</td>
                            <td>{new Intl.NumberFormat("en-US").format(data.population)}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold w-25">Currencies</td>
                            <td>{Object.keys(data.currencies).join(', ')}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold w-25">Area (km²)</td>
                            <td>{new Intl.NumberFormat("en-US").format(data.area)}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold w-25">Language(s)</td>
                            <td>{Object.values(data.languages).join(', ')}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold w-25">Timezone(s)</td>
                            <td>{data.timezones.join(', ')}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold w-25">Continent(s)</td>
                            <td>{data.continents.join(', ')}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold w-25">Map</td>
                            <td>
                                <Map coordinate={data.latlng} name={data.name} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableCard;
