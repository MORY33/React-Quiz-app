import axios from 'axios';
import React, { useState, useEffect } from 'react'

const useAxios = ({url}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    axios.defaults.baseURL = "https://opentdb.com/"

    useEffect(() => {
        const fetchData = () => {
            axios
               .get(url)
               .then(res => setResponse(res.data))
               .catch(err => setError(err))
               .finally(()=> setLoading(false))
        }
        fetchData();
    }, [url])
    return {response, error, loading}
}

export default useAxios