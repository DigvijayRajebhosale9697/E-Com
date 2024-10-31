import axios from 'axios';

const baseURL = 'http://localhost:5000/api';

const signup = async (name, email, password, geolocation) => {
    try {
        const response = await axios.post(`${baseURL}/createUser`, {
            name,
            email,
            password,
            location: geolocation
        });
        console.log(response)
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

const login = async (email, password) => {
    try {
        const response = await axios.post(`${baseURL}/loginUser`, {
            email,
            password
        });
        localStorage.setItem('userEmail', email);
        localStorage.setItem('authToken', response.data.authToken);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export { signup, login };
