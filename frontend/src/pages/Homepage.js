import { useState, useEffect } from 'react';
import axios from 'axios';

const Homepage = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/authToken`, { withCredentials: true })
            .then((res) => setToken(res.data.token))
            .catch(() => setToken(null));
    }, []);

    return <div>{!token ? 'no Token' : <div>{token}</div>}</div>;
};

export default Homepage
