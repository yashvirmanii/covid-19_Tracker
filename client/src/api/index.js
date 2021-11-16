import axios from 'axios';


const URL_All_Countries = "https://corona.lmao.ninja/v2/countries"
var options = {
    url: URL_All_Countries,
};

export const getCountryReport = async () => {
    try {
        const response = await axios.get(URL_All_Countries, options)
        return response
    } catch (error) {
        console.log(error);
    }
}