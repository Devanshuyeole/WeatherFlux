import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { API_KEY, API_URL } from './config';
import "./SearchBox.css";

export default function SearchBox({ updateWhetherInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    // Function to fetch weather info
    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) throw new Error("City not found");
            const data = await response.json();

            return {
                city: city,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description,
            };
        } catch (err) {
            throw err;
        }
    };

    // Handle input change
    const handleChange = (event) => {
        setCity(event.target.value);
    };

    // Handle form submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(false);

        try {
            const newInfo = await getWeatherInfo();
            updateWhetherInfo(newInfo);
            setCity(""); // Reset input
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className='searchbox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    style={{ border: "1px solid black" }}
                />
                <Button
                    variant="contained"
                    color='secondary'
                    endIcon={<SendIcon />}
                    type='submit'
                    className='searchboxButton'
                    style={{ marginLeft: "20px", backgroundColor: "#4facfe", color: "white" }}
                >
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No such city exists in our API</p>}
            </form>
        </div>
    );
}
