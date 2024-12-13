import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function CountryDetails() {
    const { cca2 } = useParams();
    const countries = useSelector(state => state.countries);
    const country = countries.find(country => country.cca2 === cca2);

    const currencyNames = Object.values(country.currencies).map(currency => currency.name);
    const currencySymbols = Object.values(country.currencies).map(currency => currency.symbol);

    return (
        <div className="container-fluid px-lg-5 pt-3">
            <div className="d-flex justify-content-between border-bottom border-4 border-dark mb-2">
                <div className="d-flex flex-column">
                    <div className="d-flex">
                        <h1>{country.name}</h1>
                        <h6 className="text-muted ms-2">{country.cca2}</h6>
                    </div>
                    <h5 className="text-muted">{country.region} - {country.subregion}</h5>
                    <p className="text-muted">{country.name.official}</p>
                </div>
                <div className="d-flex">
                    <img
                        src={country.coatOfArms.png || "default-coat-of-arms.png"}
                        alt={`${country.name} coat of arms`}
                        className="img-fluid"
                        style={{ height: "75px", width: "75px" }}
                    />
                </div>
            </div>

            <div className="d-flex">
                <div className="col-12 col-lg-4 mt-2">
                    <img
                        src={country.flags.png}
                        alt={`${country.name} flag`}
                        className="img-fluid border border-dark"
                    />
                </div>

                <table className="table table-borderless">
                    <tbody>
                        <tr>
                            <th scope="row">Capital</th>
                            <td>{country.capital[0]}</td>
                        </tr>
                        <tr>
                            <th scope="row">Area</th>
                            <td>{country.area} km²</td>
                        </tr>
                        <tr>
                            <th scope="row">Region</th>
                            <td>{country.region}</td>
                        </tr>
                        <tr>
                            <th scope="row">Subregion</th>
                            <td>{country.subregion}</td>
                        </tr>
                        <tr>
                            <th scope="row">Population</th>
                            <td>{country.population}</td>
                        </tr>
                        <tr>
                            <th scope="row">Languages</th>
                            <td>{country.languages.fra}</td>
                        </tr>
                        <tr>
                            <th scope="row">Currency</th>
                            <td>
                                {currencyNames.join(", ")} ({currencySymbols.join(", ")})
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Timezone</th>
                            <td>{country.timezones[0]}</td>
                        </tr>
                        <tr>
                            <th scope="row">Driving Side</th>
                            <td>{country.car.side}</td>
                        </tr>
                        <tr>
                            <th scope="row">Maps</th>
                            <td>
                                <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">Google Maps</a> |&nbsp;
                                <a href={country.maps.openStreetMaps} target="_blank" rel="noopener noreferrer">OpenStreetMap</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CountryDetails;
