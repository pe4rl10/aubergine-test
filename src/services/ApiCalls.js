import axios from 'axios'

const API_URL = 'http://universities.hipolabs.com'

export async function searchCountry(country) {
    const response = await axios.get(`${API_URL}/search?country=${country}`);
    return response.data;
}

export async function getAll() {
    const response = await axios.get(`${API_URL}/search?name=college`);
    return response.data;
}