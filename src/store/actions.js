import axios from 'axios';

export const fetchCountries = () => {
    return async (dispatch) => {
        const results = await axios({
            method: 'GET',
            url: `https://restcountries.com/v3.1/all`,
        });
        const countries = results.data.map(country => ({
            ...country,
            name: country.name.common,
            officialName: country.name.official,
            nativeName: country.name.nativeName,
        }));
        dispatch({
            type: 'GET_COUNTRIES',
            countries: countries,
        });
    }
}
