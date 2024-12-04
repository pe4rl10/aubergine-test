import React, { useEffect, useState } from 'react'
import { getAll, searchCountry } from '../services/ApiCalls';
import Card from './card/Card';
import './mainPage.scss';

let filterBy = {}
const MainPage = () => {
    const [country, setCountry] = useState('');
    const [province, setProvince] = useState('');
    const [data, setData] = useState([]);
    const [provinces, setProvinces] = useState([]);

    useEffect(() => {
        async function fetchAll() {
            setData(await getAll());
        } 
        fetchAll();
    }, []);

    const filterByProvince = () => {
        return data?.filter((uni) => uni["state-province"] === province);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(country);
        setData(await searchCountry(country));
        const uniqueProvinces = [...new Set(data?.map((item) => item["state-province"]))];
        setProvinces(uniqueProvinces.filter((prov) => prov));
        setCountry('');
    }
    
    return (
        <div className='main'>
            <input 
                type='text'
                id='country'
                name='country'
                placeholder='Enter country name'
                value={country}
                onChange={(e) => {setCountry(e.target.value)}}
                >
            </input>
            <button onClick={handleSubmit}>Search</button>
            {provinces.length > 0 && (
                <select onChange={(e) => setProvince(e.target.value)}>
                <option value="">Select Province</option>
                {provinces.map((prov) => (
                    <option key={prov} value={prov}>
                    {prov}
                    </option>
                ))}
                </select>
            )}

            <div className='allCards'>
                {(province ? filterByProvince() : data).map((item, id) => (
                    <Card index={`card-${id}`} university={item.name} link={item.web_pages}></Card>
                ))}
            </div>


            
            
        </div>
    )
}

export default MainPage