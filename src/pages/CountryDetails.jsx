import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import TableCard from "../components/Compare/TableCard";

function CountryDetails() {
    const { cca2 } = useParams();
    const countries = useSelector(state => state.countries);
    const country = countries.find(country => country.cca2 === cca2);

    return (
        <div className="container-fluid px-lg-5 pt-3">
            <TableCard data={country} flagSize={"15rem"} />
        </div>
    );
}

export default CountryDetails;
